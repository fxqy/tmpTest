var main={
	lnkb: 1
};
window.onload=function(){
	jsvw({
		t:'div', z:'f_div', s:'background:grey;',
		c:[
			{
				t:'span', z:'s_sp', s:'background:green;', h:'AAA', clk:function(){tipVw("提示信息",1)}
			},
			{
				t:'a', z:'s_a', s:'color:blue', h:'BBB', title:'BBB', init:function(){main.lnkb=this}
			},
			subVw()
		]
	},document.body);
}
function subVw(){
	return {
		t:'p', id:'c_id', s: 'color:red;',h: 'cccccccccc',
		c: [
			{
				t: 'span',z: 's_spc',s: 'background:green;',h: 'CCC',
				clk: function(){confirmVw('really?',function(){alert(333);return true})}
			}
		]
	};
}

function jsvw(j,p,onld){
	var e=document.createElement(j.t);
	for(var i in j){
		var it=j[i];
		if(!it)continue;
	    if(i=='t'){
			continue;
		}else if(i=='z'){
			e.className=it;
		}else if(i=='s'){
			e.style=it;
		}else if(i=='v'){
			e.value=it;
		}else if(i=='h'){
			e.innerHTML=it;
		}else if(i=='init'){
			it.call(e);
		}else if(i=='clk'){
			e.onclick=it;
		}else if(i=='movr'){
			e.onmouseover=it;
		}else if(i=='mout'){
			e.onmouseout=it;
		}else if(i=='c'){
			for(var k=0;k<it.length;k++){
			    var c=it[k];
			    jsvw(c,e);
			}
		}else{
			e.setAttribute(i,it);
		}
	}
	if(p)p.appendChild(e);
	if(onld)onld.call(e,e,e.style,e.value,e.innerHTML);
	return e;
}

function tipVw(t,m){
	var vw=jsvw({
		t:'div', z:'tip_holder',s:'position:fixed;background:#000;border-radius:3px;text-align:center;',
		c:[
			{
				t:'a',s:'color:white;line-height:30px;padding:2px 12px;', h:t
			},
			{
				t:'a', z:'pnl_x',s:'display:'+(m?'inline-block':'none')+';cursor:pointer;text-decoration:none;color:red;opacity:0.5;padding:2px 5px 2px 0px;',h:'×',
				clk:function(){vw.outerHTML=''},
				movr:function(){this.style.opacity=1},
				mout:function(){this.style.opacity=0.5}
			}
		]
	},document.body,function(e,s,v,h){
		var psz=pgsz();
		s.left=(psz[0]-e.offsetWidth)/2+"px";
		s.top=(psz[1]-e.offsetHeight)/2+"px";
		if(!m)setTimeout(function(){e.outerHTML=""},1500);
	});
}
function pnlVw(opt){
	var psz=pgsz();
	var w=psz[0];
	var h=psz[1];
	var btns=[];
	var vw,pbox;
	if(opt.btns){
		for(var i=0;i<opt.btns.length;i++){
			var itm={
				t:'a', z:'pnl_x',indx: i+1,
				s:'display:inline-block;cursor:pointer;text-decoration:none;padding:2px 6px;margin:0 3px;'+
				'text-align:center;text-shadow:0 1px 1px rgba(150,150,150,0.5);color:#555;'+
				'background-color:#f5f5f5;background-image:linear-gradient(to bottom,#fff,#e6e6e6);'+
				'border:1px solid #bbb;border-color:#e6e6e6 #e6e6e6 #bfbfbf;border-bottom-color:#a2a2a2;border-radius:3px;'+
				'box-shadow:inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);',
				h:opt.btns[i],
				clk:function(){
					var f=opt['fun'+this.getAttribute('indx')];
					if(f){
						if(f.call(this))vw.outerHTML='';
					}else{
						vw.outerHTML='';
					}
				},
				movr:function(){this.style.opacity=0.5},
				mout:function(){this.style.opacity=1}
			};
			btns.push(itm);
		}
	}
	vw=jsvw({
		t:'div', z:'pnl_holder', s:'font-family:Microsoft Yahei,Heiti,arial,helvetica,sans-serif,SimHei;font-size:12px;',
		c:[
			{
				t:'div', z:'pnl_clay',s:'position:fixed;left:0;top:0;width:'+w+'px;height:'+h+'px;background:#fafafa;opacity:0.7;',
			},
			{
				t:'div', z:'pnl_box',s:'position:fixed;border-radius:4px;background:#fff;border:1px solid #cdcdcd;',
				init:function(){pbox=this},
				c:[
					{
						t:'div', z:'pnl_hed',s:'height:16px;padding:5px;background:#efefef;border-bottom:1px solid #cdcdcd;border-radius:4px 4px 0 0;',
						c:[
							{
								t:'span', z:'pnl_tit',s:'margin:0;line-height:15px;text-shadow:0 1px 1px rgba(150,150,150,0.5);',h:opt.title
							},
							{
								t:'a', z:'pnl_x',s:'display:inline-block;cursor:pointer;float:right;text-decoration:none;color:red;opacity:0.5;',h:'×',
								clk:function(){vw.outerHTML=''},
								movr:function(){this.style.opacity=0.9},
								mout:function(){this.style.opacity=0.5}
							}
						]
					},
					{
						t:'div', z:'pnl_bod',s:'padding:5px;overflow:auto;height:'+opt.height+'px;width:'+opt.width+'px;',
						h:(typeof opt.content =='string')?opt.content:'',
						c:(typeof opt.content =='object')?[opt.content]:[]
					},
					{
						t:'div', z:'pnl_fot',s:'padding:3px 5px;text-align:right;background:#f5f5f5;border-top:1px solid #ddd;border-radius: 0 0 4px 4px;box-shadow:inset 0 1px 0 #fff;',
						c:btns
					}
					
				]
			}
		]
	},document.body);
	pbox.style.left=(psz[0]-pbox.offsetWidth)/2+"px";
	pbox.style.top=(psz[1]-pbox.offsetHeight)/2+"px";
}
function alertVw(msg){
	return pnlVw({width:300, height:80, title:'消息', content:msg, btns:['确定']});
}
function confirmVw(msg,f){
	return pnlVw({width:300, height:80, title:'消息', content:msg, btns:['确定'], fun1:f});
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