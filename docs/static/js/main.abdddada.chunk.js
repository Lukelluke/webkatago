(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,r){t.exports=r(22)},14:function(t,e,r){},21:function(t,e,r){},22:function(t,e,r){"use strict";r.r(e);r(14);var n=r(3),i=r(7),a=r(4),o=r.n(a),s=r(11),l=r(1),u=r(2),c=r(0),h=r.n(c),d=r(12),v=r.n(d),p=r(8),f=r(5),y=r(9),m=(r(21),function t(){Object(l.a)(this,t),this.stone=null,this.number=null,this.winrate=null,this.playouts=null,this.fillColor=null,this.borderWidth=null,this.borderColor=null,this.backgroundColor=null});function b(t,e){var r=[];if(t<=e)for(var n=t;n<=e;n++)r.push(n);else for(var i=t;i>=e;i--)r.push(i);return r}var k=function(t){function e(){return Object(l.a)(this,e),Object(p.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(u.a)(e,[{key:"index",value:function(t,e){return this.props.w*(e-1)+t-1}},{key:"renderIntersection",value:function(t,e){var r=this,n=this.props.intersections[this.index(t,e)];return h.a.createElement(g,{key:"".concat(t,"-").concat(e),onClick:function(){return r.props.onClickIntersection(t,e)},onMouseEnter:function(){return r.props.onMouseEnterIntersection(t,e)},onMouseLeave:function(){return r.props.onMouseLeaveIntersection(t,e)},stone:n.stone,number:n.number,winrate:n.winrate,playouts:n.playouts,fillColor:n.fillColor,borderColor:n.borderColor,backgroundColor:n.backgroundColor})}},{key:"render",value:function(){var t=this,e={width:this.props.width,height:this.props.height};return h.a.createElement("div",{className:"go-board",style:e},h.a.createElement("div",{className:"go-board-content"},b(parseInt(this.props.h),1).map(function(e){return h.a.createElement("div",{className:"go-row",key:e},b(1,parseInt(t.props.w)).map(function(r){return t.renderIntersection(r,e)}))})))}}]),e}(h.a.Component),g=function(t){function e(){return Object(l.a)(this,e),Object(p.a)(this,Object(f.a)(e).apply(this,arguments))}return Object(y.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t;switch(this.props.stone){case"B":t="url(https://storage.googleapis.com/mimiaka-storage/mimiaka/public/images/nachiguro2.png)";break;case"W":t="url(https://storage.googleapis.com/mimiaka-storage/mimiaka/public/images/hamaguri2.png)";break;default:t=null}var e={color:"B"===this.props.stone?"white":"black",backgroundImage:t,backgroundColor:this.props.backgroundColor},r={backgroundColor:this.props.fillColor,borderWidth:this.props.borderWidth,borderColor:this.props.borderColor};return h.a.createElement("div",{className:"go-intersection",style:e,onClick:this.props.onClick,onMouseEnter:this.props.onMouseEnter,onMouseLeave:this.props.onMouseLeave},h.a.createElement("div",{className:"go-intersection-number"},this.props.number),h.a.createElement("div",{className:"go-intersection-info",style:r},h.a.createElement("div",null,this.props.winrate),h.a.createElement("div",null,this.props.playouts)))}}]),e}(h.a.PureComponent),w=k,A=r(6),S=-1,O=0,I=1,E=2;function x(t){switch(t){case I:return E;case E:return I;default:return O}}function C(t){if(""===t)return S;var e="a".charCodeAt(0)-1;return[t.charCodeAt(0)-e,t.charCodeAt(1)-e]}var j=function(){function t(e){Object(l.a)(this,t),this.BOARD_SIZE=e,this.BOARD_SIZE2=e*e,this.value=0,this.marks=new Int32Array(this.BOARD_SIZE2)}return Object(u.a)(t,[{key:"clear",value:function(){this.value+=1}},{key:"isMarked",value:function(t){return this.marks[t]===this.value}},{key:"mark",value:function(t){this.marks[t]=this.value}}]),t}(),B=[[],[],[[16,4],[4,16]],[[16,4],[4,16],[16,16]],[[16,4],[4,16],[16,16],[4,4]],[[16,4],[4,16],[16,16],[4,4],[10,10]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10],[10,10]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10],[10,4],[10,16]],[[16,4],[4,16],[16,16],[4,4],[16,10],[4,10],[10,4],[10,16],[10,10]]],M=function(){function t(e,r){var n;if(Object(l.a)(this,t),this.BOARD_SIZE=e,this.BOARD_SIZE2=e*e,this.state=(n={},Object(A.a)(n,I,new Float32Array(this.BOARD_SIZE2)),Object(A.a)(n,E,new Float32Array(this.BOARD_SIZE2)),n),this.recent8=[],this.marker1=new j(e),this.marker2=new j(e),r>1){var i=!0,a=!1,o=void 0;try{for(var s,u=B[r][Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;this.setState(this.xyToPoint(c[0],c[1]),I)}}catch(h){a=!0,o=h}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}this.turn=E}else this.turn=I;this.ko=null}return Object(u.a)(t,null,[{key:"copy",value:function(e){var r=new t(e.BOARD_SIZE,0);return r.state[I].set(e.state[I]),r.state[E].set(e.state[E]),r.turn=e.turn,r.ko=e.ko,r}},{key:"fromSgf",value:function(t){for(var e=jssgf.fastParse(t),r=Object(n.a)(e,1)[0],i=new this(parseInt(r.SZ||"19")),a=r;a._children.length>0;){var o=void 0;if(null!=(a=a._children[0]).B)o=a.B;else{if(null==a.W)continue;o=a.W}i.play(i.xyToPoint.apply(i,C(o)))}return i}}]),Object(u.a)(t,[{key:"opponent",value:function(){return x(this.turn)}},{key:"switchTurn",value:function(){this.turn=x(this.turn)}},{key:"getState",value:function(t){return 1===this.state[I][t]?I:1===this.state[E][t]?E:O}},{key:"setState",value:function(t,e){e===O?(this.state[I][t]=0,this.state[E][t]=0):this.state[e][t]=1}},{key:"removeString",value:function(t){var e=!0,r=!1,n=void 0;try{for(var i,a=t.points[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value;this.setState(o,O)}}catch(s){r=!0,n=s}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"captureBy",value:function(t){var e=this.opponent(),r=[],n=!0,i=!1,a=void 0;try{for(var o,s=this.adjacenciesAt(t)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value;if(this.getState(l)===e){var u=this.stringAt(l);0===u.liberties.length&&(this.removeString(u),r.push.apply(r,u.points))}}}catch(c){i=!0,a=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}return r}},{key:"stringAt",value:function(t){var e=this.getState(t);if(e===O)return null;var r=x(e),n=new z;this.marker1.clear(),this.marker2.clear(),n.points.push(t),this.marker2.mark(t);for(var i=0;i<n.points.length;i++){var a=n.points[i];if(!this.marker1.isMarked(a)){this.marker1.mark(a);var o=!0,s=!1,l=void 0;try{for(var u,c=this.adjacenciesAt(a)[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var h=u.value;if(!this.marker1.isMarked(h)){var d=this.getState(h);d===e?this.marker2.isMarked(h)||(n.points.push(h),this.marker2.mark(h)):(this.marker1.mark(h),d===r?n.opponents.push(h):n.liberties.push(h))}}}catch(v){s=!0,l=v}finally{try{o||null==c.return||c.return()}finally{if(s)throw l}}}}return n}},{key:"putRecent8",value:function(t){this.recent8.unshift(t),this.recent8.length>8&&this.recent8.pop()}},{key:"play",value:function(t){if(t===S)return this.putRecent8(t),this.switchTurn(),{turn:this.turn,point:t,ko:this.ko,captives:[]};if(t===this.ko||this.getState(t)!==O)return null;this.setState(t,this.turn);var e=this.captureBy(t),r=this.stringAt(t),n=r.liberties.length;if(0===n)return this.setState(t,O),null;var i=this.ko;1===e.length&&1===n&&1===r.points.length?this.ko=r.liberties[0]:this.ko=null,this.putRecent8(t);var a=this.turn;return this.switchTurn(),{turn:a,point:t,ko:i,captives:e,string:r}}},{key:"undoPlay",value:function(t){if(this.ko=t.ko,this.switchTurn(),t.point!==S){this.setState(t.point,O);var e=x(t.turn),r=!0,n=!1,i=void 0;try{for(var a,o=t.captives[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;this.setState(s,e)}}catch(l){n=!0,i=l}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"isLegal",value:function(t){var e=this.play(t);return!!e&&(this.undoPlay(e),!0)}},{key:"xyToPoint",value:function(t,e){return t-1+(e-1)*this.BOARD_SIZE}},{key:"pointToXy",value:function(t){var e=Math.floor(t/this.BOARD_SIZE);return[t-e*this.BOARD_SIZE+1,e+1]}},{key:"adjacenciesAt",value:function(t){for(var e=this.pointToXy(t),r=[],n=0,i=[[0,-1],[-1,0],[1,0],[0,1]];n<i.length;n++){var a=i[n],o=e[0]+a[0],s=e[1]+a[1];o>=1&&o<=this.BOARD_SIZE&&s>=1&&s<=this.BOARD_SIZE&&r.push(this.xyToPoint(o,s))}return r}},{key:"diagonalsAt",value:function(t){for(var e=this.pointToXy(t),r=[],n=0,i=[[-1,-1],[-1,1],[1,-1],[1,-1]];n<i.length;n++){var a=i[n],o=e[0]+a[0],s=e[1]+a[1];o>=1&&o<=this.BOARD_SIZE&&s>=1&&s<=this.BOARD_SIZE&&r.push(this.xyToPoint(o,s))}return r}},{key:"canEscape",value:function(t){if(t.liberties.length>1)return!0;var e=!0,r=!1,n=void 0;try{for(var i,a=t.opponents[Symbol.iterator]();!(e=(i=a.next()).done);e=!0){var o=i.value,s=this.stringAt(o);if(1===s.liberties.length){var l=this.play(s.liberties[0]);if(!l)continue;var u=this.stringAt(t.points[0]);if(2===u.liberties.length){var c=!0,h=!1,d=void 0;try{for(var v,p=u.liberties[Symbol.iterator]();!(c=(v=p.next()).done);c=!0){var f=v.value,y=this.play(f);if(y){var m=this.canEscape(this.stringAt(u.points[0]));if(this.undoPlay(y),!m)return this.undoPlay(l),!1}}}catch(C){h=!0,d=C}finally{try{c||null==p.return||p.return()}finally{if(h)throw d}}return this.undoPlay(l),!0}return this.undoPlay(l),u.liberties.length>2}}}catch(C){r=!0,n=C}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}var b=this.play(t.liberties[0]);if(!b)return!1;if(2===b.string.liberties.length){var k=!0,g=!1,w=void 0;try{for(var A,S=b.string.liberties[Symbol.iterator]();!(k=(A=S.next()).done);k=!0){var O=A.value,I=this.play(O);if(I){var E=this.stringAt(t.points[0]),x=this.canEscape(E);if(this.undoPlay(I),!x)return this.undoPlay(b),!1}}}catch(C){g=!0,w=C}finally{try{k||null==S.return||S.return()}finally{if(g)throw w}}return this.undoPlay(b),!0}return this.undoPlay(b),1!==b.string.liberties.length}},{key:"likeEye",value:function(t){var e=this;if(this.getState(t)!==O)return!1;var r=this.adjacenciesAt(t);return!!r.every(function(t){return e.getState(t)===e.turn})&&r.every(function(t){return e.stringAt(t).liberties.length>1})}},{key:"isEyeOfTurn",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!this.likeEye(t))return!1;var r=0,n=4===this.adjacenciesAt(t).length?1:0,i=x(this.turn),a=!0,o=!1,s=void 0;try{for(var l,u=this.diagonalsAt(t)[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var c=l.value;if(this.getState(c)===i?r+=1:this.getState(c)===O&&e.indexOf(c)<0&&(e.push(t),this.isEyeOfTurn(c,e)||(r+=1),e.pop()),r>n)return!1}}catch(h){o=!0,s=h}finally{try{a||null==u.return||u.return()}finally{if(o)throw s}}return!0}},{key:"isFalseEye",value:function(t){return this.likeEye(t)&&!this.isEyeOfTurn(t)}},{key:"toString",value:function(){for(var t="",e=1;e<=this.BOARD_SIZE;e++){for(var r=1;r<=this.BOARD_SIZE;r++)switch(this.getState(this.xyToPoint(r,e))){case O:t+=".";break;case I:t+="X";break;case E:t+="O"}t+="\n"}return t}}]),t}(),z=function t(){Object(l.a)(this,t),this.points=[],this.liberties=[],this.opponents=[]},D=M,_=function(){function t(){var e=this;Object(l.a)(this,t),this.inputDom=document.getElementById("input"),this.outputDom=document.getElementById("output"),this.outputDom.addEventListener("message",function(t){e.process(t.currentTarget.value),t.currentTarget.value=""},!1)}return Object(u.a)(t,[{key:"_command",value:function(t){this.inputDom.command.value=t,this.inputDom.dispatchEvent(new CustomEvent("submit"))}},{key:"command",value:function(t){var e=this;return new Promise(function(r,n){null==e.inputDom.command.getAttribute("disabled")&&(e.LzAnalyzeHandler=null,e.resolve=r,e.reject=n,e._command(t))})}},{key:"lzAnalyze",value:function(t,e){null==this.inputDom.command.getAttribute("disabled")&&(this.LzAnalyzeHandler=e,this._command("lz-analyze ".concat(t)))}},{key:"kataAnalyze",value:function(t,e){null==this.inputDom.command.getAttribute("disabled")&&(this.kataAnalyzeHandler=e,this._command("kata-analyze ".concat(t," ownership true")))}},{key:"process",value:function(t){t.startsWith("=")?this.resolve&&(this.resolve(t),this.resolve=null):t.startsWith("?")&&this.reject&&(this.reject(t),this.reject=null),this.LzAnalyzeHandler&&this.parseLzAnalyze(t),this.kataAnalyzeHandler&&this.parseKataAnalyze(t)}},{key:"parseLzAnalyze",value:function(t){for(var e,r=/info move ([A-Z]\d{1,2}) visits (\d+) winrate (\d+) prior (-?\d+) lcb (-?\d+) order (\d+) pv ((:? ?[A-Z]\d{1,2})+)/g,n=[];null!=(e=r.exec(t));)n.push({move:e[1],visits:parseInt(e[2]),winrate:parseInt(e[3])/1e4,prior:parseInt(e[4]),lcb:parseInt(e[5]),orer:parseInt(e[6]),pv:e[7].split(" ")});this.LzAnalyzeHandler(n)}},{key:"parseKataAnalyze",value:function(t){for(var e,r=/info move ([A-Z]\d{1,2}) visits (\d+) utility (-?\d+\.\d+(?:e-?\d+)?) radius (-?\d+\.\d+(?:e-?\d+)?) winrate (-?\d+\.\d+(?:e-?\d+)?) scoreMean (-?\d+\.\d+(?:e-?\d+)?) scoreStdev (-?\d+\.\d+(?:e-?\d+)?) prior (-?\d+\.\d+(?:e-?\d+)?) lcb (-?\d+\.\d+(?:e-?\d+)?) utilityLcb (-?\d+\.\d+(?:e-?\d+)?) order (-?\d+) pv ((?: ?[A-Z]\d{1,2})+)/g,n={info:[],ownership:[]};null!=(e=r.exec(t));)n.info.push({move:e[1],visits:parseInt(e[2]),utility:parseFloat(e[3]),radius:parseFloat(e[4]),winrate:parseFloat(e[5]),scoreMean:parseFloat(e[6]),scoreStdev:parseFloat(e[7]),prior:parseFloat(e[8]),lcb:parseFloat(e[9]),utilibyLcb:parseFloat(e[10]),order:parseInt(e[11]),pv:e[12].split(" ")});null!=(e=t.match(/ownership((?: -?\d+\.\d+(?:e-?\d+)?)+)/))&&(n.ownership=e[1].trim().split(" ")),this.kataAnalyzeHandler(n)}}]),t}();function Z(t){var e=t.charCodeAt(0);return[(e<"I".charCodeAt(0)?e+1:e)-"A".charCodeAt(0),parseInt(t.slice(1))]}function R(t,e){return["@","A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S"][t]+e}function P(t,e,r){var n,i,a,o,s,l,u,c;switch(1===arguments.length&&(e=t.s,r=t.v,t=t.h),l=r*(1-e),u=r*(1-(s=6*t-(o=Math.floor(6*t)))*e),c=r*(1-(1-s)*e),o%6){case 0:n=r,i=c,a=l;break;case 1:n=u,i=r,a=l;break;case 2:n=l,i=r,a=c;break;case 3:n=l,i=u,a=r;break;case 4:n=c,i=l,a=r;break;case 5:n=r,i=l,a=u}return{r:Math.round(255*n),g:Math.round(255*i),b:Math.round(255*a)}}function T(t,e,r){1===arguments.length&&(e=t.g,r=t.b,t=t.r);var n,i=Math.max(t,e,r),a=Math.min(t,e,r),o=i-a,s=0===i?0:o/i,l=i/255;switch(i){case a:n=0;break;case t:n=e-r+o*(e<r?6:0),n/=6*o;break;case e:n=r-t+2*o,n/=6*o;break;case r:n=t-e+4*o,n/=6*o}return{h:n,s:s,v:l}}function L(t,e,r){return 1===arguments.length&&(e=(t=t.r).g,r=t.b),{r:.7*t,g:.7*e,b:.7*r}}function F(t){for(var e=new Array(t.BOARD_SIZE2),r=0;r<e.length;r++){var n=new m;switch(t.getState(r)){case I:n.stone="B";break;case E:n.stone="W"}e[r]=n}return e}var W=function(){function t(){Object(l.a)(this,t),this.size=19,this.byoyomi=3,this.gtp=new _,this.model=new D(this.size,0),this.candidates=[],this.candidate=null;var e=F(this.model);this.render(e)}return Object(u.a)(t,[{key:"lzAnalyze",value:function(){var t=this;this.gtp.lzAnalyze(100,function(e){var r;t.candidates=e,t.candidate?r=t.variationIntersections():(r=F(t.model),t.addCandidatesInfo(r,e)),r&&t.render(r)})}},{key:"kataAnalyze",value:function(){var t=this;this.gtp.kataAnalyze(100,function(e){var r;0!==e.info.length&&(t.candidates=e.info,t.candidate?r=t.variationIntersections():(r=F(t.model),t.addCandidatesInfo(r,e.info),t.addOwnership(r,e.ownership)),r&&t.render(r))})}},{key:"play",value:function(){var t=Object(s.a)(o.a.mark(function t(e,r){return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.model.play(this.model.xyToPoint(e,r)),this.render(F(this.model)),t.next=5,this.gtp.command("play ".concat(this.model.turn===I?"black":"white"," ").concat(R(e,r)));case 5:this.kataAnalyze(),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,r){return t.apply(this,arguments)}}()},{key:"onMouseEnterIntersection",value:function(t,e){var r=R(t,e);if(this.candidates.map(function(t){return t.move}).includes(r)){this.candidate=r;var n=this.variationIntersections();this.render(n)}}},{key:"onMouseLeaveIntersection",value:function(t,e){if(this.candidate){this.candidate=null;var r=F(this.model);this.addCandidatesInfo(r,this.candidates),this.render(r)}}},{key:"render",value:function(t){var e=this;v.a.render(h.a.createElement(w,{width:"500px",height:"500px",w:this.size,h:this.size,intersections:t,onClickIntersection:function(t,r){return e.play(t,r)},onMouseEnterIntersection:function(t,r){return e.onMouseEnterIntersection(t,r)},onMouseLeaveIntersection:function(t,r){return e.onMouseLeaveIntersection(t,r)}}),document.getElementById("root"))}},{key:"addCandidatesInfo",value:function(t,e){var r=Math.max.apply(Math,Object(i.a)(e.map(function(t){return t.visits}))),a=Math.max.apply(Math,Object(i.a)(e.map(function(t){return t.winrate}))),o=T(0,255,0).h,s=T(0,255,255).h,l=!0,u=!1,c=void 0;try{for(var h,d=e.entries()[Symbol.iterator]();!(l=(h=d.next()).done);l=!0){var v=h.value,p=Object(n.a)(v,2),f=p[0],y=p[1],m=t[this.model.xyToPoint.apply(this.model,Z(y.move))];m.winrate=(100*y.winrate).toFixed(1),m.playouts=y.visits;var b=m.playouts/r,k=Math.log(b),g=0===f?s:o*Math.max(0,k/3+1),w=(32+208*Math.max(0,k/5+1))/255,A=P(g,.75,.85);if(0===f)if(y.winrate<a)m.borderWidth="2px",m.borderCoor="red";else{m.borderWidth="1px";var S=L(A);m.borderCoor="rgba(".concat(S.r,",").concat(S.g,",").concat(S.b,",").concat(w,")")}else m.winrate===a&&(m.borderWidth="2px",m.borderCoor="blue");m.fillColor="rgba(".concat(A.r,",").concat(A.g,",").concat(A.b,",").concat(w,")")}}catch(O){u=!0,c=O}finally{try{l||null==d.return||d.return()}finally{if(u)throw c}}}},{key:"variationIntersections",value:function(){var t=this,e=this.candidates.find(function(e){return e.move===t.candidate});if(!e)return null;var r=D.copy(this.model),n=!0,i=!1,a=void 0;try{for(var o,s=e.pv[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value;r.play(r.xyToPoint.apply(r,Z(l)))}}catch(g){i=!0,a=g}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}var u=F(r),c=this.model.turn,h=u[r.xyToPoint.apply(r,Z(e.pv[0]))];h.winrate=e.winrate.toFixed(1),h.playouts=e.visits,h.textColor=c===I?"white":"black";var d=2;c=x(c);var v=!0,p=!1,f=void 0;try{for(var y,m=e.pv.slice(1)[Symbol.iterator]();!(v=(y=m.next()).done);v=!0){var b=y.value,k=u[r.xyToPoint.apply(r,Z(b))];k.number=d,k.textColor=c===I?"white":"black",c=x(c),d++}}catch(g){p=!0,f=g}finally{try{v||null==m.return||m.return()}finally{if(p)throw f}}return u}},{key:"addOwnership",value:function(t,e){if(this.model.turn===I){var r=!0,i=!1,a=void 0;try{for(var o,s=e.entries()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var l=o.value,u=Object(n.a)(l,2),c=u[0],h=u[1];if(c>=this.model.BOARD_SIZE2)break;var d=this.model.pointToXy(c),v=Object(n.a)(d,2),p=v[0],f=v[1];t[this.model.BOARD_SIZE*(this.model.BOARD_SIZE-f)+(p-1)].backgroundColor=h>0?"rgba(0,0,0,".concat(h,")"):"rgba(255,255,255,".concat(-h,")")}}catch(C){i=!0,a=C}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}else{var y=!0,m=!1,b=void 0;try{for(var k,g=e.entries()[Symbol.iterator]();!(y=(k=g.next()).done);y=!0){var w=k.value,A=Object(n.a)(w,2),S=A[0],O=A[1];if(S>=this.model.BOARD_SIZE2)break;var E=this.model.pointToXy(S),x=Object(n.a)(E,2);p=x[0],f=x[1];t[this.model.BOARD_SIZE*(this.model.BOARD_SIZE-f)+(p-1)].backgroundColor=O<0?"rgba(0,0,0,".concat(-O,")"):"rgba(255,255,255,".concat(O,")")}}catch(C){m=!0,b=C}finally{try{y||null==g.return||g.return()}finally{if(m)throw b}}}}}]),t}();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"undefined"!==typeof SharedArrayBuffer&&(window.goBoardController=new W),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[13,1,2]]]);
//# sourceMappingURL=main.abdddada.chunk.js.map