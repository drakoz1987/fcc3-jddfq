(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e){e.exports=[{id:"1",preset:"base",tag:"Base",sounds:[{id:"01",name:"Q",tag:"Ride-1",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/482[kb]Ride_01-vs.aif.mp3"},{id:"02",name:"W",tag:"Ride-2",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/289[kb]Ride_02.1-vs.aif.mp3"},{id:"03",name:"E",tag:"Ride-3",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Rides/267[kb]Ride_02.2-vs.aif.mp3"},{id:"04",name:"A",tag:"Snare",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Snares/18[kb]SNARE808.aif.mp3"},{id:"05",name:"S",tag:"Glass-Hammer",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Crashes/16[kb]glasshammer.aif.mp3"},{id:"06",name:"D",tag:"Distorto-Tom",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Toms/33[kb]distortotom.aif.mp3"},{id:"07",name:"Z",tag:"Open-HH-2",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/43[kb]ohh808b.aif.mp3"},{id:"08",name:"X",tag:"Close-HH-2",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/9[kb]chh2.aif.mp3"},{id:"09",name:"C",tag:"Clap",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Claps/13[kb]Clap2.wav.mp3"}]},{id:"2",preset:"alternative",tag:"Alternative",sounds:[{id:"10",name:"Q",tag:"Disco-Guitar-1",url:"https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/41[kb]disco-guitar-notes-1.wav.mp3"},{id:"11",name:"W",tag:"Disco-Guitar-2",url:"https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/98[kb]disco-guitar-notes-2.wav.mp3"},{id:"12",name:"E",tag:"Disco-Guitar-3",url:"https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Guitars/77[kb]disco-guitar-notes-3.wav.mp3"},{id:"13",name:"A",tag:"Kick-Hat",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/81[kb]kick-hat-inxs.wav.mp3"},{id:"14",name:"S",tag:"Hecteck-Kick",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Kicks/26[kb]hectech-kick.wav.mp3"},{id:"15",name:"D",tag:"Open-HH-1",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/46[kb]ohh808.aif.mp3"},{id:"16",name:"Z",tag:"Close-HH-1",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Hats/11[kb]chh.aif.mp3"},{id:"17",name:"X",tag:"Punchy-Kick",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Punches%20Hits%20Discoblasts/81[kb]kickhats.aif.mp3"},{id:"18",name:"C",tag:"Disco-Stab",url:"https://sampleswap.org/samples-ghost/DRUMS%20(SINGLE%20HITS)/Melodic%20Stabs%20and%20Hits/215[kb]disco-synth-stab.wav.mp3"}]}]},21:function(e,a,t){e.exports=t(30)},30:function(e,a,t){"use strict";t.r(a);var s=t(8),n=t(20),r=t(0),i=t.n(r),l=t(9),p=t.n(l),o=t(11),c=t(3),d=t(1),m=t(4),u=t(2),h=t(5),S=t(12),b=function(e){return{type:"DISPLAY_SOUND",payload:{selectedSound:e}}},g=function(e){function a(){return Object(d.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(S.a)(a,[{key:"render",value:function(e){var a=this,t=this.props.item;return i.a.createElement("div",{className:"drum-pad ui inverted secondary button huge ".concat(this.props.disabled),onClick:function(){a.props.playSound(t),a.props.displaySound(t)},key:t.id,id:t.name},i.a.createElement("audio",{className:"clip ".concat(t.name),src:t.url,id:t.name,volume:this.props.volume}),t.name)}}]),a}(i.a.Component),E=Object(c.b)(function(e,a){return{volume:e.volume,playSound:e.playSound,isOn:e.isOn,disabled:e.disabled}},{displaySound:b})(g),f=function(e){function a(){var e,t;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).execute=function(e,a,t){t(e),a(e)},t.componentDidMount=function(){document.addEventListener("keydown",function(e){var a=e.key.toUpperCase();if("Q"===a||"W"===a||"E"===a||"A"===a||"S"===a||"D"===a||"Z"===a||"X"===a||"C"===a){var s=t.props.soundsData[t.props.preset?0:1].sounds.filter(function(e){return e.name===a});console.log(s),t.props.isOn&&t.execute(s[0],t.props.playSound,t.props.displaySound)}})},t}return Object(h.a)(a,e),Object(S.a)(a,[{key:"render",value:function(){var e;switch(this.props.preset){case!0:e=this.props.soundsData[0].sounds.map(function(e){return i.a.createElement(E,{key:e.id,item:e})});break;case!1:e=this.props.soundsData[1].sounds.map(function(e){return i.a.createElement(E,{key:e.id,item:e})});break;default:e=i.a.createElement("div",null,"No Data")}return i.a.createElement("div",{className:"drum-pad__container"},e)}}]),a}(r.Component),O=Object(c.b)(function(e,a){return{preset:e.preset,soundsData:e.soundsData,playSound:e.playSound,isOn:e.isOn}},{displaySound:b})(f),N=function(e){function a(){var e,t;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={},t.componentDidMount=function(){},t.handleChange=function(e){t.props.changePreset(t.props.preset)},t.handleChangeOnOff=function(e){t.props.turnOnOff(t.props.isOn,t.props.disabled)},t.render=function(e){return i.a.createElement("div",{className:"ui card",id:"card"},i.a.createElement("div",{className:"content drum-machine-display__container",id:"drum-display-container"},i.a.createElement("div",{id:"display",className:"header drum-machine-display"},i.a.createElement("p",{className:"showed"},t.props.selectedSound))),i.a.createElement("div",{className:"ui small feed"},i.a.createElement("div",{className:"event",id:"power"},i.a.createElement("div",{className:"content-switch"},i.a.createElement("span",{className:"ui label"},"Alt"),i.a.createElement("label",{className:"switch"},i.a.createElement("input",{type:"checkbox",defaultChecked:t.props.preset,onChange:t.handleChange}),i.a.createElement("span",{className:"slider"})),i.a.createElement("span",{className:"ui label"},"Bas")))),i.a.createElement("div",{className:"ui small feed"},i.a.createElement("div",{className:"event",id:"changeBeat"},i.a.createElement("div",{className:"content-switch"},i.a.createElement("span",{className:"ui label"},"Off"),i.a.createElement("label",{className:"switch"},i.a.createElement("input",{type:"checkbox",defaultChecked:t.props.isOn,onChange:t.handleChangeOnOff}),i.a.createElement("span",{className:"slider"})),i.a.createElement("span",{className:"ui label"},"On")))))},t}return Object(h.a)(a,e),a}(r.Component),v=Object(c.b)(function(e,a){return{preset:e.preset,selectedSound:e.selectedSound,isOn:e.isOn,disabled:e.disabled}},{changePreset:function(e){return{type:"CHANGE_PRESET",payload:{preset:e}}},turnOnOff:function(e,a){return{type:"ON/OFF",payload:{isOn:e,disabled:a}}}})(N),k=function(e){function a(){var e,t;Object(d.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).render=function(){return i.a.createElement("div",{id:"drum-machine",className:"drum-machine"},i.a.createElement(O,null),i.a.createElement(v,null))},t}return Object(h.a)(a,e),a}(r.Component),y=function(e){return i.a.createElement("div",{id:"App",className:"app"},i.a.createElement("h2",{className:"main-title"},"Drum Machine By Jhonathan De Freitas"),i.a.createElement(k,null))},w=t(19),D={preset:!0,soundsData:Object(n.a)(w),selectedSound:"Test",isOn:!0,disabled:"",volume:5,playSound:function(e){var a=document.querySelector(".".concat(e.name));a.currentTime=0,a.play()}},I=Object(o.b)(function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_PRESET":e=Object(s.a)({},a,{preset:!0!==t.payload.preset});break;case"DISPLAY_SOUND":e=Object(s.a)({},a,{selectedSound:t.payload.selectedSound.tag});break;case"ON/OFF":e=Object(s.a)({},a,{isOn:!t.payload.isOn,disabled:t.payload.isOn?"disabled":""});break;default:e=Object(s.a)({},a)}return e},D,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),H=document.querySelector("#root"),R=i.a.createElement(c.a,{store:I},i.a.createElement(y,null));p.a.render(R,H)}},[[21,1,2]]]);
//# sourceMappingURL=main.8c7e1e56.chunk.js.map