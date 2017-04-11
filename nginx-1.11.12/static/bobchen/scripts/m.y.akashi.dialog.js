/*
    Author:Huihong
    Email:ihong@outlook.com
 */
define(['jquery'], function($) {
    var hasTouch = 'ontouchstart' in window;
    var START_EV = hasTouch ? 'touchend' : 'click';
      return {
        opt:{
            title:'',
            html:'',
            albums:{}
        },
        init:function(){
            var dialog = this;
            this.albums();
            var startNum = -1;
            if($(document).find('.next-albums').length <= 0 || $(document).find('.next-albums').children().length <= 0){   
                startNum = 0;
            }
            if($(document).find('.next-albums').length > 0 || $(document).find('.next-albums').children().length > 0){
                $("#boochenContent").css({'width':'560px','margin-left':'-'+(560/2)+'px'})
                $(".dialog-content .read-page>section").css({'width':'440px','height':'402px'})
            }
            this.albumsReset(0,startNum);

            $(document).one(START_EV,".dialog-close,.dialog-bg,.page-dialog .right-block,.page-dialog .left-block",function(){
              dialog.close(true);
            });
            $(document).on(START_EV, '.ewm,.btm-ewm', function(event) {
                var ewm = "<div style='padding:40px;text-align:center;font-size:12px;line-height:1.6'><p style='margin-bottom:10px'><img src='http://localhost:1088/bobchen/images/ewm.svg' height='170' width='170' style='background:url(http://localhost:1088/bobchen/images/loading.gif) no-repeat center center'></p><p>关注陈飞波设计事务所微信公众号</p><p>了解我们的最新作品</p></div>"
                dialog.open(ewm)

                $(".navbar-toggle").removeClass('open');
                $('.navbar').removeClass('open');
                $('.navbar-mask').removeClass('show');
                // event.preventDefault();
                /* Act on the event */
            });
          
            // $(document).on(START_EV,".page-dialog-inner",function(e){
            //     e.stopPropagation();
            //     return false;
            // });
            // $('.page-dialog-inner').on("scroll",function(e){
            //     e.preventDefault();
            //     e.stopPropagation();
            //     return false;
            // });
            

        },
        open:function(html){
            this.init();
            $("#boochenContent").html(html);
            $("#boochenContent").addClass('ewm-dialog');
            // $('body').css('overflow','hidden');
            $(".page-dialog").fadeIn('slow');
            $(".page-dialog-cover").fadeIn('slow');
            $(".dialog-albums-prev").hide()
            // $("#boochenContent").css({'width':'560px','margin-left':'-'+(560/2)+'px'})
            // $(".dialog-content .read-page>section").css({'width':'440px','height':'402px'})
        },
        show:function(){
            this.init();
            // 禁止body滚动
            // $('body').css('overflow','hidden');
            $(".page-dialog").fadeIn('slow');
            $(".dialog-albums-prev").hide()
            $(".page-dialog-cover").fadeIn('slow');
            
        },
        close:function(historyChange){
            var is_change = historyChange;
            $(".page-dialog").fadeOut('slow');
            $(".page-dialog-cover").fadeOut('slow',function(){
                $('#boochenContent').removeAttr('style').removeClass('ewm-dialog')
            });
            // console.log($.pjax.options.oldUrl);
            // history.replaceState($.pjax.state, document.title, $.pjax.options.oldUrl);
            if(window.oldUrl != location.href && is_change){
              history.pushState({},window.oldTitle,window.oldUrl);
              window.oldUrl = undefined;
            }else if(is_change){
              history.pushState({},'首页','/');
            }
            // 解除禁止body滚动
            $('body').css('overflow','auto');
        },
        set:function(opt){
            $.extend(this.opt,opt);
        },
        albumsReset:function(ind,startNum){
            var $img = $($($('.dialog-albums li').get(ind)).find('img')[0]);
            var src = $img.attr("data-src");
            var $new = new Image();
            // var w = $img.width();
            // var h = $img.height();
            if(src==undefined) return;
            var width = $img.attr('data-width');
            var height = $img.attr('data-height');

            if(Number(width)-Number(height)>0){
                var scale = width/750;
                width = 750;
                height = height/scale;
            }else{
                var scale = height/640;
                width = width/scale;
                height = 640;
            }

            $('.dialog-albums li').hide();
            $img.parent().show();
            $img.css({'width':width,"height":height});
            $img.parent().css({'width':width});
            $img.parent().next().find('img').css({'width':width,"height":height});

            if(startNum!=-1 || $(".next-albums").length<=0){
                $("#boochenContent").css({'width':(width+120)+'px','margin-left':'-'+(width+120)/2+'px'});
            }

            $new.onload = function(){
                // var dw = $(".dialog-albums ").width();
                // var width = $img.attr('data-width');
                // var height = $img.attr('data-height');
                // if(Number(width)-Number(height)>0){
                //     var scale = width/750;
                //     width = 750;
                //     height = height/scale;
                // }else{
                //     var scale = height/640;
                //     width = width/scale;
                //     height = 640;
                // }

                // var scale =  dw/w;
                // console.log(src)
                // $('.dialog-albums').width(dw).height($img.height());
                $img.attr('src',src);
                $img.parent().css({'background':'none'});
                // $(".dialog-albums").height(.height());
            }
            $new.src = src;
        },
        albums:function(){
            var current = 0;
            var $albums = $('[data-cmd="albums"]');
            var $items = $albums.find('li');
            var count = $items.length;
            var self = this;

            $("#albumsCount").html(count);
            $("#albumsIndex").html(count==0?0:1);

            var next = function(){
                $($items.get(current)).stop().hide();
                // var startNum = -1;
                // if($(document).find('.next-albums').length <= 0 || $(document).find('.next-albums').children().length <= 0){   
                //     startNum = 0;
                // }
                if(current+1>=count){
                    self.close(true);
                }
                current = current+1>=count?0:current+1;
                // if($(document).find('.next-albums').length > 0 && $(document).find('.next-albums').children().length > 0){   
                //     if(current==-1){
                //         $(document).find('.next-albums').show()
                //         $(".albums-box").hide()
                //         current = 0;
                //         $("#boochenContent").css({'width':'560px','margin-left':'-'+(560/2)+'px'})
                //         $(".dialog-content .read-page>section").css({'width':'440px','height':'402px'})
                //         self.albumsReset(current,-1);
                //     }else{
                //         $(document).find('.next-albums').hide()
                //         $(".albums-box").show()
                //         self.albumsReset(current,0);
                //     }
                // }else{
                    self.albumsReset(current,0);
                // }


                $($items.get(current)).stop().show();
                $(".dialog-albums-prev").show()
                page();
            }

            var prev = function(){
                $($items.get(current)).stop().hide();
                current = current-1<0?count-1:current-1;
                $($items.get(current)).stop().show();
                $(".dialog-albums").height($($items.get(current)).height());
                self.albumsReset(current,0);
                page();

            }
            var page = function(){
                $("#albumsIndex").html(current+1);
            }
            $(document).off(START_EV,".dialog-albums .next").on(START_EV,".dialog-albums .next",function(){
                next();
            })
            $(document).off(START_EV,".dialog-albums-info .next").on(START_EV,'.dialog-albums-info .next',function(){
                next();
            });
            $(document).off(START_EV,".dialog-albums .prev").on(START_EV,'.dialog-albums .prev',function(){
                prev();
            });
        }
      }
});
