/*
	Author:Huihong
	Email:ihong@outlook.com
 */ 
// 首页
define(["jquery",'nprogress','dialog'], function($,nprogress,dialog) {
  var $doc = $(document);
  var $win = $(window);
  var $pager = $(".pager");
  var $bobchenFlow = $("#bobchenFlow");
  var is_load = true;
  var p = 1;
  var hasTouch = 'ontouchstart' in window;
  var START_EV = hasTouch ? 'touchend' : 'mousedown';



  return {
    init:function(){

      var self = this;
      nprogress.done();
      $('.footer').css({'opacity':'1','filter': 'alpha(opacity=1)'});

      dialog.init();

      $(".navbar>ul>li").hover(function(e){
        $sib = $(this).siblings('li')
        $sib.find('.subnav').stop().animate({"width":0},600);
        var w = $(this).children('.subnav').find('div').width();
        if($(this).children('.subnav').find('a').length>0) $(this).find('.subnav').stop().animate({"width":w+30},600);;
        e.stopPropagation();
        return false;
      },function(e){
        $sib = $(this).siblings('li')
        $(this).children('.subnav').stop().animate({"width":0},600);
        e.stopPropagation();
        return false;
      });
      $(".navbar>ul>li>.subnav>div>a").hover(function(e){
        $(this).addClass('cur');
        $(this).siblings('a').removeClass('cur');
      })

      $(document).on(START_EV,".btn-more",function(){
        $('.next-albums').hide()
        $(".albums-box").show()
        dialog.albumsReset(0,0)
      })

      $(".navbar>ul>li>a").on(START_EV,function(){
        $(this).parent().toggleClass('open')
        $(this).parent().siblings('li').removeClass('open')
      })


      $doc.on(START_EV,".navbar-toggle",function(){
        $(this).toggleClass('open');
        $('.navbar').toggleClass('open');
        $('.navbar-mask').toggleClass('show');
        return false;
      });
      $doc.on(START_EV,".navbar-mask",function(e){
       $('.navbar-toggle').removeClass('show');
       $('.navbar').removeClass('open');
       $('.navbar-mask').removeClass('open');
       $('.navbar-mask').removeClass('show').off(START_EV);
       return false;
     });
      if($("#bobchenDialog:visible").length){
        $('body').css({'overflow':'hidden'});
      }
    }, scrollInit:function(){
      is_load = true;

      this.loader('hide');$(".navbar.open").removeClass('open');
      $(".navbar-mask.show").removeClass('show');
      $(".navbar-toggle.open").removeClass('open');
    }
  }
})

