var testObj={
	textA:'',
    textB:''
};
var testEles={
    a222:null
};
window.onload=function(){
	var fvw=div({style:'background:#eee;height:100px;'},
		[
			p({html:'AAA'},
				[
					a({html:'A111',onclick:function(){},title:'A111',style:'margin:0 10px;'}),
					input({type:'text',style:'margin:0  5px;',watch:'testObj.textA'}),
					input({type:'text',style:'margin:0  5px;',watch:{val:'testObj.textB',fun:function(v){testEles.a222.innerHTML=v}}}),
                    input({value:888,style:'margin:0  5px;'}),
					a({html:'A222',onclick:function(){tipCase({msg:'A222 clicked!',flag:1})},title:'A222',style:'margin:0 10px;',init:function(e){testEles.a222=e}})
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
			valWatch(e,it);
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
function valWatch(e,it){
	var s=(typeof it=='string')?it:it.val;
    var m,n;
    var indx=s.lastIndexOf('.');
    if(indx>0){m=s.substring(0,indx);n=s.substring(indx+1,s.length)}
    else{m='window';n=s}
    var obj=eval('('+m+')');
	Object.defineProperty(obj, n, {
		set:function(v){
            e.value=v;
            if(it.fun)it.fun.call(e,v);
		},
        get:function(){
            return e.value;
        }
	});
    if(it.fun){
        e.onchange=function(){it.fun.call(this,e.value)}
        e.onkeyup=function(){it.fun.call(this,e.value)}
    }
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
				style:'display:'+(opt.flag?'inline-block':'none')+';cursor:pointer;text-decoration:none;color:red;opacity:0.7;padding:2px 5px 2px 0px;',
				html:'×',
				onclick:function(){vw.outerHTML=''},
				onmouseover:function(){this.style.opacity=1},
				onmouseout:function(){this.style.opacity=0.7}
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
