window.onload=function(){
	$Mcss();
	$A($Ca("span",{color:"blue",backgroundColor:"#aaa",paddingLeft:"10px", paddingRight:"10px"},{"class":"wrapper"},"hello"));
}

function testbox1(){
	$BoxCase({
		suffix:11,
		maxWidth: 360,
		titleText:"提示",
		content:"<p style='padding:10px;'>西北地区东部至江南等地将出现大范围雨雪天气</p>",
		btns:["确定","忽略","取消"],
		btn1Fun: function (thiz, opt,indx){
			console.log("--->btn click");
			console.log(thiz);console.log(opt);console.log(indx);
			console.log("btn click<---");
			return 1;
		},
		btn2Class:" btn btn-blue",
		closed: function (thiz,opt,indx){
			console.log("--->closed");
			console.log(thiz);console.log(opt);console.log(indx);
			console.log("closed<---");
		}
	});
}

function testbox2(){
	var txa=$Ca("textarea", {"resize":"none","width":"98%","height":"200px", border:"1px solid #fff"}, {"id":"testbox2_txa"});
	txa.value="西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气"
	$BoxCase({
		suffix:12,
		titleText:"提示",
		content: txa,
		btns:["确定","取消"],
		btn1Fun:function(){
			alert(2222222222222222);
			return 1;
		}
		
	});
}

function testalert3(){
    $AlertCase("任务已经完成了...");
}

function testcfm4(){
    $ConfirmCase("确定要开始序列吗？", function(){
		$TipCase({msg:"已经开始了...",cover:1});
	});
}

function testtip1(){
    $TipCase({msg:"Download Timeout !西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气",cover:1,abs: 1});
}

function testtip2(){
    $TipCase({msg:"Download Timeout !",cover:1});
}

function testtip3(){
	var txa=$Ca("textarea", {"resize":"none","width":"98%","height":"200px", "border":"1px solid #555", "backgroundColor":"black","color":"#ddd"}, {"id":"testbox2_txa"});
	txa.value="呵呵，我现在的神智，仅仅只是一缕残魂，封印千年，已是极限，若非心中执念尚存，或许早便是迷失在了那异魔气的侵蚀之下。银光人影笑了笑，声音之中倒是异常的洒脱，想来能够从那种侵蚀状态中脱离出来，已是让得他极为的满足。不管怎样，我都是死去千年之人，如今能够恢复神智，即便只是短暂的霎那，已是心满意足，何必再奢想什么"
    $TipCase({msg:txa,cover:1,abs: 1});
}

