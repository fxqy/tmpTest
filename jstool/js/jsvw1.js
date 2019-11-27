var testObj={
	textA:'123'
};
window.onload=function(){
	var fvw=div(
		{
			style:'background:#eee;height:100px;',
		},
		[
			p(
				{
					html:'AAA'
				},
				[
					a({html:'A111',onclick:function(){},title:'A111',style:'margin:0 10px;'}),
					input({type:'text',watch:{obj:'testObj',attr:'textA'}}),
					a({html:'A222',onclick:function(){tipCase({msg:'A222 clicked!'})},title:'A222',style:'margin:0 10px;'})
				]
			),
			a({html:'SO',href:'http://so.com'}),
			span({html:'BBB'})
		]
	);
	document.body.appendChild(fvw);
}
function tag(tagName,prop,children){
	var e=document.createElement(tagName);
	for(var i in prop){
		var it=prop[i];
		if(!it)continue;
	    if(i=='clazz'){
			e.className=it;
		}else if(i=='html'){
			e.innerHTML=it;
		}else if(i.indexOf('on')==0){
			e[i]=it;
		}else if(i=='init'){
			it.call(e,e);
		}else if(i=='watch'){
			eleWatch(e,it);
		}else{
			e.setAttribute(i,it);
		}
	}
	for(var i in children){
		var it=children[i];
		if(!it)continue;
		e.appendChild(it);
	}
	return e;
}
function eleWatch(e,it){
	var obj;
	if(it.obj)obj=eval('('+it.obj+')');
	else obj=window;
	e.onchange=function(){
		if(this.value){
			setWatchObj(this,it);
		}
	};
	Object.defineProperty(obj, it.attr, {
		set:function(v){
			if(v){
			   if(e.tagName=='textarea')e.innerHTML=v;
			   else e.value=v;
			   if(it.fun)it.fun.call(e,2,v);
			}
		}
	});
}
function setWatchObj(e,it){console.log(it);
	var obj;
	if(it.obj)obj=eval('('+it.obj+')');
	else obj=window;
console.log(obj);
	obj[it.attr]=e.value;
	console.log(obj);
}
/**
*impl
*/
function div(prop,children){
	return tag('div',prop,children);
}
function p(prop,children){
	return tag('p',prop,children);
}
function a(prop,children){
	return tag('a',prop,children);
}
function span(prop,children){
	return tag('span',prop,children);
}
function br(prop,children){
	return tag('br');
}
function ul(prop,children){
	return tag('ul',prop,children);
}
function li(prop,children){
	return tag('li',prop,children);
}
function table(prop,children){
	return tag('table',prop,children);
}
function tbody(prop,children){
	return tag('tbody',prop,children);
}
function th(prop,children){
	return tag('th',prop,children);
}
function tr(prop,children){
	return tag('tr',prop,children);
}
function td(prop,children){
	return tag('td',prop,children);
}
function input(prop,children){
	return tag('input',prop,children);
}
function textarea(prop,children){
	return tag('textarea',prop,children);
}

/**test**/
function tipView(opt){
	var vw=div(
		{
			clazz:'tip_holder',style:'position:fixed;background:#000;border-radius:3px;text-align:center;',
		},
		[
			a({style:'color:white;line-height:30px;padding:2px 12px;', html:opt.msg}),
			a({
				clazz:'pnl_x', 
				style:'display:'+(opt.flag?'inline-block':'none')+';cursor:pointer;text-decoration:none;color:red;opacity:0.5;padding:2px 5px 2px 0px;',
				html:'×',
				onclick:function(){vw.outerHTML=''},
				onmouseover:function(){this.style.opacity=1},
				onmouseout:function(){this.style.opacity=0.5}
			})
		]
	);
	return vw;
}
function tipCase(opt){
	var vw=tipView(opt);
	document.body.appendChild(vw);
	var psz=pgsz();
	vw.style.left=(psz[0]-vw.offsetWidth)/2+"px";
	vw.style.top=(psz[1]-vw.offsetHeight)/2+"px";
	if(!opt.flag)setTimeout(function(){vw.outerHTML=""},1500);
}

function pgsz(){
	var dmd=document.compatMode=="CSS1Compat";
	var r=new Array();
	var wa=dmd?document.documentElement.clientWidth:document.body.clientWidth;
	var ha=dmd?document.documentElement.clientHeight:document.body.clientHeight;
	r.push(wa);
	r.push(ha);
	return r;
}
