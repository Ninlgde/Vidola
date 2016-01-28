/**
 * Date: 16/1/11.
 * Author: Ninlgde.
 * Company: Copyright (c) 2015 Ninlgde co.,Ltd. All right reserved.
 */

var LifeLayer = cc.Layer.extend({
    sprite:null,
    _truns:10,
    _cur_turns:0,
    _life_data:[
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var mainscene = ccs.load(res.life_json);
        this.addChild(mainscene.node);

        this._initBtn(mainscene.node);

        this.panel_btn = ccui.helper.seekWidgetByName(mainscene.node, "panel_btn");
        this.panel_sprite = ccui.helper.seekWidgetByName(mainscene.node, "panel_sprite");
        this._input_turn = ccui.helper.seekWidgetByName(mainscene.node, '_input_turn');

        this._buildSprite();

        return true;
    },

    _initBtn: function(root) {
        var _btn_start = ccui.helper.seekWidgetByName(root, "_btn_start");
        _btn_start.addTouchEventListener(this.onTouchEvent, this);
        var _btn_life = ccui.helper.seekWidgetByName(root, "_btn_life");
        _btn_life.addTouchEventListener(this.onLifeBtnTouch, this);
        var _btn_clean = ccui.helper.seekWidgetByName(root, "_btn_clean");
        _btn_clean.addTouchEventListener(this.onCleanBtnTouch, this);
    },

    _buildSprite:function() {
        var posY = 16;
        for(var i = 0; i < 20; i++) {
            var posX = 16;
            for(var j = 0; j < 20; j++) {
                var sprite = new ccui.ImageView(res.life_sprite_png,'');
                sprite.setContentSize(cc.size(32, 32));
                sprite.setPosition(cc.p(posX, posY));
                this.panel_sprite.addChild(sprite);
                sprite.setName('sprite,'+j+','+i);
                posX += 32;
            }
            posY += 32;
        }
    },

    _inSameSprite:function(pos1, pos2) {
        var x1, y1, x2, y2;
        x1 = parseInt(pos1.x / 32);
        y1 = parseInt(pos1.y / 32);
        x2 = parseInt(pos2.x / 32);
        y2 = parseInt(pos2.y / 32);
        return x1 == x2 && y1 == y2;
    },

    _display: function() {
        for(var i = 0; i < 20; i++) {
            for(var j = 0; j < 20; j++) {
                var sprite_name ="sprite," + j +',' +i;
                var sprite = ccui.helper.seekWidgetByName(this.panel_sprite, sprite_name);
                if (this._life_data[j][i] == 1) {
                    sprite.setColor(cc.color(0,255,0));
                } else {
                    sprite.setColor(cc.color(255,255,255));
                }
            }
        }
    },

    /**
     * 计算一个新的表格，然后替换。计算规则如下：
     * 1． 如果一个细胞周围有3个细胞为生（一个细胞周围共有8个细胞），则该细胞为生（即该细胞若原先为死，则转为生，若原先为生，则保持不变）；
     * 2． 如果一个细胞周围有2个细胞为生，则该细胞的生死状态保持不变；
     * 3． 在其它情况下，该细胞为死（即该细胞若原先为生，则转为死，若原先为死，则保持不变）。
     * @private
     */
    _calculateStep:function() {
        var next = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        for(var i = 0; i < 20; i++) {
            for(var j = 0; j < 20; j++) {
                var alives = this._getAliveCount(j, i);
                if (alives == 3) { // 情况1
                    next[j][i] = 1;
                } else if (alives == 2){ // 情况2
                    next[j][i] = this._life_data[j][i];
                } else { // 情况3
                    next[j][i] = 0;
                }
            }
        }

        this._life_data = next; // 用一轮之后的代替老的
    },

    /**
     * 获取点(x,y)周围8个点的生存情况
     * @param x
     * @param y
     * @returns {number} 活着的个数
     * @private
     */
    _getAliveCount:function (x, y) {
        var t, b, l, r, tl, tr, bl, br; // 注意 数据结构里 和 表现上是上下反着的。
        t = y + 1 > 19 ? 0 : this._life_data[x][y+1];
        b = y - 1 < 0 ? 0 : this._life_data[x][y-1];
        l = x - 1 < 0 ? 0 : this._life_data[x-1][y];
        r = x + 1 > 19 ? 0 : this._life_data[x+1][y];
        tl = y + 1 > 19 || x - 1 < 0 ? 0 : this._life_data[x-1][y+1];
        tr = y + 1 > 19 || x + 1 > 19 ? 0 : this._life_data[x+1][y+1];
        bl = y - 1 < 0 || x - 1 < 0 ? 0 : this._life_data[x-1][y-1];
        br = y - 1 < 0 || x + 1 > 19 ? 0 : this._life_data[x+1][y-1];
        return (t + b + l + r + tl + tr + bl + br); // 返回个数
    },

    _cleanData:function() {
        this._life_data = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    },

    onBeginLifeGame:function (dt) {
        this._cur_turns += 1;
        this._calculateStep();
        this._display();
        console.log(this._cur_turns);

        if (this._cur_turns >= this._truns) {
            this._cur_turns = 0;
            this.unschedule(this.onBeginLifeGame);
        }
    },

    onLifeBtnTouch: function(sender, type) {
        var posTouch, posBtn, posInBtn, x, y, sprite_name, sprite, posTouchBegin, posInBtnTouchBegin;
        posBtn = sender.getPosition();
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                break;

            case ccui.Widget.TOUCH_MOVED:
                posTouch = sender.getTouchMovePosition();
                posInBtn = cc.p(posTouch.x - posBtn.x, posTouch.y - posBtn.y);
                x = parseInt(posInBtn.x / 32);
                y = parseInt(posInBtn.y / 32);
                sprite_name ="sprite," + x +',' +y;
                sprite = ccui.helper.seekWidgetByName(this.panel_sprite, sprite_name);
                if (this._life_data[x][y] == 0) {
                    sprite.setColor(cc.color(0,255,0));
                    this._life_data[x][y] = 1;
                }
                break;

            case ccui.Widget.TOUCH_ENDED:
                console.log('end name:' + sender.getName());
                posTouch = sender.getTouchEndPosition();
                posInBtn = cc.p(posTouch.x - posBtn.x, posTouch.y - posBtn.y);
                posTouchBegin = sender.getTouchBeganPosition();
                posInBtnTouchBegin = cc.p(posTouchBegin.x - posBtn.x, posTouchBegin.y - posBtn.y);
                x = parseInt(posInBtn.x / 32);
                y = parseInt(posInBtn.y / 32);
                sprite_name ="sprite," + x +',' +y;
                sprite = ccui.helper.seekWidgetByName(this.panel_sprite, sprite_name);
                if (this._life_data[x][y] == 0) {
                    sprite.setColor(cc.color(0,255,0));
                    this._life_data[x][y] = 1;
                } else if (this._inSameSprite(posInBtn, posInBtnTouchBegin)){
                    sprite.setColor(cc.color(255,255,255));
                    this._life_data[x][y] = 0;
                }
                break;

            case ccui.Widget.TOUCH_CANCELED:
                //this._topDisplayText.setString("Touch Cancelled");
                break;

            default:
                break;
        }
    },

    onCleanBtnTouch:function(sender, type) {
        switch (type) {
            case ccui.Widget.TOUCH_BEGAN:
                //this._topDisplayText.setString("Touch Down");
                break;

            case ccui.Widget.TOUCH_MOVED:
                //this._topDisplayText.setString("Touch Move");
                break;

            case ccui.Widget.TOUCH_ENDED:
                this._cleanData();
                this._display();
                break;

            case ccui.Widget.TOUCH_CANCELED:
                //this._topDisplayText.setString("Touch Cancelled");
                break;

            default:
                break;
        }
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
                //this.onPushSceneTran();
                this._truns = this._input_turn.getString() ? parseInt(this._input_turn.getString()) : 10;
                console.log('开始计算:' + this._truns);
                var pos = sender.getTouchEndPosition();
                //console.log(JSON.stringify(pos));
                //console.log(JSON.stringify(this._life_data));
                this.schedule(this.onBeginLifeGame, 1);
                break;

            case ccui.Widget.TOUCH_CANCELED:
                //this._topDisplayText.setString("Touch Cancelled");
                break;

            default:
                break;
        }
    }
});

var LifeScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new LifeLayer();
        this.addChild(layer);
    }
});