function notNull(str){
    if(str==null||typeof str == "undefined"||str==""){
        return false;
    }
    return true;
}
function isNull(str){
    return !notNull(str);
}

function noNull(str) {
    if (isNull(str)) {
        return "";
    }
    return str;
}


/**
 * 输入提示框
 * init()方法  参数
 * options.target 			目标input text
 * options.minHeight 		最小高度
 * options.maxHeight		最大高度
 * options.height			高度
 * fill()方法  参数
 * datas 字符串数组["",...]
 */
function SelectTree(options) {
    if (undefined == options.height || !options.height){
        this.height = 250;
	}else{this.height = options.height;}
    var thiz = this;
    this.target = options.target;
    this.onTargetShow = options.onTargetShow;
    this.onTargetHide = options.onTargetHide;
    if (!this.target) alert("no target!");
    this.targetWidth = this.target.outerWidth()-1;
    this.targetHeight = this.target.outerHeight();
    this.targetOffset = this.target.offset();
    var suggBox = $("<div>");
    this.boxHolder = suggBox;
    this.boxHolder.css({
        position: 'absolute',
        background: '#fefefe',
        display: 'none',
        'border-radius': '5px',
        border: '1px solid #ddd',
        'z-index':'9999999',
        width : this.targetWidth+"px",
        left : this.targetOffset.left,
        top : this.targetOffset.top + this.targetHeight,
        overflow : "hidden"
    });
    this.boxHeader=$("<div>");
    this.boxHeader.css({
        display:'none',
        padding: '2px',
        width : this.targetWidth+"px",
        height: "30px"
    });
    suggBox.append(this.boxHeader);
    this.boxBody=$("<div>");
    this.boxBody.css({
        width : this.targetWidth+"px",
        height : this.height,
        overflow : "auto"
    });
    suggBox.append(this.boxBody);
    this.boxFooter=$("<div>");
    this.boxFooter.css({
        display:'none',
        padding: '2px',
        width : this.targetWidth+"px",
        height: "30px"
    });
    suggBox.append(this.boxFooter);
    $(document.body).append(this.boxHolder);
    this.target.click(function() {
        if(thiz.boxHolder.is(':hidden')){
            thiz.show();
			thiz.locate();
        }else{
            thiz.close();
        }
    });
    this.target.mouseover(function() {
        thiz.tarOver = true;
    });
    this.target.mouseout(function() {
        thiz.tarOver = false;
    });
    this.boxHolder.mouseover(function() {
        thiz.msOver = true;
    });
    this.boxHolder.mouseout(function() {
        thiz.msOver = false;
    });
    $(document).click(function(){
        if (!thiz.msOver&&!thiz.tarOver) {
            thiz.close();
        }
    });
    $(window).resize(function() {
        thiz.locate();
    });
    $(document).scroll(function() {
        thiz.locate();
    });
}
SelectTree.prototype.show = function(){
    this.boxHolder.show();
    this.locate();
    if (this.onTargetShow) this.onTargetShow(this);
}
SelectTree.prototype.close = function(){
    this.boxHolder.fadeOut("fast");
    if (this.onTargetHide) this.onTargetHide(this);
}
SelectTree.prototype.fill = function(zNodes, ditm, isQuery, isMultiple,okBtn,clearBtn,chkboxType) {
    var thiz = this;
    var setting = {
        data: {
            simpleData: {
                enable: true
            }
        },
        check: {
            enable: false,
            chkStyle: "checkbox",
            radioType: "all",

        },
        chkboxType: { "Y": "ps", "N": "ps" },
        callback: {
            onClick: function(event, treeId, treeNode){
				thiz.close();
                if(isMultiple) return;
                thiz.target.val(treeNode.name);
                thiz.target.attr("data-val",treeNode.id);
                var vele=thiz.target.next("input[type=hidden]");
                vele.val(treeNode.id);
                if(vele[0]) {
                    var onchg = vele[0].onchange;
                    if (onchg) {
                        if ("function" == typeof onchg) {
                            onchg(vele[0].value);
                        }
                    }
                }
            },
            onCheck:  function(event, treeId, treeNode){
                if(!isMultiple) return;
                var treeObj = $.fn.zTree.getZTreeObj(treeId);
                var nodes = treeObj.getCheckedNodes(true);
                if(nodes.length>0) {
                    var names = [];
                    var values = [];
                    for (var i = 0; i < nodes.length; i++) {
                        var itm = nodes[i];
                        names.push(itm.name);
                        values.push(itm.id);
                    }
                    thiz.target.val(names.join(","));
                    thiz.target.next("input[type=hidden]").val(values.join(","));
                }else{
                    thiz.target.val("");
                    thiz.target.next("input[type=hidden]").val("");
                }
            }
        }

    };
    if (isMultiple) {
        setting.check.enable = isMultiple;
    }
    if (chkboxType !== undefined && chkboxType != null) {
        setting.check.chkboxType = chkboxType;
    }
    var treeid = this.target.attr('id')+'_tree';
    this.boxBody.html('<ul id="'+treeid+'" class="ztree" style="height:92%;"></ul>');
    var zTreeObj = $.fn.zTree.init($("#"+treeid), setting, zNodes);
    if(isQuery) {
        thiz.boxHeader.show();
        var qryid = this.target.attr('id')+"_fuzzyQry";
        var qry = $('<input type="text">');
        qry.attr("id",qryid);
        qry.attr("placeholder","请输入关键字");
        qry.css({
            height: '28px',
            width: this.targetWidth-6+"px",
            'border': '1px solid #ddd',
            'line-height': '17px',
            'border-radius': '4px',
        });
        this.boxHeader.append(qry);
        fuzzySearch (treeid,"#"+qryid,false,true);
    }
    if(okBtn||clearBtn) {
        var btnhd=$('<div style="padding:2px;overflow:hidden;text-align:right;"></div>');
        this.boxFooter.append(btnhd);
        if (clearBtn) {
            thiz.boxFooter.show();
            var crb = $('<a class="layui-layer-btn0" style="height:22px;line-height:22px;margin:2px 4px 0px;padding:2px 3px;text-decoration:none;cursor:pointer;border:1px solid #ddd;border-radius:3px;">清除</a>');
            btnhd.append(crb);
            crb.click(function () {
                thiz.target.val("");
                thiz.target.next("input[type=hidden]").val("");
                if(isMultiple) {
                    zTreeObj.checkAllNodes(false);
                }else{
                    zTreeObj.cancelSelectedNode();
                }
            });

        }
        if (okBtn) {
            thiz.boxFooter.show();
            var okb = $('<a class="layui-layer-btn0" style="height: 22px;line-height:22px;margin:2px 4px 0px;padding:2px 3px;text-decoration:none;cursor:pointer;border:1px solid #ddd;border-radius:3px;">确定</a>');
            btnhd.append(okb);
            okb.click(function () {
                thiz.close();
            });
        }
    }
    //节点定位
    if(!isMultiple) {
        var dval = ditm.value;
        zTreeObj.getNodesByFilter(function (cnode) {
            if (cnode.id == dval) {
                $("#" + ditm.target).val(cnode.name);
                $('#'+ditm.target).next("input[type=hidden]").val(cnode.id);
                zTreeObj.selectNode(cnode);
                return true;
            }
        }, true);
    }
    this.boxHolder.attr("id",ditm.target+"_SelectTree");
}
SelectTree.prototype.locate = function() {
    this.targetWidth = this.target.outerWidth();
    this.targetHeight = this.target.outerHeight();
    this.targetOffset = this.target.offset();
    this.pageScrollTop = $(document).scrollTop();
	var hdht=this.boxHolder.outerHeight();
	var winht=$(window).height();
	var topY=this.targetOffset.top + this.targetHeight;
	var scrY=topY+hdht-this.pageScrollTop
	if(scrY>winht){
		if(this.targetOffset.top-this.pageScrollTop>winht/2){
			topY=this.targetOffset.top-hdht;
		}
	}
    this.boxHolder.css({
        width : this.targetWidth+"px",
        left : this.targetOffset.left,
        top: topY
    });
    this.boxHeader.css({
        width : this.targetWidth+"px"
    });
    this.boxBody.css({
        width : this.targetWidth+"px"
    });
    this.boxFooter.css({
        width : this.targetWidth+"px"
    });
}

