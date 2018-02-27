import * as Tone from 'tone'

class Sound {
  constructor() {
    this.synth = new Tone.Synth({
      oscillator : {
        type: 'triangle',
      }  ,
      envelope  : {
        attack  : 0.001 ,
        decay  : 0.1 ,
        sustain  : 0.3 ,
        release  : 1
      }
    }).toMaster();

    this.noteOn = this.noteOn.bind(this);
    this.noteOff = this.noteOff.bind(this);
  }

  noteOn(note) {
    this.synth.triggerAttack(note);
  }

  noteOff(note) {
    this.synth.triggerRelease();
  }

}

export default Sound;

// var sampler = new Tone.Sampler({
//   "C3" : "path/to/C3.mp3",
// }, function(){
//   //sampler will repitch the closest sample
//   sampler.triggerAttack("D3")
// })