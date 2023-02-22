function $G(e){
	return document.getElementById(e);
}
function $C(a) {
	return document.createElement(a);
}
function $A(b, a) {
	a.appendChild(b);
}
var $P=function(g,p,s){
	var b=false;
	try{
		if(_$Ava(p)){
			if(typeof p == "object"&&p.tagName){
				var pid = p.getAttribute("id");
                if(_$Null(pid)){
                    pid=randomCode(10,3);
                    p.id=pid;
                    b=true;
                }
				if(s) return document.querySelector("[id='"+pid+"'] "+g);
				else return document.querySelectorAll("[id='"+pid+"'] "+g);
			}else{
				return s?null:[];
			}
		}else{
			if(s) return document.querySelector(g);
			else return document.querySelectorAll(g);
		}
	}catch(err){return s?null:[];}finally{
		if(b)p.removeAttribute("id");
	}
};
var $Q=function(g,p){return _$P(g,p,1);}
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
		}else if(i.indexOf('ele')==0){
			continue;
		}else if(i=='init'){
			eleInit(e,it);
		}else if(i=='watch'){
			valWatch(e,it);
		}else{
			e.setAttribute(i,it);
		}
	}
    e.children=children;
	for(var i in children){
		var it=children[i];
		if(!it)continue;
		e.appendChild(it);
	}
	return e;
}
function eleInit(e,it){
    if(typeof it=='function'){
        it.call(e,e.value);
        return;     
    }
    var s=(typeof it=='string')?it:it.val;
     if(s){
        var m,n;
        var indx=s.lastIndexOf('.');
        if(indx>0){m=s.substring(0,indx);n=s.substring(indx+1,s.length)}
        else{m='window';n=s}
        var obj=eval('('+m+')');
        obj[n]=e;
     }
    if(it.fun)it.fun.call(e,e.value);
}

function valWatch(e,it){
	var s=(typeof it=='string')?it:it.val;
    if(s){
        var m,n;
        var indx=s.lastIndexOf('.');
        if(indx>0){m=s.substring(0,indx);n=s.substring(indx+1,s.length)}
        else{m='window';n=s}
        var obj=eval('('+m+')');
        Object.defineProperty(obj, n, {
            set:function(v){
                e.value=v;
                if(it.fun)it.fun.call(e,v,1);
            },
            get:function(){
                return e.value;
            }
        });
    }
    if(it.fun){
        e.onchange=function(){it.fun.call(this,e.value,2)}
        e.onkeyup=function(){it.fun.call(this,e.value,2)}
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
function img(prop,children){
	return tag('img',prop,children);
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
function select(prop,children){
	return tag('select',prop,children);
}
function option(prop,children){
	return tag('option',prop,children);
}
function script(prop,children){
	return tag('script',prop,children);
}
function btn(prop,children){
    prop.style='display:inline-block;cursor:pointer;text-decoration:none;padding:2px 6px;margin:0 3px;'+
                'text-align:center;text-shadow:0 1px 1px rgba(150,150,150,0.5);color:#555;'+
                'background-color:#f5f5f5;background-image:linear-gradient(to bottom,#fff,#e6e6e6);'+
                'border:1px solid #bbb;border-color:#e6e6e6 #e6e6e6 #bfbfbf;border-bottom-color:#a2a2a2;border-radius:3px;'+
                'box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);'+prop.style;
    prop.onmouseover=function(){this.style.opacity=0.5}
    prop.onmouseout=function(){this.style.opacity=1}
   return tag('a',prop,children); 
}
/**test**/
function tipCase(opt){
	var vw=div(
		{
			clazz:'tip_holder',style:'position:fixed;background:#000;border-radius:3px;text-align:center;z-index:999999;',
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
	document.body.appendChild(vw);
	var psz=pgsz();
	vw.style.left=(psz[0]-vw.offsetWidth)/2+"px";
    var top=0.7*psz[1]-vw.offsetHeight;
	vw.style.top=(top>0?top:1)/2+"px";
	if(!opt.flag)setTimeout(function(){vw.outerHTML=""},1200);
}
function pnlCase(opt){
	var psz=pgsz();
	var w=psz[0];
	var h=psz[1];
	var btns=[];
	var vw,pbox;
	if(opt.btns){
		for(var i=0;i<opt.btns.length;i++){
			btns.push(btn({ html:opt.btns[i],indx:i+1,
                onclick:function(){
                    var f=opt['fun'+this.getAttribute('indx')];
                    if(f){
                        if(f.call(this,vw))vw.outerHTML='';
                    }else{
                        vw.outerHTML='';
                    }
                } 
            }));
		}
	}
	vw=div(
            {clazz:'pnl_holder',style:'font-family:Microsoft Yahei,Heiti,arial,helvetica,sans-serif,SimHei;font-size:12px;z-index:999999;'},
            [
                div({
                    clazz:'pnl_clay',style:'position:fixed;left:0;top:0;width:'+w+'px;height:'+h+'px;background:#fafafa;opacity:0.7;z-index:999999;'
                }),
                div({
                        clazz:'pnl_box',style:'position:fixed;border-radius:4px;background:#fff;border:1px solid #cdcdcd;z-index:999999;',
                        init:function(){pbox=this}
                    },
                    [
                        div({
                                clazz:'pnl_hed',style:'height:26px;padding:5px;background:#efefef;border-bottom:1px solid #cdcdcd;border-radius:4px 4px 0 0;',
                            },
                            [
                                span({
                                    clazz:'pnl_tit',style:'margin:0;line-height:15px;text-shadow:0 1px 1px rgba(150,150,150,0.5);',html:opt.title
                                }),
                                a({
                                    clazz:'pnl_x',style:'display:inline-block;cursor:pointer;float:right;text-decoration:none;color:red;opacity:0.5;',html:'×',
                                    onclick:function(){vw.outerHTML=''},
                                    onmouseover:function(){this.style.opacity=1},
                                    onmouseout:function(){this.style.opacity=0.5}
                                })
                            ]
                        ),
                        div({
                            clazz:'pnl_bod',
                            style:'padding:5px;overflow:auto;'+(opt.height?('height:'+opt.height+'px;'):'')+(opt.width?('width:'+opt.width+'px;'):''),
                            html:(typeof opt.content =='string')?opt.content:''
                        },(typeof opt.content =='object')?[opt.content]:[]),
                        div({
                            clazz:'pnl_fot',style:'padding:3px 5px;text-align:right;background:#f5f5f5;border-top:1px solid #ddd;border-radius: 0 0 4px 4px;box-shadow:inset 0 1px 0 #fff;'
                        },btns)
                    ]
                )
            ]
        );
    document.body.appendChild(vw);
	pbox.style.left=(psz[0]-pbox.offsetWidth)/2+"px";
	var top=0.7*psz[1]-pbox.offsetHeight;
	pbox.style.top=(top>0?top:1)/2+"px";
}
function alertCase(msg){
	return pnlCase({width:300, height:80, title:'消息', content:msg, btns:['确定']});
}
function confirmCase(msg,f){
	return pnlCase({width:300, height:80, title:'消息', content:msg, btns:['确定','取消'], fun1:f});
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