/**
 * 初始化页面中的下拉
 * @param selects [{url:"默认查询s951,设置后从此url获取树节点数据",target:'目标input text id 1',type: '下拉类型 2'},{target:'目标input text id 2',type: '下拉类型 3'},...]
 * 如：initAllPageSelect([{target:'userType',type: "D201"}]);
 * 参数：
 * {
 * target:'目标input text id',
 * type: '下拉类型'
 * url: '默认查询s951,设置后从此url获取树节点数据',
 * query: '是否模糊查询 默认值0',
 * multi: '是否多选 默认值0',
 * ok: '是否显示确定按钮 默认值0不显示',
 * clear: '是否显示清除按钮 默认值0',
 * value: '初始值，当multi=1时为逗号分隔的id值'
 * useCode: '使用code 默认值0'
 * }
 * fun(treeobj): 树下拉初始化完成后回掉方法
 */
function initAllPageSelect(selects,fun){
    var url = "/codeTree/listCodesByType";
    for(var i=0;i<selects.length;i++){
        var item = selects[i];
        getSelectDatas(url, item,fun);
    }
}

/**
 * 获取下拉数据
 * @param url
 * @param item
 * @param fun
 */
var fakeData=[{"id":"1","pid":"0","name":"类型A","code":"1","type":null,"childrenNum":null},{"id":"2","pid":"1","name":"类型A01","code":"2","type":null,"childrenNum":null},{"id":"3","pid":"1","name":"类型A02","code":"3","type":null,"childrenNum":null},{"id":"4","pid":"1","name":"类型A03","code":"4","type":null,"childrenNum":null},{"id":"5","pid":"1","name":"类型A04","code":"5","type":null,"childrenNum":null},{"id":"6","pid":"0","name":"类型B","code":"6","type":null,"childrenNum":null},{"id":"7","pid":"6","name":"类型B01","code":"7","type":null,"childrenNum":null},{"id":"8","pid":"6","name":"类型B02","code":"8","type":null,"childrenNum":null},{"id":"9","pid":"6","name":"类型B03","code":"9","type":null,"childrenNum":null},{"id":"10","pid":"6","name":"类型B04","code":"10","type":null,"childrenNum":null},{"id":"11","pid":"6","name":"类型B05","code":"11","type":null,"childrenNum":null},{"id":"12","pid":"6","name":"类型B06","code":"12","type":null,"childrenNum":null},{"id":"13","pid":"6","name":"类型B07","code":"13","type":null,"childrenNum":null},{"id":"14","pid":"6","name":"类型B08","code":"14","type":null,"childrenNum":null},{"id":"15","pid":"14","name":"类型B081","code":"39","type":null,"childrenNum":null}];
function getSelectDatas(url, item,fun){
    if(item.url)url=item.url;
    $("#"+item.target).css({
		height:'30px',
		border: '1px solid #ddd',
		'border-radius': '3px',
		'background': '#fff url(img/drop_down.jpg) no-repeat right center',
        'background-size':'30px 35px',
        cursor: 'pointer',
        'padding-right': '35px'
    });
    if(window["codeTree_"+item.type]){
        initSelectTree(window["codeTree_"+item.type],url, item,fun);
    }else{//实际应该走ajax请求,这里放假数据
		//$.post(url,{...},function(result){
			//if(result.code=='0'){
				initSelectTree(fakeData,url, item,fun);
				window["codeTree_"+item.type]=fakeData;
			//}
		//})
	}
}

