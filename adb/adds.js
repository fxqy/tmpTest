var uls=[
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
	var aps = $Q("div,a,img,iframe,script,canvas");
	//var aps = $Q("*");
	if(aps.length>0){
		for(var i=0;i<aps.length;i++){
			var itm = aps[i];
			var ptm = itm.parentNode;
			var dsrc = itm.getAttribute("data-src");
			var atr=window.getComputedStyle(itm)||{};
			var bkg = atr.backgroundImage+"";
			var tsfm0=atr["transform"]+"";
			var tsfm1=atr["-webkit-transform"]+"";
			var tsfm2=atr["animation"]+"";
			var tsfm3=atr["-webkit-animation"]+"";
			for(var j=0;j<uls.length;j++){
				var itn =  uls[j];
				if(itm.href&&itm.href.indexOf(itn)>-1){
					itm.href=" ";
					itm.style.display="none";
					alert("href: "+itm.href);
					break;
				}
				if(itm.src&&itm.src.indexOf(itn)>-1){
					itm.src=" ";
					itm.style.display="none";
					alert("src: "+itm.src);
					break;
				}				
				if(dsrc){
					itm.setAttribute("data-src","0");
					itm.style.display="none";
					break;
				}
				if(bkg.indexOf(itn)>-1){
					itm.style.backgroundImage="url(./null.jpg)";
					itm.style.display="none";
					alert("bkg: "+bkg);
					break;
				}
				if((tsfm0.length>1||tsfm1.length>1||tsfm2.length>1||tsfm3.length>1){
					itm.style.backgroundImage="url(./null.jpg)";
					itm.src=" ";
					itm.style.display="none";
					alert("bkg: "+tsfm0+", "+tsfm1+", "+tsfm2+", "+tsfm3);
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
	window.setTimeout(function(){
		try{
			doFilter();
		}catch(e){
			alert(e.message);  
		}
	},1000);
}