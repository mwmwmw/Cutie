import Memo from "memo";

const CUE_ADDED = "CueAdded";

export default class Cutie extends Memo {

	constructor({video}) {
		super();
		this.video = video;
		this.cues = [];

		this.cueTrack = this.video.addTextTrack("metadata", "cue");

		this.cueTrack.addEventListener("cuechange", (e)=>{ console.log(e)});

		this.cueTrack.addEventListener("error", (e)=>{ console.log(e)});
		this.cueTrack.addEventListener("change", (e)=>{ console.log(e)});

		this.cueTrack.addEventListener("enter", (e)=>{ console.log(e)});
		this.cueTrack.addEventListener("exit", (e)=>{ console.log(e)});

	}
	change(e) {

	}
	addCue (start, end, id) {
		let cue = new VTTCue(start, end, '');
			cue.id = id;
			cue.pauseOnExit = true;
		this.cues.push(cue);
		this.cueTrack.addCue(cue);
		this.trigger(CUE_ADDED);
	}
	removeCue(id) {
		var index = this.cues.findIndex((cue)=>{return cue.id === id});
		let cue = this.cues.splice(index, 1);
		this.cueTrack.removeCue(cue);
	}

}
window.Cutie = Cutie;