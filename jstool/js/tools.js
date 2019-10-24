﻿function _$G(e){
	return document.getElementById(e);
}
function _$C(a) {
	return document.createElement(a);
}
function _$A(b, a) {
	a.appendChild(b);
}
var _$P=function(g,p,s){
	var oid;
	try{
		if(_$Ava(p)){
			if(typeof p == "object"&&p.tagName){
				var id = "TMPQUERYID"+new Date().getTime()+p.tagName;
				oid = p?p.getAttribute("id"):null,nid = oid || id;
				p.id=nid;
				if(s) return document.querySelector("[id='"+nid+"'] "+g);
				else return document.querySelectorAll("[id='"+nid+"'] "+g);
			}else{
				return s?null:[];
			}
		}else{
			if(s) return document.querySelector(g);
			else return document.querySelectorAll(g);
		}
	}catch(err){return s?null:[];}finally{
		if(typeof p == "object"&&p.tagName&&!oid)p.removeAttribute("id");
	}
};
var _$Q=function(g,p){return _$P(g,p,1);}
function _$Ava(a) {
	if ( null==a || typeof(a)=="undefined" || ""==a ) {
		return false;
	} else {
		return true;
	}
}
function _$Null(a) {
	return !_$Ava(a);
}
function isPercent(str) {
	var reg = new RegExp("^\\d+\\.?\\d*%$");
	return reg.test(str);
}
function isInt(str) {
	var reg = new RegExp("^[1-9][0-9]*$");
	return reg.test(str);
}
function isNum(str) {
	var reg = new RegExp("^\\d+\\.?\\d*$");
	return reg.test(str);
}
function _getStorage (key) {
	if(localStorage&&localStorage.getItem(key)){
		return localStorage.getItem(key);
	}
	return "";
}
function _setStorage(key, value) {
	if(localStorage){
		localStorage.setItem(key,value);
	}else{
		tipCase({msg:"localStorage not support on your browser!"});
	}
}
function getPgsz(){
	var dmd=document.compatMode=="CSS1Compat";
	var r=new Array();
	var wa=dmd?document.documentElement.clientWidth:document.body.clientWidth;
	var ha=dmd?document.documentElement.clientHeight:document.body.clientHeight;
	r.push(wa);
	r.push(ha);
	return r;
}
function _$SetOpacity(ele,val){
		ele.style.filter="alpha(opacity="+val+")";
		ele.style.opacity = val/100;
}
/**
*option{ele: Dom元素, prd:周期, from:开始, to:结束, afun:结束callback}
*/
function _$FadeIn(option) {
	option.prd = option.prd || 20;
	option.to = option.to || 100;
	option.ele.style.display = 'block';
	_$SetOpacity(option.ele, 0);
	var val = option.from||0;
	(function() {
		_$SetOpacity(option.ele, val);
		val += 10;
		if (val <= option.to) {
			setTimeout(arguments.callee, option.prd)
		}else{
			if(option.afun)option.afun();
		}
	})();
}
function _$FadeOut(option) {
	option.prd = option.prd || 20;
	option.to = option.to || 0;
	var val = option.from||100;
	( function() {
		_$SetOpacity(option.ele, val);
		val -= 10;
		if (val >= option.to) {
			setTimeout(arguments.callee, option.prd);
		} else if (val < option.to) {
			option.ele.style.display = 'none';
			_$SetOpacity(option.ele,100);
			if(option.afun)option.afun();
		}
	})();
}
function _$MoveDu(elem,step,fpos,tpos,speed) {
	if(0==step)return;
	speed = speed || 20; 
	tpos = tpos || 0;
	var val = fpos-0;
	elem.style.top=val+"px";
	( function() {
		elem.style.top=val+"px";
		val += step;
		if(step<0){
			if (val > tpos) {
				setTimeout(arguments.callee, speed);
			}
		}else{
			if (val < tpos) {
				setTimeout(arguments.callee, speed);
			}
		}
	})();
}

