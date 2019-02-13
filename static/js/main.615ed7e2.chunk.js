(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(51)},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},37:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),c=(n(25),n(11)),l=n(3),u=n(4),s=n(6),m=n(5),h=n(7),f=n(8),p=n(1),d=n(2),v={DARK:"dark",LIGHT:"light"},b=r.a.createContext({theme:v.DARK,toggleTheme:function(){}}),g={GOOGLE:"http://google.com/search?q=",DUCKDUCKGO:"https://duckduckgo.com/?q=",BING:"https://www.bing.com/search?q=",YAHOO:"https://us.search.yahoo.com/search?p="},O=17,y=88,j=function e(t,n){var a=Object.prototype.toString.call(t);if(a!==Object.prototype.toString.call(n))return!1;if(["[object Array]","[object Object]"].indexOf(a)<0)return!1;var r="[object Array]"===a?t.length:Object.keys(t).length;if(r!==("[object Array]"===a?n.length:Object.keys(n).length))return!1;var o=function(t,n){var a=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(a)>=0){if(!e(t,n))return!1}else{if(a!==Object.prototype.toString.call(n))return!1;if("[object Function]"===a){if(t.toString()!==n.toString())return!1}else if(t!==n)return!1}};if("[object Array]"===a){for(var i=0;i<r;i++)if(!1===o(t[i],n[i]))return!1}else for(var c in t)if(t.hasOwnProperty(c)&&!1===o(t[c],n[c]))return!1;return!0};n(27),n(29);function E(){var e=Object(p.a)(["\n  background-color: ",";\n  border: 1px solid ",";\n  color: ",";\n"]);return E=function(){return e},e}function k(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return k=function(){return e},e}var S=d.a.div(k()),x=d.a.select(E(),function(e){return e.theme===v.DARK?"#333":"#eee"},function(e){return e.theme===v.DARK?"#eee":"#333"},function(e){return e.theme===v.DARK?"#f5f5f5":"#333"}),w=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleEngineChange",value:function(){var e=document.getElementById("search-engine-dropdown"),t=e.options[e.selectedIndex].value;this.props.changeState("engineSearchUrl",g[t])}},{key:"render",value:function(){var e=this,t=this.context.theme,n=this.props.engineUrl,a="GOOGLE",o=Object.keys(g).map(function(e){return g[e]===n&&(a=e),r.a.createElement("option",{value:e,key:e},e)});return r.a.createElement(S,{id:"search-engine"},r.a.createElement("label",{htmlFor:"search-engine-dropdown"},"Search Engine"),r.a.createElement(x,{defaultValue:a,name:"search-engine-dropdown",id:"search-engine-dropdown",theme:t,onChange:function(){return e.handleEngineChange()}},o))}}]),t}(a.Component);w.contextType=b;var C=w,R=(n(37),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},n.handleChange=n.handleChange.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.props.changeState("panelSize",e.target.value)}},{key:"render",value:function(){var e=this.props.panelSize;return r.a.createElement("div",{className:"panel-size-slider"},r.a.createElement("label",{htmlFor:"panel-size-range"},"Panel Size"),r.a.createElement("input",{type:"range",name:"panel-size-range",id:"panel-size-range",defaultValue:e,min:"200",max:"1000",onChange:this.handleChange}))}}]),t}(a.Component)),A=n(9),D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"importFavorites",value:function(e){var t=this,n=this.props.favoriteWebsites,a=document.getElementById("import-file-input").files[0],r="",o=new FileReader;o.onload=function(){r=o.result;try{var e=JSON.parse(r),a=Object(A.a)(n),i=!0,c=!1,l=void 0;try{for(var u,s=e[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var m=u.value;a.push(m)}}catch(h){c=!0,l=h}finally{try{i||null==s.return||s.return()}finally{if(c)throw l}}t.props.changeState("favoriteWebsites",a)}catch(h){alert("The selected file is corrupted. Please choose another file or export again.")}},o.readAsText(a)}},{key:"chooseFile",value:function(){document.getElementById("import-file-input").click()}},{key:"render",value:function(){var e=this;return r.a.createElement(a.Fragment,null,r.a.createElement("button",{id:"import-btn",onClick:function(){return e.chooseFile()}},"Import Favorites \u21d3"),r.a.createElement("input",{id:"import-file-input",type:"file",accept:"text/plain",onChange:function(){return e.importFavorites()}}))}}]),t}(a.Component),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"exportFavorites",value:function(){var e=this.props.favoriteWebsites,t=JSON.stringify(e),n=new Blob([t],{type:"text/plain"}),a=window.URL.createObjectURL(n),r=document.createElement("a");document.body.appendChild(r),r.href=a,r.download="favoriteWebsites.txt",r.click(),window.URL.revokeObjectURL(a)}},{key:"render",value:function(){var e=this;return r.a.createElement("button",{id:"export-btn",onClick:function(){return e.exportFavorites()}},"Export Favorites \u21d1")}}]),t}(a.Component);function K(){var e=Object(p.a)(["\n  background: ",";\n"]);return K=function(){return e},e}function N(){var e=Object(p.a)(["\n  background: ",";\n"]);return N=function(){return e},e}function F(){var e=Object(p.a)(["\n  color: ",";\n"]);return F=function(){return e},e}var I=d.a.div(F(),function(e){return e.theme===v.DARK?"#eee":"#333"}),W=d.a.span(N(),function(e){return e.theme===v.DARK?"#eee":"#333"}),T=d.a.ul(K(),function(e){return e.theme===v.DARK?"#222":"#fff"}),U=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.context.theme,t=this.props,n=t.engineUrl,a=t.panelSize,o=t.favoriteWebsites;return r.a.createElement("div",{id:"options-menu"},r.a.createElement("input",{type:"checkbox",name:"options-toggle",id:"options-toggle"}),r.a.createElement(W,{className:"hamburger-slide",theme:e}),r.a.createElement(W,{className:"hamburger-slide",theme:e}),r.a.createElement(W,{className:"hamburger-slide",theme:e}),r.a.createElement(T,{id:"menu",theme:e},r.a.createElement(I,{className:"menu-item",theme:e},r.a.createElement(C,{changeState:this.props.changeState,engineUrl:n})),r.a.createElement(I,{className:"menu-item",theme:e},r.a.createElement(R,{changeState:this.props.changeState,panelSize:a})),r.a.createElement(I,{className:"menu-item",theme:e},r.a.createElement(z,{favoriteWebsites:o})),r.a.createElement(I,{className:"menu-item",theme:e},r.a.createElement(D,{changeState:this.props.changeState,favoriteWebsites:o}))))}}]),t}(a.Component);U.contextType=b;var P=U,L="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z",B="M14.078 7.061l2.861 2.862-10.799 10.798-3.584.723.724-3.585 10.798-10.798zm0-2.829l-12.64 12.64-1.438 7.128 7.127-1.438 12.642-12.64-5.691-5.69zm7.105 4.277l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z",G=(n(39),function(e){var t={svg:{display:"inline-block",verticalAlign:"middle"},path:{fill:e.color}};return r.a.createElement("svg",{style:t.svg,width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),viewBox:"0 0 ".concat(e.size," ").concat(e.size),className:"svgIcon",id:e.id},r.a.createElement("path",{style:t.path,d:e.icon}))});G.defaultProps={size:24};var q=G;function J(){var e=Object(p.a)(["\n  background-color: ",";\n  color: ",";\n"]);return J=function(){return e},e}var H=d.a.input(J(),function(e){return e.theme===v.DARK?"#222":"#f5f5f5"},function(e){return e.theme===v.DARK?"#f5f5f5":"#222"}),M=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){document.getElementById("search-bar").focus()}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.props.searchUrl,n=document.getElementById("search-bar"),a=n.value,r=window.open(t+a);r?r.focus():alert("Please allow popups for this website."),n.value=""}},{key:"render",value:function(){var e=this,t=this.context.theme;return r.a.createElement("form",{id:"search-bar-container",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(H,{theme:t,id:"search-bar"}),r.a.createElement(q,{icon:L,color:t===v.DARK?"#555":"#999",id:"search-icon"}))}}]),t}(a.Component);M.contextType=b;var V=M;n(41);function _(){var e=Object(p.a)(["\n  background-color: ",";\n"]);return _=function(){return e},e}function Y(){var e=Object(p.a)(["\n  position: relative;\n  top: 5px;\n  margin: 10px;\n  text-align: center;\n  display: inline-block;\n  color: ",";\n"]);return Y=function(){return e},e}var $=d.a.p(Y(),function(e){return e.theme===v.DARK?"#f5f5f5":"#333"}),Q=d.a.span(_(),function(e){return e.theme===v.DARK?"#eee":"#333"}),X=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.context.theme,t=document.getElementById("theme-toggle-switch");e===v.DARK?t.checked=!1:t.checked=!0}},{key:"render",value:function(){var e=this,t=this.context.theme;return r.a.createElement("div",{id:"theme-switch"},r.a.createElement($,{theme:t},"Dark"),r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",onClick:function(){return e.context.toggleTheme()},id:"theme-toggle-switch"}),r.a.createElement(Q,{theme:t,className:"switch-slider"})),r.a.createElement($,{theme:t},"Light"))}}]),t}(a.Component);X.contextType=b;var Z=X;n(43),n(45),n(47);function ee(){var e=Object(p.a)(["\n  color: ",";\n"]);return ee=function(){return e},e}function te(){var e=Object(p.a)(["\n  color: ",";\n"]);return te=function(){return e},e}function ne(){var e=Object(p.a)(["\n  color: ",";\n"]);return ne=function(){return e},e}function ae(){var e=Object(p.a)(["\n  background-color: ",";\n  border: 2px solid ",";\n"]);return ae=function(){return e},e}var re=d.a.form(ae(),function(e){return e.theme===v.DARK?"#222":"#ccc"},function(e){return e.theme===v.DARK?"#ccc":"#333"}),oe=d.a.label(ne(),function(e){return e.theme===v.DARK?"#eee":"#333"}),ie=d.a.h3(te(),function(e){return e.theme===v.DARK?"#eee":"#333"}),ce=d.a.button(ee(),function(e){return e.theme===v.DARK?"#ccc":"#333"}),le=function(e){function t(e){var n;Object(l.a)(this,t);var a=(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).props,r=a.img,o=a.title,i=a.url;return n.state={img:r||"",title:o||"",url:i||""},n.handleSubmit=n.handleSubmit.bind(Object(f.a)(Object(f.a)(n))),n.handleChange=n.handleChange.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleForm(this.state),this.props.closeOverlay()}},{key:"handleChange",value:function(e){this.setState(Object(c.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=this.state,n=t.img,a=t.title,o=t.url,i=this.props,c=i.theme,l=i.formTitle,u=i.ctaText;return r.a.createElement("div",{className:"overlay"},r.a.createElement(re,{className:"add-favorite-form",onSubmit:this.handleSubmit,theme:c},r.a.createElement(ie,{theme:c,className:"form-title"},l),r.a.createElement("div",{className:"form-group"},r.a.createElement(oe,{theme:c,htmlFor:"title"},"Website Title"),r.a.createElement("input",{type:"text",required:!0,name:"title",id:"title-input",defaultValue:a,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement(oe,{theme:c,htmlFor:"url"},"Website Url"),r.a.createElement("input",{type:"text",required:!0,name:"url",id:"url-input",defaultValue:o,onChange:this.handleChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement(oe,{theme:c,htmlFor:"img"},"Image Url"),r.a.createElement("input",{type:"text",required:!0,name:"img",id:"img-input",defaultValue:n,onChange:this.handleChange})),r.a.createElement(ce,{id:"close-overlay-btn",theme:c,onClick:function(){return e.props.closeOverlay()}},"\u2715"),r.a.createElement("button",{type:"submit"},u)))}}]),t}(a.Component);n(49);function ue(){var e=Object(p.a)(["\n  color: #f5f5f5;\n  background-color: #910000;\n  border: 1px solid ",";\n"]);return ue=function(){return e},e}function se(){var e=Object(p.a)(["\n  color: ",";\n  background-color: ",";\n  border: 1px solid ",";\n"]);return se=function(){return e},e}function me(){var e=Object(p.a)(["\n  background-color: ",";\n  color: ",";\n"]);return me=function(){return e},e}var he=d.a.div(me(),function(e){return e.theme===v.DARK?"#222":"#eee"},function(e){return e.theme===v.DARK?"#f5f5f5":"#333"}),fe=d.a.button(se(),function(e){return e.theme===v.DARK?"#f5f5f5":"#333"},function(e){return e.theme===v.DARK?"#222":"#eee"},function(e){return e.theme===v.DARK?"#f5f5f5":"#333"}),pe=d.a.button(ue(),function(e){return e.theme===v.DARK?"#f5f5f5":"#333"}),de=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.context.theme;return r.a.createElement("div",{className:"overlay"},r.a.createElement(he,{className:"remove-confirmation",theme:e},r.a.createElement("h3",null,"Are you sure you want to remove this website?"),r.a.createElement(pe,{onClick:this.props.handleRemove,theme:e,className:"remove-btn"},"Remove"),r.a.createElement(fe,{onClick:this.props.closeOverlay,theme:e},"Cancel")))}}]),t}(a.Component);de.contextType=b;var ve=de;function be(){var e=Object(p.a)(["\n  background-image: ",";\n  border: 1px solid ",";\n  min-width: ","px;\n  max-width: ","px;\n  min-height: ","px;\n  max-height: ","px;\n  cursor: pointer;\n  color: #eee;\n  text-decoration: none;\n"]);return be=function(){return e},e}var ge=d.a.div(be(),function(e){return"url(".concat(e.img,")")},function(e){return e.theme===v.DARK?"#eee":"#333"},function(e){return e.panelSize},function(e){return e.panelSize},function(e){return e.panelSize/2},function(e){return e.panelSize/2}),Oe=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={showEditOverlay:!1,showRemoveConfirmation:!1},n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"openLink",value:function(e){window.open(e,"_blank")}},{key:"removePanel",value:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState({showRemoveConfirmation:!0})}},{key:"editPanel",value:function(e){e.stopPropagation(),e.nativeEvent.stopImmediatePropagation(),this.setState({showEditOverlay:!0})}},{key:"handleEditForm",value:function(e){var t=this.props,n=t.panelIndex,a=t.favoriteWebsites,r=Object(A.a)(a);r[n]=e,this.props.changeState("favoriteWebsites",r)}},{key:"handleRemoveConfirmation",value:function(){var e=this.props,t=e.panelIndex,n=e.favoriteWebsites,a=Object(A.a)(n);a.splice(t,1),this.props.changeState("favoriteWebsites",a),this.setState({showRemoveConfirmation:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.showEditOverlay,o=t.showRemoveConfirmation,i=this.props.website,c=i.title,l=i.url,u=i.img,s=this.context.theme,m=l;return l.includes("https://")||(m="https://"+l),r.a.createElement(a.Fragment,null,r.a.createElement(ge,{className:"panel",href:m,target:"_blank",panelSize:this.props.panelSize,img:u,theme:s,onClick:function(){return e.openLink(m)}},r.a.createElement("div",{className:"alpha-overlay"},r.a.createElement("h4",{className:"panel-title"},c),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"edit-panel",onClick:function(t){return e.editPanel(t)}},r.a.createElement(q,{icon:B,color:"#f5f5f5"})),r.a.createElement("button",{className:"remove-panel",onClick:function(t){return e.removePanel(t)}},"\u2715")))),n?r.a.createElement(le,{formTitle:"Edit Favorite",ctaText:"Submit",handleForm:function(t){return e.handleEditForm(t)},theme:s,closeOverlay:function(){return e.setState({showEditOverlay:!1})},title:c,url:l,img:u}):null,o?r.a.createElement(ve,{closeOverlay:function(){return e.setState({showRemoveConfirmation:!1})},handleRemove:function(){return e.handleRemoveConfirmation()}}):null)}}]),t}(a.Component);Oe.contextType=b;var ye=Oe;function je(){var e=Object(p.a)(["\n  color: ",";\n  border: 2px solid\n    ",";\n"]);return je=function(){return e},e}var Ee=d.a.button(je(),function(e){return e.theme===v.DARK?"#f5f5f5":"#333"},function(e){return e.theme===v.DARK?"#f5f5f5":"#333"}),ke=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={showFormOverlay:!1},n.handleForm=n.handleForm.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleForm",value:function(e){var t=this.props.favoriteWebsites;this.props.changeState("favoriteWebsites",Object(A.a)(t).concat([e]))}},{key:"render",value:function(){var e=this,t=this.state.showFormOverlay,n=this.props,a=n.favoriteWebsites,o=n.panelSize,i=this.context.theme,c=a.map(function(t,n){return r.a.createElement(ye,{website:t,key:t+n,panelSize:o,favoriteWebsites:a,changeState:e.props.changeState,panelIndex:n})});return r.a.createElement("div",{id:"favorites"},r.a.createElement("div",{id:"favorites-list"},c),r.a.createElement(Ee,{className:"add-to-favorites-btn",theme:i,onClick:function(){return e.setState({showFormOverlay:!0})}},"+"),t?r.a.createElement(le,{formTitle:"New Favorite",ctaText:"Add Website",handleForm:this.handleForm,theme:i,closeOverlay:function(){return e.setState({showFormOverlay:!1})}}):null)}}]),t}(a.Component);ke.contextType=b;var Se=ke;function xe(){var e=Object(p.a)(["\n  text-align: center;\n  color: ",";\n"]);return xe=function(){return e},e}var we=d.a.h1(xe(),function(e){return e.theme===v.DARK?"#f5f5f5":"#333"}),Ce=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(s.a)(this,Object(m.a)(t).call(this,e));var a=localStorage.getItem("theme")===v.LIGHT?v.LIGHT:v.DARK,r=g[localStorage.getItem("searchEngine")]||g.GOOGLE,o=localStorage.getItem("favoriteWebsites")?JSON.parse(localStorage.getItem("favoriteWebsites")):[],i=localStorage.getItem("panelSize")||400;return n.state={theme:a,engineSearchUrl:r,favoriteWebsites:o,panelSize:i,keysPressed:[]},n.changeState=n.changeState.bind(Object(f.a)(Object(f.a)(n))),n.toggleTheme=n.toggleTheme.bind(Object(f.a)(Object(f.a)(n))),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.state,n=t.theme,a=t.keysPressed;document.addEventListener("keydown",function(t){t.keyCode!==O&&t.keyCode!==y||e.setState({keysPressed:a.push(t.keyCode)},function(){a.includes(O)&&a.includes(y)&&document.getElementById("search-bar").focus()})}),document.addEventListener("keyup",function(t){if(t.keyCode===O||t.keyCode===y){var n=a.indexOf(t.keyCode);e.setState({keysPressed:a.splice(n,1)})}}),document.body.style.background=n===v.DARK?"#333":"#eee"}},{key:"componentDidUpdate",value:function(e,t){var n=this.state,a=n.theme,r=n.engineSearchUrl,o=n.favoriteWebsites,i=n.panelSize;if(t.theme!==a)document.body.style.background=a===v.DARK?"#333":"#eee",localStorage.setItem("theme",a);else if(t.engineSearchUrl!==r)for(var c in g)g[c]===r&&localStorage.setItem("searchEngine",c);else j(t.favoriteWebsites,o)?t.panelSize!==i&&localStorage.setItem("panelSize",i):localStorage.setItem("favoriteWebsites",JSON.stringify(o))}},{key:"changeState",value:function(e,t){this.setState(Object(c.a)({},e,t))}},{key:"toggleTheme",value:function(){this.setState({theme:this.state.theme===v.DARK?v.LIGHT:v.DARK})}},{key:"render",value:function(){var e=this.state,t=e.theme,n=e.engineSearchUrl,a=e.favoriteWebsites,o=e.panelSize;return r.a.createElement(b.Provider,{value:{theme:t,toggleTheme:this.toggleTheme}},r.a.createElement("div",{id:"app"},r.a.createElement(P,{changeState:this.changeState,panelSize:o,favoriteWebsites:a,engineUrl:n}),r.a.createElement(we,{theme:t},"Welcome"),r.a.createElement(V,{searchUrl:n}),r.a.createElement(Z,null),r.a.createElement(Se,{favoriteWebsites:a,changeState:this.changeState,panelSize:o})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ce,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.615ed7e2.chunk.js.map