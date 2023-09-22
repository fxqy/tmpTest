
window.onload=function(){
	$Mcss();
	$A($Ca("span",{color:"blue",backgroundColor:"#aaa",padding:"0.2rem 1rem"},0,"hello"));
}

function testbox1(){
	$BoxCase({
		suffix:11,
		maxWidth: '23rem',
		titleText:"提示",
		content:"<p style='padding:0.7rem;'>西北地区东部至江南等地将出现大范围雨雪天气</p>",
		btns:["确定","忽略","取消"],
		btn1Fun: function (thiz, opt,indx){
			return 1;
		},
		btn2Class:" zbtn zbtn-blue",
		closed: function (thiz,opt,indx){
      $TipCase({msg:"已关闭："+indx, cover:1});
		}
	});
}

function testbox2(){
	var txa=$Ca("textarea", {resize:"none",width:"98%",height:"13rem",border:"1px solid #fff",backgroundColor:"#fff"}, {"id":"testbox2_txa","disabled":1});
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
    $TipCase({msg:"Download Timeout !西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气西北地区东部至江南等地将出现大范围雨雪天气,西北地区东部至江南等地将出现大范围雨雪天气",cover:1,abs: 1});
}

function testtip2(){
    $TipCase({msg:"Download Timeout !",cover:1});
}

function testtip3(){
    let shtxt="呵呵，我现在的神智，仅仅只是一缕残魂，封印千年，已是极限，若非心中执念尚存，或许早便是迷失在了那异魔气的侵蚀之下。银光人影笑了笑，声音之中倒是异常的洒脱，想来能够从那种侵蚀状态中脱离出来，已是让得他极为的满足。不管怎样，我都是死去千年之人，如今能够恢复神智，即便只是短暂的霎那，已是心满意足，何必再奢想什么"
    show_detail(shtxt+shtxt+shtxt+shtxt+shtxt+shtxt+shtxt, 1);
}

