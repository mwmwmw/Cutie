import Memo from "memo";

const CUE_CHANGE = "cuechange";
const ERROR = "error";
const CHANGE = "change";
const ENTER = "enter";
const EXIT = "exit";

export default class Cutie extends Memo {
	constructor({video, name="cue"}) {
		super();
		this.video = video;
		this.cues = [];
		this.cueTrack = this.video.addTextTrack("metadata", name);

		this._changeProxy = (e)=>{this.change(e)};
		this._cueChangeProxy = (e)=>{this.cueChange(e)};
		this._errorProxy = (e)=>{this.error(e)};
		this._enterProxy = (e)=>{this.enter(e)};
		this._exitProxy = (e)=>{this.exit(e)};

		this.bind();
	}
	bind() {
		this.cueTrack.addEventListener(CUE_CHANGE, this._cueChangeProxy);
		this.cueTrack.addEventListener(ERROR, this._errorProxy);
		this.cueTrack.addEventListener(CHANGE, this._changeProxy);
		this.cueTrack.addEventListener(ENTER, this._enterProxy);
		this.cueTrack.addEventListener(EXIT, this._exitProxy);
	}
	unbind() {
		this.cueTrack.removeEventListener(CUE_CHANGE, this._changeProxy);
		this.cueTrack.removeEventListener(ERROR, this._errorProxy);
		this.cueTrack.removeEventListener(CHANGE, this._changeProxy);
		this.cueTrack.removeEventListener(ENTER, this._enterProxy);
		this.cueTrack.removeEventListener(EXIT, this._exitProxy);
	}
	change(e) {
		this.trigger(CHANGE,e);
	}
	cueChange(e) {
		this.trigger(CUE_CHANGE,e);
	}
	error (e) {
		this.trigger(ERROR,e);
	}
	enter (e) {
		this.trigger(ENTER,e);
	}
	exit (e) {
		this.trigger(EXIT,e);
	}
	addCue (start, end, id) {
		const cue = new VTTCue(start, end, '');
			cue.id = id;
			cue.pauseOnExit = true;
		this.cues.push(cue);
		this.cueTrack.addCue(cue);
	}
	removeCue(id) {
		const index = this.cues.findIndex((cue)=>{return cue.id === id});
		const cue = this.cues.splice(index, 1);
		this.cueTrack.removeCue(cue);
	}
}
window.Cutie = Cutie;