/**----------------------- comm -----------------------**/
function $A(a, b){(b?b:document.body).appendChild(a);}
function $B(a, b){b.parentNode.insertBefore(a, b);}
function $C(a){return document.createElement(a);}
function $Ca(a,b,c,d){var m=$C(a);if(b){$Ext(m.style,b);};if(c){for(var k in c){m.setAttribute(k,c[k]);};};if(d){m.innerHTML=d+"";};return m;}
function $G(e){return document.getElementById(e);}
function $Q(a){return document.querySelector(a);}
function $Qa(a){return document.querySelectorAll(a);}
function $Ava(a){return a != null && typeof(a) != 'undefined';}
function $Null(a){return !$Ava(a);}
function $IsInt(str){var reg = new RegExp("^[1-9][0-9]*$");return reg.test(str);}
function $Ext(n,o){for(var k in o){n[k]=o[k];};return n;}
function $Exta(n,o){var p=JSON.parse(JSON.stringify(n));for(var k in o){p[k]=o[k];};return p;}
function $Selectable(b){if(b){document.body.className = document.body.className.replace(' disable-select', '');}else{document.body.className+=' disable-select';}}
function $StopBubble(e){if ( e && e.stopPropagation ){e.stopPropagation();}else{window.event.cancelBubble = true;}}
/**
 * BoxCase参数
*options.suffix
*options.titleText
*options.content
*options.btns [] 按钮名
*options.btn*Fun(content,holder) *: 1,2,3...方法参数：content->弹出内容dom对象，holder->整个弹出框dom对象
*options.headColor
*options.btn*Class *: 1,2,3...
*options.closed关闭后回调
*
**/
function $BoxCase(options){
	var allholder, backLayer, mboxtit, mboxclr, tittxt, mboxbod, mbox_fter
	var holder=$G("cfmBox" + options.suffix);
	if ($Null(holder)) {
		allholder=$Ca("div",{"zIndex":"9999"},{"id":"cfmAllHolder" + options.suffix,"class":"cfmBox_allhd"});
		backLayer=$Ca("div",0,{"id":"cfmbackLayer" + options.suffix,"class":"cfmbackLayer"});
		var bmain=$Ca("div",0,{"id":"cfmBox_main" + options.suffix,"class":"cfmBox_main"});
		var bsub=$Ca("div",0,{"id":"cfmBox_sub" + options.suffix,"class":"cfmBox_sub"});
		holder=$Ca("div",0,{"id":"cfmBox" + options.suffix,"class":"cfmBox"});
		mboxtit=$Ca("div",0,{"id":"cfmBox_header","class":"cfmBox_header"});
		mboxclr=$Ca("a",0,{"id":"cfmBox_closer","class":"cfmBox_closer"},"&times;");
		tittxt=$Ca("span",0,{"id":"cfmboxTit"});
		mboxbod=$Ca("div",0,{"id":"cfmBox_body","class":"cfmBox_body"});
		mbox_fter=$Ca("div",0,{"id":"cfmBox_footer","class":"cfmBox_footer"});

		$A(allholder);$A(backLayer, allholder);	$A(holder, bsub);$A(bsub, bmain);$A(bmain, allholder);
		$A(mboxtit, holder);$A(mboxbod, holder);$A(mbox_fter, holder);$A(mboxclr, mboxtit);$A(tittxt, mboxtit);
		var btnHdShow = false;
		var blen=0;
		if(options.btns&&(blen=options.btns.length)>0){
			for(var i=0;i<blen;i++){
				var itm = options.btns[i];
				var btn=$Ca("a",0,{"id":"cfmBoxbtn"+btni,"class":"btn"},itm);
				var btni = i+1;
				if(i==0)btn.className="btn btn-green";
				if(options["btn"+btni+"Class"])btn.className=options["btn"+btni+"Class"];
				btn.mnclick=options["btn"+btni+"Fun"];
                btn.options=options;
				btn.indx=btni;
				btn.onclick = function() {
					if(this.mnclick){
						if (this.mnclick(this,this.options,this.indx)) {
							$CloseBox(this.options.suffix);
							if (this.options.closed) {
								this.options.closed(this,this.options,this.indx);
							}
						}
					}else{
						$CloseBox(this.options.suffix);
						if (this.options.closed) {
							this.options.closed(this,this.options,this.indx);
						}
					}
				}
				$A(btn, mbox_fter);
				btnHdShow = true;
			}

		}
		if (btnHdShow)mbox_fter.style.display = "block";
		else mbox_fter.style.display = "none";

	}else{
		var ahdid="cfmAllHolder" + options.suffix;
		allholder = $G(ahdid);
		backLayer = $G("cfmbackLayer" + options.suffix);
		mboxtit = $Q(ahdid+" #cfmBox_header");
		mboxclr = $Q(ahdid+" #cfmBox_closer");
		tittxt = $Q(ahdid+" #cfmboxTit");
		mboxbod = $Q(ahdid+" #cfmBox_body");
	}
	if(options.maxWidth) {
		holder.style.maxWidth = options.maxWidth+"px";
	}
	if(options.titleText) {
		tittxt.innerHTML = options.titleText;
	}
	if(options.content) {
		if("string"==typeof(options.content))mboxbod.innerHTML = options.content;
		else mboxbod.appendChild(options.content);
	}
	mboxclr.options=options;
	mboxclr.onclick = function(e) {
		$StopBubble(e);
		$CloseBox(this.options.suffix);
		if (this.options.closed) this.options.closed(this,this.options,0);
	}
	mboxclr.onmousedown =function(e){
		$StopBubble(e);
	}
	if(options.headColor){mboxtit.style.backgroundColor=options.headColor;mboxclr.style.backgroundColor=options.headColor;}
	allholder.style.display = "table-cell";
}
function $CloseBox(suffix) {
	if ($Null(suffix)) suffix = "";
	var allholder=$G("cfmAllHolder" + suffix);
	allholder.style.display = "none";
	allholder.outerHTML = "";

}
function $AlertCase(msg) {
	$BoxCase({
		suffix : "_alertCase",
		headColor : "#f5f5f5",
		maxWidth: 300,
		titleText : "提示",
		content : msg,
		btns : ["确定"],
		btn1Fun : function() {
			return true;
		}
	});

}
function $ConfirmCase(msg, funa, funb) {
	$BoxCase({
		suffix : "_confirmCase",
		headColor : "#f5f5f5",
		maxWidth: 320,
		titleText : "提示",
		content : msg,
		btns : ["确定","取消"],
		btn1Fun : function() {
			if (funa) funa();
			return true;
		},
		btn2Fun : function() {
			if (funb) funb();
			return true;
		}
	});

}
/**
*option{ code:编号, msg:消息, period:持续时间, closed:关闭后,cover: 遮罩, abs: 不会消失 }
*/
function $TipCase(option){
	if(!option.code)option.code="";
	var tpidx=window.$TipCaseIndex||0;
	var eid=option.code+"_"+(++tpidx);
	window.$TipCaseIndex=tpidx;
	var allholder=$Ca("div",{"zIndex":"99999"},{"id":"tipcase_ah" + eid,"class":"cfmBox_allhd"});
	var bmain=$Ca("div",0,{"id":"tipcase_main"+eid,"class":"cfmBox_main"});
	var bsub=$Ca("div",0,{"id":"tipcase_sub"+eid,"class":"cfmBox_sub"});
	var mctt,mtbox,mcov;
	mtbox=$Ca("a",{"display":"block","color":"#fff","backgroundColor":"#222","padding":"10px 16px 10px 16px","borderRadius":"4px"},{"id":"mtbox"+eid,"class":"mtbox"});
	mctt=$Ca("div",{"position":"relative","display":"inline-block","zIndex":"99999","maxWidth":"333px","width":"100%"},{"id":"mctt"+eid});
	mctt.onclick =function(e){$StopBubble(e);}
	if(option.cover){
		mcov=$Ca("div",{"zIndex":"99999","display":"block","height":"100%","backgroundColor":"#fafafa","left":0,"top":0,"opacity":0.7},
			{"id":"mcov"+eid,"class":"tipcase_bkLayer"});
		$A(mcov,allholder);
	}
	
	if (option.msg) {
		if("string"==typeof(option.msg)){
			mtbox.innerHTML = option.msg;
		}else{
			mtbox.appendChild(option.msg);
		}
	}
	$A(mtbox,mctt);$A(mctt, bsub);$A(bsub,bmain);$A(bmain,allholder);$A(allholder);
	allholder.style.display="block";
	if($Null(option.period))option.period=1500;
	var cls=function(){allholder.outerHTML="";if(option.closed)option.closed(eid);};
	if(!option.abs)window.setTimeout(cls,option.period);
	else bmain.onclick=cls;
}

