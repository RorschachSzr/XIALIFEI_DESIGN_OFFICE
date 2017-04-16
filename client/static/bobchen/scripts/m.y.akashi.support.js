/*
	Author:Huihong
	Email:ihong@outlook.com
 */
define(['jquery'], function($) {
	// 扩展监听 css3动画结束
    $.fn.transitionEnd = function(callback) {
        var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
            i, j, dom = this;

        function fireCallBack(e) {
            /*jshint validthis:true */
            if (e.target !== this) return;
            callback.call(this, e);
            for (i = 0; i < events.length; i++) {
                dom.off(events[i], fireCallBack);
            }
        }
        if (callback) {
            for (i = 0; i < events.length; i++) {
                dom.on(events[i], fireCallBack);
            }
        }
        return this;
    }
    /**
     * 阻止滚动条冒泡
     */
    $.fn.extend({  
        preventScroll:function(){  
            $(this).each(function(){  
                var _this = this;  
                if(navigator.userAgent.indexOf('Firefox') >= 0){   //firefox  
                    _this.addEventListener('DOMMouseScroll',function(e){  
                        _this.scrollTop += e.detail > 0 ? 60 : -60;     
                        e.preventDefault();  
                    },false);   
                }else{  
                    _this.onmousewheel = function(e){     
                        e = e || window.event;     
                        _this.scrollTop += e.wheelDelta > 0 ? -60 : 60;     
                        return false;  
                    };  
                }  
            })    
        }  
    });  
    return {
        pathname:function(){
            // 解析网址
            var pathname = window.location.pathname;
            if(pathname.indexOf("wwwroot/")>0) {
                pathname = pathname.split("wwwroot/")[1];
            }
            pathname = pathname.split("?")[0];
            pathname = pathname.replace(/\//, "");
            pathname = pathname.replace(/\/$/, "");
            pathname = pathname.replace(/.html$/, "");
            pathname = pathname.toLowerCase();
            
            return pathname;
        },
        setTid:function(){
            var pathname = this.pathname();
            var tids = {
                'news':10,
                'works/all':1,
                'works/interior':4,
                'works/product':5,
                'works/visual':6
            }
            window.tid = tids[pathname];
        },
        /** 
         * 判断浏览器是否支持某一个CSS3属性 
         * @author huihong.me 
         */
        supportCss3: function(style) {
            var prefix = ['webkit', 'Moz', 'ms', 'o'];
            var i;
            var humpString = [];
            var htmlStyle = document.documentElement.style;
                _toHumb = function(string) {
                    return string.replace(/-(\w)/g, function($0, $1) {
                        return $1.toUpperCase();
                    });
                };

            for (i in prefix)
                humpString.push(_toHumb(prefix[i] + '-' + style));

            humpString.push(_toHumb(style));

            for (i in humpString)
                if (humpString[i] in htmlStyle) return true;

            return false;
        }
    }
});