/**
 * 初始化下拉树
 * @param result
 * @param url
 * @param item
 * @param fun
 */
function initSelectTree(data,url, item,fun){
    var idarr = [];
    var nmarr = [];
	removeTreeBox(item.target);
    window["codeTree_"+item.type]=data;
    var tdata = formatSelectData(data,"0",item,idarr,nmarr);
    $('#'+item.target).attr("placeholder","---请选择---");
    $('#'+item.target).val("");
    $('#'+item.target).next("input[type=hidden]").val("");
    var selecta = new SelectTree({target:$("#"+item.target),onTargetShow:function(){
            if(!item.multi) {
                var treeObj = $.fn.zTree.getZTreeObj(item.target+"_tree");
                var cval = $('#'+item.target).next("input[type=hidden]").val();
                var ival = isNull(cval)?"":cval;//?item.value
                if(notNull(ival)) {
                    treeObj.getNodesByFilter(function (cnode) {
                        if (cnode.id == ival) {
                            $("#" + item.target).val(cnode.name);
                            $('#'+item.target).next("input[type=hidden]").val(cnode.id);
                            treeObj.selectNode(cnode);
                            return true;
                        }
                    }, true);
                }
            }
            $("#"+item.target).css({
                'background': '#fff url(img/drop_up.jpg) no-repeat right center'
            });
        },onTargetHide: function(){
            $("#"+item.target).css({
                'background': '#fff url(img/drop_down.jpg) no-repeat right center'
            });
        }});
    selecta.fill(tdata,item,item.query,item.multi,item.ok,item.clear);
    if(item.multi&&nmarr.length>0) {
        $('#'+item.target).val(nmarr.join(","));
        $('#'+item.target).next("input[type=hidden]").val(idarr.join(","));
    }
    if(fun)fun($.fn.zTree.getZTreeObj(item.target+"_tree"),item.target);
}

function removeTreeBox(c){
	var a = c+"_SelectTree";
	var b = document.getElementById(a);
	if (notNull(b)){
		b.parentNode.removeChild(b);
	}
}

/**
 *  格式化下拉数据
 * @param pdata
 * @returns json
 */
function formatSelectData(pdata,pid,item,idarr,nmarr){
    if(!pdata||pdata.length<1)return;
    var varr = [];
    var mbol = item.multi;
    if(mbol&&item.value){
        varr = item.value.split(",");
    }
    var arr=[];
    for(var i = 0; i < pdata.length; i++) {
        var pi = pdata[i];
        if(pi.pid!=pid)continue;
        var pnode = {id:pi.id,name: pi.name,code: pi.code,pid: pi.pid};
        if(item.useCode){
            var oid=pnode.id;
            pnode.id=pnode.code;
            pnode.code=oid;
        }
        var childNode = formatSelectData(pdata,pi.id,item,idarr,nmarr);
        if(childNode&&childNode.length>0){
            pnode.children=childNode;
        }
        if(mbol&&varr.length>0){
            for(var k=0;k<varr.length;k++){
                var itm = varr[k];
                if(itm==pi.id){
                    idarr.push(pi.id);
                    nmarr.push(pi.name);
                    pnode.checked=true;
                    break;
                }
            }
        }
        arr.push(pnode);
    }
    return arr;
}
