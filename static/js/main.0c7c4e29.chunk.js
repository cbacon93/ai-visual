(this["webpackJsonpai-visual"]=this["webpackJsonpai-visual"]||[]).push([[0],{39:function(t,e,i){},49:function(t,e,i){},55:function(t,e,i){},56:function(t,e,i){"use strict";i.r(e);var s=i(3),n=i(0),a=i.n(n),r=i(21),c=i.n(r),o=(i(39),i(8)),l=i(7),h=i(10),u=i(13),m=i(12),d=i(11),p=i(32),A=i(61),g=i(60),f=(i(49),i(50),function(t){Object(u.a)(i,t);var e=Object(m.a)(i);function i(){return Object(l.a)(this,i),e.apply(this,arguments)}return Object(h.a)(i,[{key:"render",value:function(){var t=this;return Object(s.jsxs)(g.a,{className:"m-2",children:[Object(s.jsx)(g.a.Toggle,{variant:"secondary",id:"dropdown-basic",children:this.props.items[this.props.selected].name}),Object(s.jsx)(g.a.Menu,{children:this.props.items.map((function(e){return Object(s.jsx)(g.a.Item,{onClick:function(){t.props.onSelect(e.id)},children:e.name})}))})]})}}]),i}(n.Component)),v=function(t){Object(u.a)(i,t);var e=Object(m.a)(i);function i(){var t;Object(l.a)(this,i);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))).algorithms=[{id:0,name:"Genetic"}],t.state={ai_selection:0,nchildren:100,sel_cutoff:20,mut_chance:20,mut_amt:20},t.handleAiSelect=function(e){t.setState({ai_selection:e}),t.props.onChange(t.state)},t.handleRangeSelect=function(e){var i={};i[e.target.name]=e.target.value,t.setState(i),t.props.onChange(t.state)},t}return Object(h.a)(i,[{key:"render",value:function(){return Object(s.jsxs)("nav",{className:"sidebar",children:[Object(s.jsx)("h1",{children:"AI Visual"}),Object(s.jsx)("hr",{}),Object(s.jsx)(f,{items:this.algorithms,selected:this.state.ai_selection,onSelect:this.handleAiSelect}),"Generation ",this.props.parentState.sim_iterations," ",Object(s.jsx)("br",{}),"Current time ",Math.round(this.props.parentState.sim_roundtime)," ",Object(s.jsx)("br",{}),"Total time ",Math.round(this.props.parentState.sim_total_time)," ",Object(s.jsx)("br",{}),function(){return this.props.parentState.is_running?Object(s.jsx)(p.a,{className:"m-2",variant:"warning",onClick:this.props.onStartStop,children:"Pause"}):Object(s.jsx)(p.a,{className:"m-2",variant:"success",onClick:this.props.onStartStop,children:"Start"})}.call(this),Object(s.jsx)(p.a,{className:"m-2",variant:"danger",onClick:this.props.onReset,children:"Reset"}),Object(s.jsxs)(A.a.Group,{className:"m-2",controlId:"formBasicRangeCustom",children:[Object(s.jsxs)(A.a.Label,{children:["Number of children: ",this.state.nchildren]}),Object(s.jsx)(A.a.Control,{name:"nchildren",onChange:this.handleRangeSelect,type:"range",min:"10",max:"500",step:"10",value:this.state.nchildren,custom:!0})]}),Object(s.jsxs)(A.a.Group,{className:"m-2",controlId:"formBasicRangeCustom",children:[Object(s.jsxs)(A.a.Label,{children:["Selection cutoff: ",this.state.sel_cutoff,"%"]}),Object(s.jsx)(A.a.Control,{name:"sel_cutoff",onChange:this.handleRangeSelect,type:"range",min:"1",max:"100",step:"1",value:this.state.sel_cutoff,custom:!0})]}),Object(s.jsxs)(A.a.Group,{className:"m-2",controlId:"formBasicRangeCustom",children:[Object(s.jsxs)(A.a.Label,{children:["Mutation chance: ",this.state.mut_chance,"%"]}),Object(s.jsx)(A.a.Control,{name:"mut_chance",onChange:this.handleRangeSelect,type:"range",min:"1",max:"100",step:"1",value:this.state.mut_chance,custom:!0})]}),Object(s.jsxs)(A.a.Group,{className:"m-2",controlId:"formBasicRangeCustom",children:[Object(s.jsxs)(A.a.Label,{children:["Mutation amount: ",this.state.mut_amt,"%"]}),Object(s.jsx)(A.a.Control,{name:"mut_amt",onChange:this.handleRangeSelect,type:"range",min:"1",max:"1000",step:"1",value:this.state.mut_amt,custom:!0})]}),"Generations:",Object(s.jsx)("br",{}),Object(s.jsx)("ul",{children:this.props.parentState.generations.slice(0).reverse().slice(0,10).map((function(t){return Object(s.jsxs)("li",{children:["G",t.gen," = ",Math.round(t.best)]},t.gen)}))})]})}}]),i}(n.Component),j=function(){function t(e,i){Object(l.a)(this,t),this.start_x=0,this.start_y=0,this.sprite=void 0,this.age=0,this.points=0,this.reatched_target=!1,this.start_x=e||0,this.start_y=i||0,this.sprite=d.b.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAlCAYAAABcZvm2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAWNJREFUeNrsV8sNwjAMbUqBBWACxB2pQ8AKcGALTsAJuDEFB1gBhuDAuWICmICPQh01pXWdJqEFcaglRGRbfonjPLuMc+5QwhjLGEJfZusjxZOL9akZKye9G98vPMfvsAx4qBfKwfzBL9s6uUHpI6U/u7+BKGkNb/H6umtk7MczF0HyfKS4zo/k/4AgTV8DOizrqX8oECgC+MGa8lGJp9sJDiAB8nyqYoglvJOPbP97IqoATGxWVZeXJlMQwYHA3piF8wJIblOVNBBxe3TPMLoHIKtxrbS7AAbBrA4Y5NaPAXf8LjN6wKZ0RaZOnlAFZnuXInVR4FTE6eYp0olPhhshtXsAwY3PquoAJNkIY33U7HTs7hYBwV24ItUKqDwgKF3VzAZ6k8HF+B1BMF8xRJbeJoqMXHZAAQ1kwoluURCdzepEugGEImBrIADB7I4lyfbJLlw92FKE6b5hVd+ktv4vAQYASMWxvlAAvcsAAAAASUVORK5CYII="),this.sprite.anchor.set(.5),this.reset()}return Object(h.a)(t,[{key:"reset",value:function(){this.sprite.x=this.start_x,this.sprite.y=this.start_y,this.age=0,this.points=0,this.reatched_target=!1}}]),t}(),b=function t(e,i){Object(l.a)(this,t),this.x=0,this.y=0,this.sprite=void 0,this.x=e||0,this.y=i||0,this.sprite=d.b.from("data:image/png;base64,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"),this.sprite.anchor.set(.5),this.sprite.x=this.x,this.sprite.y=this.y},x=function t(){Object(l.a)(this,t)};x.setup=function(t){var e,i=Object(o.a)(t);try{for(i.s();!(e=i.n()).done;){var s=e.value;s.instr=[];for(var n=0;n<20;n++){var a={x:2*Math.random()-1,y:2*Math.random()-1,time:20*Math.random()};s.instr.push(a)}}}catch(r){i.e(r)}finally{i.f()}x.reset(t)},x.reset=function(t){var e,i=Object(o.a)(t);try{for(i.s();!(e=i.n()).done;){var s=e.value;s.instr_ptr=0,s.instr_tmr=0}}catch(n){i.e(n)}finally{i.f()}},x.simulate=function(t,e){var i,s=!1,n=Object(o.a)(e);try{for(n.s();!(i=n.n()).done;){var a=i.value,r=t;do{if(a.instr_ptr>=a.instr.length){r=0;break}var c=a.instr[a.instr_ptr];s=!0;var l=r<=c.time-a.instr_tmr?r:c.time-a.instr_tmr;a.sprite.x+=c.x*l,a.sprite.y-=c.y*l,a.instr_tmr+=l,r-=l,a.instr_tmr>=c.time&&(a.instr_ptr++,a.instr_tmr=0)}while(r>0)}}catch(h){n.e(h)}finally{n.f()}return s},x.cutValue=function(t,e,i){return t>i?i:t<e?e:t},x.mutate=function(t,e){var i,s=t.map((function(t){return Object.assign({},t)})),n=Object(o.a)(s);try{for(n.s();!(i=n.n()).done;){var a=i.value;100*Math.random()<e.mut_chance&&(a.x+=2*(2*Math.random()-1)*e.mut_amt/100,a.x=x.cutValue(a.x,-2,2),a.y+=2*(2*Math.random()-1)*e.mut_amt/100,a.y=x.cutValue(a.y,-2,2),a.time+=30*(2*Math.random()-1)*e.mut_amt/100,a.time=x.cutValue(a.time,0,30))}}catch(r){n.e(r)}finally{n.f()}return s},x.improve=function(t,e){var i,s=[];t.sort((function(t,e){return e.points-t.points})),i=t[0].points;for(var n=Math.floor(e.sel_cutoff/100*t.length),a=0;a<n;a++)s.push(t[a]);for(var r=0;r<t.length;r++)t[r].instr=x.mutate(s[r%n].instr,e);return i};var O=x,C=(i(55),function(t){Object(u.a)(i,t);var e=Object(m.a)(i);function i(){var t;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).pixi=d.a,t.state={is_running:!1,sim_iterations:0,sim_roundtime:0,sim_total_time:0,generations:[]},t.entities=[],t.target=b,t.settings={ai_selection:0,nchildren:100,sel_cutoff:20,mut_chance:20,mut_amt:20},t.reset=function(){var e,i=Object(o.a)(t.entities);try{for(i.s();!(e=i.n()).done;){var s=e.value;t.pixi.stage.removeChild(s.sprite)}}catch(h){i.e(h)}finally{i.f()}for(var n=[],a=0;a<t.settings.nchildren;a++)n.push(new j(t.pixi.view.width/2,t.pixi.view.height-50));t.entities=n;var r,c=Object(o.a)(t.entities);try{for(c.s();!(r=c.n()).done;){var l=r.value;t.pixi.stage.addChild(l.sprite)}}catch(h){c.e(h)}finally{c.f()}t.setState({sim_roundtime:0,sim_total_time:0,sim_iterations:0,generations:[]}),O.setup(t.entities)},t.resetEntities=function(){var e,i=Object(o.a)(t.entities);try{for(i.s();!(e=i.n()).done;){e.value.reset(),O.reset(t.entities)}}catch(s){i.e(s)}finally{i.f()}},t.render=function(){return console.log(t.state),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(v,{parentState:t.state,onChange:t.handleSettingsChange,onStartStop:t.handleUserStartStop,onReset:t.handleUserReset}),Object(s.jsx)("div",{className:"Canvas",ref:function(e){t.pixiCanvas=e}})]})},t.handleUserReset=function(){t.reset()},t.handleUserStartStop=function(){t.setState({is_running:!t.state.is_running})},t.handleSettingsChange=function(e){t.settings=e},t.calculateEntityPoints=function(e){var i,s=Object(o.a)(t.entities);try{for(s.s();!(i=s.n()).done;){var n=i.value;n.age+=e;var a=n.sprite.x-t.target.sprite.x,r=n.sprite.y-t.target.sprite.y,c=Math.sqrt(a*a+r*r);n.points+=(200-c)*e}}catch(l){s.e(l)}finally{s.f()}},t.simulate=function(e){if(t.state.is_running){t.setState({sim_roundtime:t.state.sim_roundtime+e,sim_total_time:t.state.sim_total_time+e});var i=O.simulate(e,t.entities);if(t.calculateEntityPoints(e),t.sim_roundtime>=300||!i){var s=O.improve(t.entities,t.settings);t.resetEntities();var n=t.state.generations;n.push({gen:t.state.sim_iterations,best:s}),t.setState({sim_roundtime:0,sim_iterations:t.state.sim_iterations+1,generations:n})}}},t}return Object(h.a)(i,[{key:"componentDidMount",value:function(){this.pixi=new d.a({width:this.pixiCanvas.clientWidth,height:this.pixiCanvas.clientHeight,backgroundColor:16773375}),console.log(this.pixiCanvas),this.pixiCanvas.appendChild(this.pixi.view),this.pixi.ticker.add(this.simulate),this.target=new b(this.pixi.view.width/2,50),this.pixi.stage.addChild(this.target.sprite),this.reset()}}]),i}(n.Component)),S=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,62)).then((function(e){var i=e.getCLS,s=e.getFID,n=e.getFCP,a=e.getLCP,r=e.getTTFB;i(t),s(t),n(t),a(t),r(t)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),S()}},[[56,1,2]]]);
//# sourceMappingURL=main.0c7c4e29.chunk.js.map