/**----------------------- common utils -----------------------**/
function $A(a, b){(b?b:document.body).appendChild(a);}
function $B(a, b){b.parentNode.insertBefore(a, b);}
function $C(a){return document.createElement(a);}
function $Ca(a,b,c,d){let m=$C(a);if(b){$Ext(m.style,b);};if(c){for(let k in c){m.setAttribute(k,c[k]);};};if(d){m.innerHTML=d+"";};return m;}
function $G(e){return document.getElementById(e);}
function $Q(a){return document.querySelector(a);}
function $Qa(a){return document.querySelectorAll(a);}
function $R(a){a.parentNode.removeChild(a);}
function $Ava(a){return a != null && typeof(a) != 'undefined' && a!="";}
function $Null(a){return !$Ava(a);}
function $IsInt(str){let reg = new RegExp("^[1-9][0-9]*$");return reg.test(str);}
function $Ext(n,o){for(let k in o){n[k]=o[k];};return n;}
function $Exta(n,o){let p=JSON.parse(JSON.stringify(n));for(let k in o){p[k]=o[k];};return p;}
function $Selectable(b){if(b){document.body.className = document.body.className.replace(' zdis_select', '');}else{document.body.className+=' zdis_select';}}
function $StopBubble(e){if ( e && e.stopPropagation ){e.stopPropagation();}else{window.event.cancelBubble = true;}}
function $Pfx(i,l,k){let f=i+"";for(let j=f.length;j<l;j++){f=(k?k:"0")+f;} return f;}
/**
 * BoxCase
*options.suffix
*options.titleText
*options.content
*options.btns []
*options.btn*Fun(content,holder) *: 1,2,3...
*options.headColor
*options.btn*Class *: 1,2,3...
*options.closed
*
**/
function $BoxCase(options){
    let allholder, backLayer, mboxtit, mboxclr, tittxt, mboxbod, mbox_fter;
    let holder=$G("zbox" + options.suffix);
    if ($Null(holder)) {
        allholder=$Ca("div",{"zIndex":"9999"},{"id":"zbox_allhd" + options.suffix,"class":"zbox_allhd"});
        backLayer=$Ca("div",0,{"id":"zbox_blyer" + options.suffix,"class":"zbox_blyer"});
        let bmain=$Ca("div",0,{"id":"zbox_main" + options.suffix,"class":"zbox_main"});
        let bsub=$Ca("div",0,{"id":"zbox_sub" + options.suffix,"class":"zbox_sub"});
        holder=$Ca("div",0,{"id":"zbox" + options.suffix,"class":"zbox"});
        mboxtit=$Ca("div",0,{"id":"zbox_header","class":"zbox_header"});
        mboxclr=$Ca("a",0,{"id":"zbox_closer","class":"zbox_closer"},"&times;");
        tittxt=$Ca("span",0,{"id":"zbox_tit"});
        mboxbod=$Ca("div",0,{"id":"zbox_body","class":"zbox_body"});
        mbox_fter=$Ca("div",0,{"id":"zbox_footer","class":"zbox_footer"});

        $A(allholder);$A(backLayer, allholder);    $A(holder, bsub);$A(bsub, bmain);$A(bmain, allholder);
        $A(mboxtit, holder);$A(mboxbod, holder);$A(mbox_fter, holder);$A(mboxclr, mboxtit);$A(tittxt, mboxtit);
        let btnHdShow = false;
        let blen=0;
        if(options.btns&&(blen=options.btns.length)>0){
            for(let i=0;i<blen;i++){
                let itm = options.btns[i];
                let btni = i+1;
                let btn=$Ca("a",0,{"id":"zbox_btn"+btni,"class":"zbtn"},itm);
                if(i==0)btn.className="zbtn zbtn-green";
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
        let ahdid="zbox_allhd" + options.suffix;
        allholder = $G(ahdid);
        backLayer = $G("zbox_blyer" + options.suffix);
        mboxtit = $Q(ahdid+" #zbox_header");
        mboxclr = $Q(ahdid+" #zbox_closer");
        tittxt = $Q(ahdid+" #zbox_tit");
        mboxbod = $Q(ahdid+" #zbox_body");
    }
    if(options.maxWidth) {
        holder.style.maxWidth = options.maxWidth+"";
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
    let allholder=$G("zbox_allhd" + suffix);
    allholder.style.display = "none";
    allholder.outerHTML = "";

}
function $AlertCase(msg) {
    $BoxCase({
        suffix : "_alertCase",
        headColor : "#f5f5f5",
        maxWidth: "19rem",
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
        maxWidth: "20rem",
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
*option{code:, msg:, period:, closed:, cover:, abs: }
*/
function $TipCase(option){
    if(!option.code)option.code="";
    let tpidx=window.$TipCaseIndex||0;
    let eid=option.code+"_"+(++tpidx);
    window.$TipCaseIndex=tpidx;
    let allholder=$Ca("div",{"zIndex":"99999"},{"id":"tipcase_ah" + eid,"class":"zbox_allhd"});
    let bmain=$Ca("div",0,{"id":"tipcase_main"+eid,"class":"zbox_main"});
    let bsub=$Ca("div",0,{"id":"tipcase_sub"+eid,"class":"zbox_sub"});
    let mctt,ztbox,mcov;
    ztbox=$Ca("a",{"display":"block","color":"#fff","backgroundColor":"#222","padding":"0.6rem 1rem 0.6rem 1rem","borderRadius":"4px"},{"id":"ztbox"+eid,"class":"ztbox"});
    mctt=$Ca("div",{"position":"relative","display":"inline-block","zIndex":"99999","maxWidth":"20rem","width":"100%"},{"id":"mctt"+eid});
    mctt.onclick =function(e){$StopBubble(e);}
    if(option.cover){
        mcov=$Ca("div",{"zIndex":"99999","display":"block","height":"100%","backgroundColor":"#fafafa","left":0,"top":0,"opacity":0.7},
            {"id":"mcov"+eid,"class":"tipcase_bkLayer"});
        $A(mcov,allholder);
    }

    if (option.msg) {
        if("string"==typeof(option.msg)){
            ztbox.innerHTML = option.msg;
        }else{
            ztbox.appendChild(option.msg);
        }
    }
    $A(ztbox,mctt);$A(mctt, bsub);$A(bsub,bmain);$A(bmain,allholder);$A(allholder);
    allholder.style.display="block";
    if($Null(option.period))option.period=1500;
    let cls=function(){allholder.outerHTML="";if(option.closed)option.closed(eid);};
    if(!option.abs)window.setTimeout(cls,option.period);
    else bmain.onclick=cls;
    return allholder;
}

function show_detail(dtl, ibg){
  let dh, dw;
  switch(ibg){case 1:dh="18rem";dw="32rem";break;case 2:dh="20rem";dw="36rem";break;case 3:dh="22rem";dw="40rem";break;case 4:dh="24rem";dw="44rem";break;default:dh="12rem";dw="18rem";}
  let txa=$Ca("textarea", {"resize":"none","width":"100%","height":dh,"border":"0px solid #555","backgroundColor":"black","color":"#ddd","padding":"0px"}, {"id":"show_detail_textarea","disabled":1});
  txa.value=dtl;
  let theff=(navigator.userAgent.toLowerCase().indexOf("firefox")>-1);
  if(!theff)txa.style.marginBottom="-5px";
  $TipCase({msg:txa, cover:1, abs:1});
  txa.parentNode.style.padding="1px";
  if(ibg)txa.parentNode.parentNode.style.maxWidth=dw;
}

function $Mcss(){
    $A($Ca("style",0,{type:"text/css"},`
        .zbtn {
            text-decoration: none;
            display: inline-block;
            padding: 0.25rem 0.75rem;
            margin-bottom: 0;
            font-size: 0.9rem;
            line-height: 1.25rem;
            color: #555;
            text-align: center;
            text-decoration:none;
            float:none;
            text-shadow: 0 1px 1px rgba(200,200,200,0.3);
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
            box-shadow: inset 0 1px 0 rgba(255,255,255,0.3),0 1px 2px rgba(0,0,0,0.2);
            font-family:Microsoft Yahei,Heiti,arial,helvetica,sans-serif,SimHei;
            user-select:none;
        }
        .zbtn:hover {
            -moz-opacity:0.7;
            -khtml-opacity:0.7;
            opacity:0.7;
        }
        .zbtn-large {
            padding: 0.7rem 1.2rem;
            font-size: 1.1em;
            border-radius: 6px;
        }
        .zbtn-mini {
            padding: 0.2rem 0.4;
            font-size: 0.7em;
            border-radius: 3px;
        }
        .zbtn-green {
            color: #fff;
            background-color: #5bb75b;
            background-image: linear-gradient(to bottom,#62c462,#51a351);
            background-repeat: repeat-x;
            border-color: #51a351 #51a351 #387038;
            border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
			text-shadow: 0 1px 1px rgba(0,0,0,0.7);
        }
        .zbtn-blue {
            color: #fff;
            background-color: #006dcc;
            background-image: linear-gradient(to bottom,#08c,#04c);
            background-repeat: repeat-x;
            border-color: #04c #04c #002a80;
            border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
			text-shadow: 0 1px 1px rgba(0,0,0,0.7);
        }
        .zbtn-lightBlue {
            color: #fff;
            background-color: #49afcd;
            background-image: linear-gradient(to bottom,#5bc0de,#2f96b4);
            background-repeat: repeat-x;
            border-color: #2f96b4 #2f96b4 #1f6377;
            border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
			text-shadow: 0 1px 1px rgba(0,0,0,0.7);
        }
        .zbtn-orange {
            color: #fff;
            background-color: #faa732;
            background-image: linear-gradient(to bottom,#fbb450,#f89406);
            background-repeat: repeat-x;
            border-color: #f89406 #f89406 #ad6704;
            border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
			text-shadow: 0 1px 1px rgba(0,0,0,0.7);
        }
        .zbtn-red {
            color: #fff;
            background-color: #da4f49;
            background-image: linear-gradient(to bottom,#ee5f5b,#bd362f);
            background-repeat: repeat-x;
            border-color: #bd362f #bd362f #802420;
            border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
			text-shadow: 0 1px 1px rgba(0,0,0,0.7);
        }
        .zbtn-black {
            color: #fff;
            background-color: #363636;
            background-image: linear-gradient(to bottom,#444,#222);
            background-repeat: repeat-x;
            border-color: #222 #222 #000;
            border-color: rgba(0,0,0,0.1) rgba(0,0,0,0.1) rgba(0,0,0,0.25);
			text-shadow: 0 1px 1px rgba(0,0,0,0.7);
        }
        .zipt {
            display: inline-block;
            height: 1.25rem;
            padding: 0.25rem 0.4rem;
            margin-bottom: 0.6rem;
            font-size: 0.8em;
            line-height: 1.25rem;
            color: #555;
            vertical-align: middle;
            border-radius: 4px;
            background-color: #fff;
            border: 1px solid #ccc;
            box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
            transition: border linear .2s,box-shadow linear .2s;
        }
        .zipt:focus {
            border-color: rgba(82,168,236,0.8);
            outline: 0;
            outline: thin dotted 9;
            box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(82,168,236,0.6);
        }
        .zbox_allhd {
            position:fixed;
            top:0;
            left:0;
            width:100%;
            height:100%;
            display: table;
            vertical-align: middle;
            text-align: center;

        }
        .zbox_blyer {
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
        .zbox_main {
            display: table;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
        }
        .zbox_sub {
            display: table-cell;
            vertical-align: middle;
            text-align: center;
            box-sizing: content-box;
        }
        .zbox {
            display:inline-block;
            position:relative;
            width: 90%;
            max-width: 40rem;
            font-family:Microsoft Yahei,Heiti,arial,helvetica,sans-serif,SimHei;
            background-color: #fff;
            border-radius: 6px;
            outline: 0;
            border: 1px solid rgba(255,255,255,0.9);
            background-clip: padding-box;
            box-sizing: content-box;
            box-shadow: 0 0 13px rgb(0,0,0,0.3);
        }
        .zbox_header {
            padding:0.5rem;
            background-color: #efefef;
            border-bottom: 1px solid #ddd;
            border-top-left-radius:5px;
            border-top-right-radius:5px;
            min-height:1.25rem;
            cursor:pointer;
            user-select:none;
            text-align: left;
        }
        .zbox_header #zbox_tit{
            margin: 0;
            line-height: 1.25rem;
            overflow:hidden;
            cursor:pointer;
            font-size:0.85em;
            font-family:Microsoft YaHei,SimHei;
            color:#fff;
            text-shadow: 0px 0px 1px #686868, 0px 1px 1px #ccc, 0px 2px 1px #d6d6d6, 0px 3px 1px #ddd, 0px 3px 3px #c5c5c5;
        }
        .zbox_closer {
            display:inline-block;
            float:right;
            line-height:1.25rem;
            text-align:center;
            text-decoration:none;
            font-weight:bold;
            font-size: 1.1rem;
            color:#eee;
            opacity:0.8;
            text-shadow: 0px 0px 1px #686868, 0px 1px 1px #ccc, 0px 2px 1px #d6d6d6, 0px 3px 1px #ddd, 0px 3px 3px #c5c5c5;
        }
        .zbox_closer:hover {
            color:#FF4D41;
            opacity:1;
        }
        .zbox_body{
            padding:1.25rem 0.7rem 1.25rem 0.7rem;
            overflow:auto;
        }
        .zbox_footer{
            padding:0.25rem;
            margin-bottom: 0;
            text-align: center;
            background-color: #f5f5f5;
            border-top: 1px solid #ddd;
            border-radius: 0 0 6px 6px;
            box-shadow: inset 0 1px 0 #fff;
            min-height:1.25rem;
        }
        .zbox_footer>a{
            margin-left:0.3rem;
            margin-right:0.3rem;
        }
        .ztbox{
            text-decoration:none;
            display:inline-block;
            padding:0.25rem 1rem;
            margin-bottom:0;
            font-size: 0.9em;
            line-height:1.25rem;
            color:#fff;
            text-align:center;
            vertical-align:middle;
            background:#000;
            border-radius:3px;
            font-family:Microsoft Yahei,Heiti,arial,helvetica,sans-serif,SimHei;
            border: 1px solid rgba(170,170,170,0.7);
            box-shadow: 0 0 0.8rem rgb(0,0,0,0.7);
        }
        .zdis_select{
            user-select: none;
        }

    `),document.head);

}