/**
*option{ code:编号, msg:消息, period:持续时间, closed:关闭后,cover: 遮罩, abs: 不会消失 }
*/
function tipCase(option){
	var carr=getPgsz();
	var pgw=carr[0];
	var pgh=carr[1];
	if(_$Null(option.code))option.code="";
	$TipCaseIndex=window.$TipCaseIndex||0;
	var eid=option.code+"_"+$TipCaseIndex;
	$TipCaseIndex++;
	var mctt,mtbox,mcov;
	mtbox = _$C("a");
	mtbox.id="mtbox"+eid;
	mtbox.className="mtbox";
	mctt=_$C("div");
	mctt.id="mctt"+eid;
	mctt.style.position="fixed";
	mctt.style.zIndex="9999";
	if(option.cover){
		mcov=_$C("div");
		mcov.id="mcov"+eid;
		mcov.className="cfmbackLayer";
		mcov.style.position="fixed";
		mcov.style.zIndex="9999";
		_$A(mcov,document.body);
		mcov.style.display="block";
		mcov.style.width=pgw+"px";
		mcov.style.height=pgh+"px";
	}
	_$A(mtbox,mctt);
	_$A(mctt,document.body);
	mtbox.innerHTML=option.msg;
	mctt.style.display="block";
	mctt.style.maxWidth=pgw-10+"px";
	var mcttw=parseInt(mctt.offsetWidth);
	var mctth=parseInt(mctt.offsetHeight);
	mctt.style.left=(pgw/2-(mcttw/2))+"px";
	mctt.style.top=(pgh/2-(mctth/2))+"px";
	if(mcov)_$FadeIn({ele:mcov,to:70});
	_$FadeIn({ele:mctt});
	if(_$Null(option.period))option.period=1500;
	var cls=function(){_$FadeOut({ele:mctt,afun:function(){if(_$Ava(mctt.parentNode))mctt.outerHTML="";}});
	if(mcov)_$FadeOut({ele:mcov,from:70,afun:function(){if(_$Ava(mcov.parentNode))mcov.outerHTML="";}});if(option.closed)option.closed(eid);}
	if(_$Null(option.abs))window.setTimeout(cls,option.period);
	else{return {dom:mctt,close:cls};}
}
/**
*option{
* code 编号, title 标题, content 内容, btn1 按钮1, fun1 回调1, btn2 按钮2, fun2 回调2, btn3 按钮3, fun3 回调3,closed 关闭回调
* width 宽度, headColor 颜色, claza ClassA, clazb ClassB, clazc ClassC 
*}
*/
function panelCase(option){
	var mboxw=option.width?option.width:300;
	var carr=getPgsz();
	var pgw=carr[0];
	var pgh=carr[1];
	if(_$Null(option.code))option.code="";
	var mhld,mbox,clay,mboxtit,mboxclr,mboxbody,tittxt,mbox_btna,mbox_btnb,mbox_btnc;
	mhld = _$G("cfmhd"+option.code);
	if(_$Null(mhld)){
		var html='<div id="cfmbackLayer'+option.code+'" class="cfmbackLayer"></div>'+
			'<div id="cfmBox'+option.code+'" class="cfmBox">'+
				'<div id="cfmBox_header" class="cfmBox_header">'+
					'<a id="cfmBox_closer" class="cfmBox_closer">×</a>'+
					'<span id="cfmboxTit"></span>'+
				'</div>'+
				'<div id="cfmBox_body" class="cfmBox_body">'+
					'<p id="cfmboxMsg"></p>'+
				'</div>'+
				'<div class="cfmBox_footer">'+
					'<a id="cfmBoxbtna" class="btn btn-mini btn-green">Confirm</a>'+
					'<a id="cfmBoxbtnb" class="btn btn-mini">Cancel</a>'+
					'<a id="cfmBoxbtnc" class="btn btn-mini">Ignore</a>'+
				'</div>'+
			'</div>';
		mhld = _$C("div");
		mhld.id="cfmhd"+option.code;
		_$A(mhld,document.body);
		mhld.innerHTML=html;
	}
	mbox = _$Q("#cfmBox"+option.code,mhld);
	clay=_$Q("#cfmbackLayer"+option.code,mhld);
	mboxtit=_$Q("#cfmBox_header",mbox);
	mboxclr=_$Q("#cfmBox_closer",mbox);
	mboxbody=_$Q("#cfmBox_body",mbox);
	tittxt=_$Q("#cfmboxTit",mbox);
	mboxmsg=_$Q("#cfmboxMsg",mbox);
	mbox_btna=_$Q("#cfmBoxbtna",mbox);
	mbox_btnb=_$Q("#cfmBoxbtnb",mbox);
	mbox_btnc=_$Q("#cfmBoxbtnc",mbox);
	if(option.title){
		tittxt.innerHTML=option.title;
	}
	if(option.content){
		if(typeof(option.content)=="string"){
			mboxmsg.innerHTML=option.content;
		}else if(typeof(option.content)=="object"&&option.content.tagName){
			_$A(option.content,mboxmsg);
		}
	}
	mboxclr.onclick=function(){
		// mbox.style.display="none";
		// clay.style.display="none";
		_$FadeOut({ele:mbox});
		_$FadeOut({ele:clay,from:70});
		if(option.closed)option.closed.call(this);
	}
	if(!option.btn1){
		mbox_btna.style.display="none";
	}else{
		mbox_btna.innerHTML=option.btn1;
		mbox_btna.style.display="inline-block";
		mbox_btna.onclick=function(){
			if(option.fun1){
				var b=option.fun1.call(mbox_btnc,mboxbody);
				if(b){
					mboxclr.onclick.call(this);
				}
			}else{
				mboxclr.onclick.call(this);
			}
		};
	}
	if(!option.btn2){
		mbox_btnb.style.display="none";
	}else{
		mbox_btnb.innerHTML=option.btn2;
		mbox_btnb.style.display="inline-block";
		mbox_btnb.onclick=function(){
			if(option.fun2){
				var b=option.fun2.call(mbox_btnc,mboxbody);
				if(b){
					mboxclr.onclick.call(this);
				}
			}else{
				mboxclr.onclick.call(this);
			}
		};
	}
	if(!option.btn3){
		mbox_btnc.style.display="none";
	}else{
		mbox_btnc.innerHTML=option.btn3;
		mbox_btnc.style.display="inline-block";
		mbox_btnc.onclick=function(){
			if(option.fun3){
				var b=option.fun3.call(mbox_btnc,mboxbody);
				if(b){
					mboxclr.onclick.call(this);
				}
			}else{
				mboxclr.onclick.call(this);
			}
		};
	}

	mbox.style.width=mboxw+"px";
	if(option.headColor)mboxtit.style.backgroundColor=option.headColor;
	if(option.claza)mbox_btna.className=option.claza;
	if(option.clazb)mbox_btnb.className=option.clazb;
	if(option.clazc)mbox_btnc.className=option.clazc;

	clay.style.width=pgw+"px";
	clay.style.height=pgh+"px";
	mbox.style.left=(pgw/2-(mboxw/2))+"px";
	mbox.style.top=-10000+"px";
	_$Q("#cfmBox_body",mbox).style.maxHeight=pgh-5+"px";
	mbox.style.display="block";
	clay.style.display="block";
	var mboxht=parseInt(mbox.offsetHeight);
	var mboxposy=(pgh/2-(mboxht/2));
	//_$MoveDu(mbox,20,mboxposy-50,mboxposy);
	mbox.style.top=mboxposy+"px";
	_$FadeIn({ele:clay,to:70});
	_$FadeIn({ele:mbox});
	
}
function panelCaseA(opt){
	panelCase({code:opt.code,title:opt.title,content:opt.content,btn1:opt.btn1,fun1:opt.fun1,btn2:opt.btn2,fun2:opt.fun2,btn3:opt.btn3,fun3:opt.fun3,closed:opt.closed,width:opt.width,headColor:"#f5f5f5",claza:"btn btn-mini btn-green"});
}
function alertCase(msg){
	panelCaseA({ title:'Message', content:msg, width:380, btn1:"确定"});
}
function confirmCase(msg,fun){
	panelCaseA({ title:'Message', content:msg, width:380, btn1:"确定", btn2:"取消",fun1: fun});
}
function prefixInteger(i,l){
	var f=i+"";
	if(f.length<l){
		for(var i=f.length;i<l;i++){
			f="0"+f;
		}
	}
	return f;
}
function dateFmt(str){   
    var Week = ['日','一','二','三','四','五','六'];  
    str=str.replace(/yyyy|YYYY/,this.getFullYear());   
    str=str.replace(/yy|YY/,(this.getYear() % 100)>9?(this.getYear() % 100).toString():'0' + (this.getYear() % 100));   
    str=str.replace(/MM/,this.getMonth()+1>9?this.getMonth()+1:'0' + (this.getMonth()+1));   
    str=str.replace(/M/g,this.getMonth()+1);   
    str=str.replace(/w|W/g,Week[this.getDay()]);   
    str=str.replace(/dd|DD/,this.getDate()>9?this.getDate().toString():'0' + this.getDate());   
    str=str.replace(/d|D/g,this.getDate());   
    str=str.replace(/hh|HH/,this.getHours()>9?this.getHours().toString():'0' + this.getHours());   
    str=str.replace(/h|H/g,this.getHours());   
    str=str.replace(/mm/,this.getMinutes()>9?this.getMinutes().toString():'0' + this.getMinutes());   
    str=str.replace(/m/g,this.getMinutes());   
    str=str.replace(/ss|SS/,this.getSeconds()>9?this.getSeconds().toString():'0' + this.getSeconds());   
    str=str.replace(/s|S/g,this.getSeconds());    
    return str;   
}
var Ajax = function(){};
Ajax.getHttpRequest = function () {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.createRequest) {
        return window.createRequest();
    }
	var prefixes = ["MSXML2","Microsoft","MSXML","MSXML3"];for (var i=0;i<prefixes.length;i++){try { return new ActiveXObject(prefixes[i]+".XmlHttp");}catch (ex) {}}
    throw new Error("Could not find an installed XML parser.");
};

Ajax.get = function (url, callback) {
    var req = Ajax.getHttpRequest();
    req.open("GET", url, true);
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (callback) callback(req.responseText);
        }
    };
    req.send(null);
};
Ajax.post = function (url, data, callback) {
    var req = Ajax.getHttpRequest();
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (callback) callback(req.responseText);
        }
    };
    req.send(data);
};
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = (c === 'x') ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}