/**
 * Created with JetBrains WebStorm.
 * User: hht
 * Date: 13-12-26
 * Time: 上午11:46
 * To change this template use File | Settings | File Templates.
 */


var CMDBlockUnlock = function (){
    this.mainBox = IWIN.Options.el.mainBoxIn;
    this.elIds  = IWIN.BlockOpr.countSelectIds();
    this.util = IWIN.util;
    var item = this.util.byId(this.elIds[0]);
    item.style.opacity = 1;  // 部件处于解锁状态
    IWIN.Request.updateBlockReq(this.util.byId(this.elIds[0]));
};
CMDBlockUnlock.prototype = {
    constructor : CMDBlockUnlock,
//    undo : function (){
//        IWIN.BlockOpr.moveElsToEdit(this.elIds);
//        IWIN.Request.addBlockReq(this.elIds);
//    },
//    redo : function (){
//        IWIN.BlockOpr.moveElsToDel(this.elIds);
//        IWIN.Request.delBlockReq(this.elIds);
//    },
    destroy : function (){
        this.mainBox = null;
        this.elIds  = null;
        this.util = null;
    }
};

