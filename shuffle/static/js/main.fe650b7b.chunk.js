(this["webpackJsonpvoid-swap"]=this["webpackJsonpvoid-swap"]||[]).push([[0],{12:function(t,e,i){},13:function(t,e,i){},15:function(t,e,i){"use strict";i.r(e);var n=i(1),a=i.n(n),r=i(3),o=i.n(r),l=(i(12),i(4)),s=i(5),c=i(7),u=i(6);i(13);function d(t){for(var e=t.length-1;e>0;e--){var i=Math.floor(Math.random()*(e+1)),n=[t[i],t[e]];t[e]=n[0],t[i]=n[1]}}var y=i(0),v=10,h=32,p=100,_=function(t){Object(c.a)(i,t);var e=Object(u.a)(i);function i(){var t;Object(l.a)(this,i);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a)))._cells=[],t._targetArray=[],t._cellContainer=null,t._animationIndex=0,t._update=function(){if(t._animationIndex>=p)t._resetAnimation({firstTime:!1});else{for(var e=0;e<10;e++)for(var i=0;i<v;i++){var n=t._cells[e][i];n.position.x+=n.velocity.x,n.position.y+=n.velocity.y,n.div.style.left=n.position.x+"px",n.div.style.top=n.position.y+"px"}t._animationIndex++,requestAnimationFrame(t._update)}},t}return Object(s.a)(i,[{key:"componentDidMount",value:function(){this._buildTargetArray(),this._buildCellContainer(),this._buildCells(),this._resetAnimation({firstTime:!0})}},{key:"_resetAnimation",value:function(t){var e=t.firstTime;this._animationIndex=0,e||(d(this._targetArray),this._updateCellTargets()),setTimeout(this._update,1e3)}},{key:"_buildTargetArray",value:function(){this._targetArray.length=0;for(var t=0;t<10;t++)for(var e=0;e<v;e++)this._targetArray.push({x:e,y:t});d(this._targetArray)}},{key:"_buildCellContainer",value:function(){var t=document.createElement("div");t.className="cell-container",document.body.appendChild(t),this._cellContainer=t}},{key:"_buildCells",value:function(){this._cells.length=0;for(var t=0;t<10;t++){for(var e=[],i=0;i<v;i++){var n=this._targetArray[t*v+i],a={x:i*h,y:t*h},r={x:(n.x-i)*h/p,y:(n.y-t)*h/p},o=document.createElement("div");o.className="cell ".concat(["red","green","blue"][Math.floor(3*Math.random())]),o.style.left=a.x+"px",o.style.top=a.y+"px",this._cellContainer.appendChild(o),e.push({div:o,position:a,velocity:r})}this._cells.push(e)}}},{key:"_updateCellTargets",value:function(){for(var t=0;t<10;t++)for(var e=0;e<v;e++){var i=this._cells[t][e],n=this._targetArray[t*v+e];i.velocity={x:(n.x*h-i.position.x)/p,y:(n.y*h-i.position.y)/p}}}},{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{})}}]),i}(n.Component);o.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(_,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.fe650b7b.chunk.js.map