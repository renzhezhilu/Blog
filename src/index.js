$(document).ready(function(){
	//大菜单
	$(".mune .nav_con h2").click(function(){
		var ss = $(this).next("ul.on").length;//判断状态
		//子菜单没打开
		if (ss==0) {

	    	$(this).next("ul").toggleClass("on");
		    $(this).find(".folder_icon").addClass("folder_icon_on");
		    $(this).find(".folder_icon div").addClass("on");
	    }
	    //子菜单已经打开
	    else {
	    	$(this).next("ul").toggleClass("on");
		    $(this).find(".folder_icon").removeClass("folder_icon_on");
		    $(this).find(".folder_icon div").removeClass("on");
	    }  
	});

	//小菜单
	$(".mune .nav_con ul li").hover(function(){
	    $(this).addClass("on");
	    $(this).find(".arrow_icon").addClass("arrow_icon_on");
	    $(this).find(".loadpic").addClass("loadpic_on");
	    var loadsrc = $(this).find(".loadpic img").attr("loadsrc");
	    $(this).find(".loadpic img").attr("src",loadsrc);
	},function(){
	    $(this).removeClass("on");
	    $(this).find(".arrow_icon").removeClass("arrow_icon_on");
	    $(this).find(".loadpic").removeClass("loadpic_on");
	});

	//demopage宽度适应
	function demopage_mov(){
		var win_w = $(window).width();
		var dempage_w = win_w - ($("#mune").outerWidth() + $("#content").outerWidth());
		$("#demopage").width(dempage_w);
	}
	demopage_mov();
	$(window).resize(function() {demopage_mov();});

	//按钮点击
	var iframe_width = $("#demopage iframe").width();
	$("#iframe_width_p span").html(iframe_width);
	
	$("#mac_but").click(function(){
		$("#demopage iframe").width("90%").height("90%").show(0,function(){
			$("#iframe_width_p span").text(iframe_width);
		});
		
	});
	$("#ipad_but").click(function(){
		
		$("#demopage iframe").width("1024px").height("768px").show(0,function(){
			$("#iframe_width_p span").text("1024");
		});
	
		
	});
	$("#iphone_but").click(function(){
		
		$("#demopage iframe").width("375px").height("712px").show(0,function(){
			$("#iframe_width_p span").text("375");
		});
		
	});

	//滚动条插件
	$('#mune').overlayScrollbars({
	  className:"os-theme-dark"
	}); 
	// $('#content').overlayScrollbars({
	//   className:"os-theme-dark"
	// });

	//二维码生成
	var pageallurl =window.location.href;
	jQuery('#QRcode_con div').qrcode(pageallurl);
	$("#QRcode_con .p1").html(pageallurl);
	$("#QRcode_but").click(function() {
		$("#QRcode_con").toggle(100);
	});

   
});

//加载文章页
var pageid = window.location.search;//获取地址
var mulu = "page/"
if (!pageid=="") {
	var pageid2 =pageid.substring(1);//截掉问号
	
	$("#content").load(mulu+pageid2,function(){
		//加载后滚动条插件初始化
		$('#content').overlayScrollbars({className:"os-theme-dark"});
		//demo地址
		var demourl = $(this).find("h1").attr("demourl");
		$("#demoiframe").attr("src",demourl);
		//pre加强
		var precode= $("#content pre").html();//获取代码字符串
		$("#content pre").html("");//清空容器
		var precode_good = (precode.replace(/</g, '&lt;'));//替换 < > 字符 &lt; &gt;
		$("#content pre").html(precode_good);//输出
		$('#content pre').overlayScrollbars({
		  className:"os-theme-dark"
		});
		$("#content pre").attr("style"," font-size:12px; line-height: 18px; display:block; word-break:break-all;width: auto; max-height: 500px; padding:10px 10px; overflow: auto; background-color: #cbced0;")
	});
}
else {
	//home
	$("#content").load("README.md",function(){});
}





