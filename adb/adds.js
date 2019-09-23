var uls=[
"xhhou",
"fenniao",
"shenzhouc",
"yayjd",
"jinpu5",
"apexlathe",
"klsadm",
"pstatp",
"shsb88",
"bl686",
"900788",
"fafa004",
"xintengai",
"sqkcjg",
"zsjiahe",
"erqimall",
"mmstat",
"koudaiy",
"tkshyp",
"duoketuan",
"ghosttty",
"70url",
"zhiyingwang",
"yueduyy",
"roeey",
"ltwsh",
"kua8s",
"flipf",
"imooho",
"koudai",
"zkwpr",
"hnjyrc",
"py69",
"xiwnu",
"5wei",
"baiduvip",
"yunsen",
"ae01.alicdn",
"cbu01.alicdn",
"img.alicdn",
"winfisc",
"zao86789",
"zxvsuw",
"xi0021",
"mglvqian",
"hm.baidu",
"qdhhsnz",
"zpgjz",
"lsdys",
"fccxp",
"youle55",
"dsgy521",
"youhuomeishi",
"ynjk",
"data:",
"base64",
"hbwcl",
"heygugu",
"818tu",
"how5",
"configx",
"webofxm",
"srdoudizhu",
"haizirv",
"haofengsuye",
"lkflw",
"bxlsl",
"wanmancn",
"hmcvs.cn",
"4r3z2ahp8",
"umm6.cn",
"hzblic",
"lwinl",
"wangketuan",
"xyxy",
"ysyspb",
"jdcbuy",
"cnzz.com",
"maziyou",
"laiduobao",
"haohaizi",
"qcwzx",
"jianduankm",
"lovelala",
"muduli",
"qhuade",
"ntjacb",
"lanhouhou",
"feipukeplus",
"hsq3z.com",
"huanqiucaizhi",
"hnhgw.cn",
"sufficient.cn",
"jscsd",
"wgewj",
"sysapr",
"xkhejx",
"haoxiehui",
"8000zq",
"uplusbrand",
"yuyue",
"wsf-gz",
"cdxzx-tech",
"lotusland",
"gangaotong",
"blockplus.cc",
"mengmob",
"xdzlaser",
"hbb123",
"pwrt.pw",
"juseyx",
"weiceton",
"shnhnjn",
"kuxuan.pw",
"urI6.com",
"2008612.com",
"dema1905",
"wanmancn",
"guangyaoli",
"apple.com"
];
var hostName = window.location.host;
function $Q(e){return document.querySelectorAll(e);}
function doFilter(){
	//var aps = $Q("div,a,img,iframe,script,canvas");
	var aps = $Q("*");
	if(aps.length>0){
		for(var i=0;i<aps.length;i++){
			var itm = aps[i];
			var ptm = itm.parentNode;
			var atr=window.getComputedStyle(itm)||{};
			var atr1=window.getComputedStyle(itm,":before")||{};
			var atr2=window.getComputedStyle(itm,":after")||{};
			var bkg = atr.backgroundImage+"";
			var bkg1 = atr1.backgroundImage+"";
			var bkg2 = atr2.backgroundImage+"";
			var dsrc = itm.getAttribute("data-src");
			var tsfm0=atr["transform"]+"";
			var tsfm1=atr["-webkit-transform"]+"";
			var tsfm2=atr["animation"]+"";
			var tsfm3=atr["-webkit-animation"]+"";
			if(tsfm0.indexOf("infinite")>-1||tsfm1.indexOf("infinite")>-1||tsfm2.indexOf("infinite")>-1||tsfm3.indexOf("infinite")>-1){
				//alert("transform: "+tsfm0+", -webkit-transform: "+tsfm1+", animation: "+tsfm2+", -webkit-animation: "+tsfm3);
				itm.parentNode.removeChild(itm);
				continue;
			}
			for(var j=0;j<uls.length;j++){
				var itn =  uls[j];
				if(itm.href&&itm.href.indexOf(itn)>-1){
					itm.parentNode.removeChild(itm);
					break;
				}
				if(itm.src&&itm.src.indexOf(itn)>-1){
					itm.parentNode.removeChild(itm);
					break;
				}				
				if(bkg.indexOf(itn)>-1){
					itm.parentNode.removeChild(itm);
					break;
				}
				if(bkg1.indexOf(itn)>-1){
					itm.parentNode.removeChild(itm);
					break;
				}
				if(bkg2.indexOf(itn)>-1){
					itm.parentNode.removeChild(itm);
					break;
				}
				if(dsrc&&dsrc.indexOf(itn)>-1){
					itm.parentNode.removeChild(itm);
					break;
				}

			}

		}
	}
}
function parentHide(itm,ptm){
	if((hostName.indexOf("40yb")>-1||hostName.indexOf("97kp")>-1)&&"body"!=ptm.tagName){
		itm.parentNode.style.display="none";
		var chs=ptm.childNodes;
		if(chs){
			for(var i=0;i<chs.length;i++){
				var chtm=chs[i];
				chtm.style.display="none";
			}
		}
	}
}
if(hostName.indexOf("tv6")>-1||hostName.indexOf("9zdm")>-1||hostName.indexOf("74zu")>-1||hostName.indexOf("aiaike")>-1||hostName.indexOf("micaitu")>-1||hostName.indexOf("88k")>-1||hostName.indexOf("40yb")>-1||hostName.indexOf("97kp")>-1||hostName.indexOf("60ws")>-1){
	window.setTimeout(function(){try{doFilter();}catch(e){alert(e.message);}},1000);
}