function $Mcss(){
	$A($Ca("style",0,{type:"text/css"},`
	.btn {
		text-decoration: none;
		display: inline-block;
		padding: 4px 12px;
		margin-bottom: 0;
		font-size: 14px;
		line-height: 20px;
		color: #555;
		text-align: center;
		text-decoration:none;
		float:none;
		text-shadow: 0 1px 1px rgba(255,255,255,0.75);
		vertical-align: middle;
		cursor: pointer;
		background-color: #f5f5f5;
		background-image: linear-gradient(to bottom,#fff,#e6e6e6);
		background-repeat: repeat-x;
		border: 1px solid #bbb;
		border-color: #e6e6e6 #e6e6e6 #bfbfbf;
		border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
		border-bottom-color: #a2a2a2;
		border-radius: 4px;
		box-shadow: inset 0 1px 0 rgba(255,255,255,0.2),0 1px 2px rgba(0,0,0,0.05);
		font-family:Microsoft Yahei,Heiti,arial,helvetica,sans-serif,SimHei;
		user-select:none;
	}
	.btn:hover {
		-moz-opacity:0.7;
		-khtml-opacity:0.7;
		opacity:0.7;
	}
	.btn-large {
		padding: 11px 19px;
		font-size: 17.5px;
		border-radius: 6px;
	}
	.btn-mini {
		padding: 1px 6px;
		font-size: 10.5px;
		border-radius: 3px;
	}
	.btn-green {
		color: #fff;
		text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
		background-color: #5bb75b;
		background-image: linear-gradient(to bottom,#62c462,#51a351);
		background-repeat: repeat-x;
		border-color: #51a351 #51a351 #387038;
		border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
	}
	.btn-blue {
		color: #fff;
		text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
		background-color: #006dcc;
		background-image: linear-gradient(to bottom,#08c,#04c);
		background-repeat: repeat-x;
		border-color: #04c #04c #002a80;
		border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
	}
	.btn-lightBlue {
		color: #fff;
		text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
		background-color: #49afcd;
		background-image: linear-gradient(to bottom,#5bc0de,#2f96b4);
		background-repeat: repeat-x;
		border-color: #2f96b4 #2f96b4 #1f6377;
		border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
	}
	.btn-orange {
		color: #fff;
		text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
		background-color: #faa732;
		background-image: linear-gradient(to bottom,#fbb450,#f89406);
		background-repeat: repeat-x;
		border-color: #f89406 #f89406 #ad6704;
		border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
	}
	.btn-red {
		color: #fff;
		text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
		background-color: #da4f49;
		background-image: linear-gradient(to bottom,#ee5f5b,#bd362f);
		background-repeat: repeat-x;
		border-color: #bd362f #bd362f #802420;
		border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
	}
	.btn-black {
		color: #fff;
		text-shadow: 0 -1px 0 rgba(0,0,0,0.25);
		background-color: #363636;
		background-image: linear-gradient(to bottom,#444,#222);
		background-repeat: repeat-x;
		border-color: #222 #222 #000;
		border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
	}		
	.ipt_box {
		display: inline-block;
		height: 20px;
		padding: 4px 6px;
		margin-bottom: 10px;
		font-size: 14px;
		line-height: 20px;
		color: #555;
		vertical-align: middle;
		border-radius: 4px;
		background-color: #fff;
		border: 1px solid #ccc;
		box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
		transition: border linear .2s,box-shadow linear .2s;
	}
	.ipt_box:focus {
		border-color: rgba(82,168,236,0.8);
		outline: 0;
		outline: thin dotted 9;
		box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.6);
	}
	.cfmBox_allhd {
		position:fixed;
		top:0;
		left:0;
		width:100%;
		height:100%;
		display: table;
		vertical-align: middle;
		text-align: center;

	}
	.cfmbackLayer {
		display:block;
		position:fixed;
		background:#eee;
		opacity:0.7;
		width:100%;
		height:100%;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.cfmBox_main {
		display: table;
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}
	.cfmBox_sub {
		display: table-cell;
		vertical-align: middle;
		text-align: center;
		box-sizing: content-box;
	}
	.cfmBox {
		display:inline-block;
		position:relative;
		width: 90%;
		max-width: 666px;
		font-family:Microsoft Yahei,Heiti,arial,helvetica,sans-serif,SimHei;
		background-color: #fff;
		border-radius: 6px;
		outline: 0;
		border: 0px solid #999;
		border: 1px solid rgba(255,255,255,0.5);
		background-clip: padding-box;
		box-sizing: content-box;
		box-shadow: 0 0 13px rgb(0,0,0,0.5);
	}
	.cfmBox_header {
		padding:8px;
		background-color: #efefef;
		border-bottom: 1px solid #CDCDCD;
		border-top-left-radius:5px;
		border-top-right-radius:5px;
		min-height:20px;
		cursor:pointer;
		user-select:none;
		text-align: left;
	}
	.cfmBox_header #cfmboxTit{
		margin: 0;
		line-height: 20px;
		overflow:hidden;
		cursor:pointer;
		font-size:14px;
		font-family:Microsoft YaHei,SimHei;
		color:#fff;
		text-shadow: 0px 0px 1px #686868, 0px 1px 1px #ccc, 0px 2px 1px #d6d6d6, 0px 3px 1px #ddd, 0px 3px 3px #c5c5c5;
	}
	.cfmBox_closer {
		display:inline-block;
		float:right;
		line-height:20px;
		text-align:center;
		text-decoration:none;
		font-weight:bold;
		font-size:18px;
		color:#eee;
		opacity:0.8;
		text-shadow: 0px 0px 1px #686868, 0px 1px 1px #ccc, 0px 2px 1px #d6d6d6, 0px 3px 1px #ddd, 0px 3px 3px #c5c5c5;
	}
	.cfmBox_closer:hover {
		color:#FF4D41;
		opacity:1;
	}
	.cfmBox_body{
		padding:20px 10px 20px 10px;
		overflow:auto;
	}
	.cfmBox_footer{
		padding:5px;
		margin-bottom: 0;
		text-align: center;
		background-color: #f5f5f5;
		border-top: 1px solid #ddd;
		border-radius: 0 0 6px 6px;
		box-shadow: inset 0 1px 0 #fff;
		min-height:20px;
	}
	.cfmBox_footer>a{
		margin-left:5px;
		margin-right:5px;
	}
	.mtbox{
		text-decoration:none;
		display:inline-block;
		padding:4px 16px;
		margin-bottom:0;
		font-size:14px;
		font-weight:bold;
		line-height:20px;
		color:#fff;
		text-align:center;
		vertical-align:middle;
		background:#000;
		border-radius:3px;
		font-family:Microsoft Yahei,Heiti,arial,helvetica,sans-serif,SimHei;
		max-width:800px;
		border: 1px solid rgba(170,170,170,0.7);
		box-shadow: 0 0 13px rgb(0,0,0,0.7);
	}
	.disable-select{
		user-select: none;
	}

	`),document.head);
	
}

