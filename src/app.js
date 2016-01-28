
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
                                      
        var mainscene = ccs.load(res.loading_json);
        this.addChild(mainscene.node);

        this.initBtn(mainscene.node);

        return true;
    },

    initBtn: function(root) {
        var _btn_start = ccui.helper.seekWidgetByName(root, "_btn_start");
        //console.log(typeof _btn_start);
        //console.log(JSON.stringify(_btn_start));
        _btn_start.addTouchEventListener(this.onTouchEvent, this);
    },

    onTouchEvent: function (sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                //this._topDisplayText.setString("Touch Down");
                break;

            case ccui.Widget.TOUCH_MOVED:
                //this._topDisplayText.setString("Touch Move");
                break;

            case ccui.Widget.TOUCH_ENDED:
                this.onPushSceneTran();
                break;

            case ccui.Widget.TOUCH_CANCELED:
                //this._topDisplayText.setString("Touch Cancelled");
                break;

            default:
                break;
        }
    },

    onClickEvent:function(sender) {
        this.onPushSceneTran(sender);
    },

    onPushSceneTran:function (sender) {
        var scene = new LifeScene();

        cc.director.pushScene(new cc.TransitionSlideInT(1, scene));
    }

});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

