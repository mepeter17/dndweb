(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){e.exports=a.p+"static/media/dwarf.9c1fef1f.png"},37:function(e,t,a){e.exports=a.p+"static/media/d_d_logo.918e7d03.jpg"},44:function(e,t,a){e.exports=a(86)},51:function(e,t,a){},54:function(e,t,a){},56:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/skeleton_dragon.317aa000.png"},61:function(e,t,a){},63:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),s=a(5),i=a(6),o=a(9),u=a(7),m=a(10),h=a(37),d=a.n(h),E=a(87),p=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",null,l.a.createElement(E.a,{to:"/"},l.a.createElement("img",{src:d.a,alt:"Logo",height:"50px"}))))}}]),t}(n.Component),f=(a(51),a(89)),b=a(91),g=a(90),v=a(4),O=(a(33),a(54),a(56),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={race:"Dwarf",bonuses:["bonus 1","bonus 2"],languages:["lang one","lang 2"],other:["other 1","other 2"],desc:"One dynamic long string",image:"./dwarf.png"},a.componentWillReceiveProps=a.componentWillReceiveProps.bind(Object(v.a)(Object(v.a)(a))),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.props;this.setState({race:t.race,bonuses:t.bonuses,languages:t.languages,other:t.other,desc:t.desc})}},{key:"render",value:function(){return l.a.createElement("div",{className:"full"},l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"left"},l.a.createElement("h1",null,this.state.race),l.a.createElement("h3",null,"Race Bonuses:"),l.a.createElement("ul",null," ",this.state.bonuses.map(function(e){return l.a.createElement("li",{key:e},e)})," "),l.a.createElement("h3",null,"Languages:"),l.a.createElement("ul",null," ",this.state.languages.map(function(e){return l.a.createElement("li",{key:e},e)})," "),l.a.createElement("h3",null,"Other Important Info:"),l.a.createElement("ul",null," ",this.state.other.map(function(e){return l.a.createElement("li",{key:e},e)})," ")),l.a.createElement("div",{className:"right"},l.a.createElement("img",{src:a(34),alt:"dwarf",height:"250px"}))),l.a.createElement("div",{className:"bottom"},l.a.createElement("h3",null,"Description:"),this.state.desc))}}]),t}(n.Component)),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).left_list=["Dwarf","Elf","Halfling","Human","Dragonborn"],a.right_list=["Gnome","Half-Elf","Half-Orc","Tiefling"],a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"click",value:function(e){this.props.pM(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"BL"},l.a.createElement("h1",null,"Race Selection"),l.a.createElement("h2",null,"Choose a Race:"),l.a.createElement("div",{className:"TwoLists"},l.a.createElement("ul",null,this.left_list.map(function(t){return l.a.createElement("li",{key:t},l.a.createElement("button",{onClick:function(){return e.click(t)}},t))})),l.a.createElement("ul",null,this.right_list.map(function(t){return l.a.createElement("li",{key:t},l.a.createElement("button",{onClick:function(){return e.click(t)}},t))}))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).prev=e.prev,a.next=e.next,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"foot"},l.a.createElement(E.a,{to:this.prev},l.a.createElement("button",null,"Previous")),l.a.createElement(E.a,{to:this.next},l.a.createElement("button",null,"Next")))}}]),t}(l.a.Component),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={race:"Dwarfff",bonuses:["bonus 1","bonus 2"],languages:["lang one","lang 2"],other:["other 1","other 2"],desc:"One dynamic long string",image:"./dwarf.png"},a.ButtonClick=a.ButtonClick.bind(Object(v.a)(Object(v.a)(a))),a.child=l.a.createRef(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"ButtonClick",value:function(e){console.log(e);var t={race:"Elf",abilityScore:["elf 1"],languages:["elf one"],abilities:["elf 1","other 2"],description:"One dynamic elf elf elf",image:"./dwarf.png"};this.setState({race:e,languages:t.languages,bonuses:t.abilityScore,other:t.abilities,desc:t.description})}},{key:"render",value:function(){return l.a.createElement("div",{className:"up_and_down"},l.a.createElement("div",{className:"m"},l.a.createElement("div",{className:"button_side"},l.a.createElement(j,{pM:this.ButtonClick})),l.a.createElement("div",{className:"desc_side"},l.a.createElement(O,{props:this.state}))),l.a.createElement(k,{prev:"/home",next:"/class"}))}}]),t}(l.a.Component),C=(a(58),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home_main"},l.a.createElement("div",{className:"left"},l.a.createElement("ul",null,l.a.createElement("li",null," ",l.a.createElement(E.a,{to:"/race"},l.a.createElement("button",null,"CHUNGUS Create Character")," ")," "),l.a.createElement("li",null,l.a.createElement(E.a,{to:"/"},l.a.createElement("button",null,"Load and View Character")," ")))),l.a.createElement("div",{className:"right"},l.a.createElement("img",{src:a(60),alt:"Dragon",height:"200px"})))}}]),t}(n.Component)),N=(a(61),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).left_list=["Barbarian","Bard","Cleric","Druid","Fighter","Monk"],a.right_list=["Paladin","Ranger","Rogue","Sorceror","Warlock","Wizard"],a.state={class:"Fighter",important_stats:"Str and Dex",bonuses:["bonus 1","bonus 2"],other:["other 1","other 2"],desc:"One dynamic long string",image:"./dwarf.png"},a.ButtonClick=a.ButtonClick.bind(Object(v.a)(Object(v.a)(a))),a.child=l.a.createRef(),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"ButtonClick",value:function(e){var t={class:"Bard",important_stats:"aaStr and Dex",bonuses:["aabonus 1","bonus 2"],other:["aaother 1","other 2"],desc:"aaOne dynamic long string",image:"./dwarf.png"};this.setState({class:e,important_stats:t.important_stats,bonuses:t.bonuses,other:t.other,desc:t.desc})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"content_footer"},l.a.createElement("div",{className:"m"},l.a.createElement("div",{className:"button_side"},l.a.createElement("h1",null,"Class Selection"),l.a.createElement("h2",null,"Choose a Class:"),l.a.createElement("div",{className:"TwoLists"},l.a.createElement("ul",null,this.left_list.map(function(t){return l.a.createElement("li",{key:t},l.a.createElement("button",{onClick:function(){return e.ButtonClick(t)}},t))})," "),l.a.createElement("ul",null,this.right_list.map(function(t){return l.a.createElement("li",{key:t},l.a.createElement("button",{onClick:function(){return e.ButtonClick(t)}},t))}),"  "))),l.a.createElement("div",{className:"desc_side"},l.a.createElement("div",{className:"top"},l.a.createElement("div",{className:"left"},l.a.createElement("h1",null,this.state.class),l.a.createElement("h3",null,"Important Stats:"),l.a.createElement("ul",null," ",this.state.important_stats," "),l.a.createElement("h3",null,"Class Bonuses:"),l.a.createElement("ul",null," ",this.state.bonuses.map(function(e){return l.a.createElement("li",{key:e},e)})," "),l.a.createElement("h3",null,"Other Important Info:"),l.a.createElement("ul",null," ",this.state.other.map(function(e){return l.a.createElement("li",{key:e},e)})," ")),l.a.createElement("div",{className:"right"},l.a.createElement("img",{src:a(34),alt:"dwarf",height:"250px"}))),l.a.createElement("div",{className:"bottom"},l.a.createElement("h3",null,"Description:"),this.state.desc))),l.a.createElement(k,{prev:"/race",next:"/stats"}))}}]),t}(l.a.Component)),w=(a(63),a(88)),_=a(85),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).stats=["11","14","12","15","13","18"],a.cats=["Str","Dex","Cons","Wis","Int","Cha"],a.toggle=a.toggle.bind(Object(v.a)(Object(v.a)(a))),a.state={dropdownOpen:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"content_footer"},l.a.createElement("div",{className:"lr"},l.a.createElement("div",{className:"Stats"},l.a.createElement("h1",null,"Stats"),l.a.createElement("h2",null,"Randomly Generated Stats"),l.a.createElement("p",null,this.stats.map(function(e){return e+" "})),l.a.createElement("ul",null,this.cats.map(function(t){return l.a.createElement("li",{key:t},t,":",l.a.createElement(w.a,{id:"dropdown-basic-button",title:"Dropdown button"},e.stats.map(function(e){return l.a.createElement(_.a.Item,null,e)}))," ")}))),l.a.createElement("div",null,l.a.createElement("h3",null,"Racial Bonuses:"),l.a.createElement("h3",null,"Important for Class:"),l.a.createElement("h3",null,"Common:"),l.a.createElement("h3",null,"Alternative:"))),l.a.createElement(k,{prev:"/class",next:"/bio"}))}}]),t}(l.a.Component),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement(f.a,{basename:"dndweb"},l.a.createElement(b.a,null,l.a.createElement(g.a,{exact:!0,path:"/",component:C}),l.a.createElement(g.a,{path:"/home",component:C}),l.a.createElement(g.a,{path:"/race",component:y}),l.a.createElement(g.a,{path:"/class",component:N}),l.a.createElement(g.a,{path:"/stats",component:x}))))}}]),t}(n.Component);a(81),a(83);c.a.render(l.a.createElement(B,null),document.getElementById("root"))}},[[44,2,1]]]);
//# sourceMappingURL=main.3f42cf14.chunk.js.map