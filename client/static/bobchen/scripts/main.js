require.config({
    urlArgs: "bust=" + (new Date()).getTime(),
    baseUrl: 'http://localhost:1088/bobchen/scripts/',
    paths: {
        jquery 		: 'lib/jquery-1.12.4.min',
        pjax        : 'lib/jquery.pjax',
        nprogress   : 'lib/nprogress',
        // 自有方法
        bobchen     : 'bobchen',
        dialog       : 'm.y.akashi.dialog',
        support      : 'm.y.akashi.support',

    },
	// shim: {
	// 	// base64code : {exports:'base64code'}
		// pjax : {
            // deps:['jquery'],
            // exports:'pjax'
        // },
	// }
});
//主函数入口
require(['jquery','nprogress','support','pjax'], function (jquery,nprogress,sup) {
    nprogress.start();

    $(document).ready(function () {

        // sup.setTid();

        // var pathname = sup.pathname();
        var pathname = "";
        

        if(pathname.indexOf("works")>=0||pathname.indexOf("news")>=0||pathname=='') {
            pathname = 'bobchen';
        }
        if(pathname.indexOf("about")>=0||pathname=='') {
            pathname = 'about';
        }
        if(pathname=='index.php'){
            pathname = 'bobchen';
        }

        
        require([pathname], function (block) {
            if (block && block.init) { block.init() };
        });
        

    });
});
