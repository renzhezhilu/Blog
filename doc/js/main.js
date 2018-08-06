$(document).ready(function(){

	//代码高亮插件
	var options = {};$( '.codebox' ).syntaxy( options );
	
	
	//瀑布流
	$('.conten_con').masonry({
	  itemSelector: '.gridtable',
	  columnWidth: 20
	});
	//代码pre
	$('.codediv').masonry({
	  itemSelector: '.codebox_div',
	  columnWidth: 10
	});



});
//导航
document.writeln("<div class=\"topnav\">");
document.writeln("	<a href=\"javascript_page.html\">javascript速查表</a>");
document.writeln("	<a href=\"jQuery_page.html\">jQuery速查表</a>");
document.writeln("	<a href=\"html5_page.html\">html5速查表</a>");
document.writeln("	<a href=\"css3_page.html\">css3速查表</a>");
document.writeln("	<a href=\"php_page.html\">php速查表</a>");
document.writeln("</div>");
