
new Date() // 自动把当前日期和时间保存为其初始值 Tue Sep 18 2018 05:36:59 GMT+0800 (中国标准时间)
Date() // 字符串"Tue Sep 18 2018 05:37:47 GMT+0800 (中国标准时间)"
new Date("") //无效日期 Invalid Date
new Date(1453094034000) // Mon Jan 18 2016 13:13:54 GMT+0800 (中国标准时间)
new Date('December 17, 1995 03:24:00') //字符串转Date格式
new Date('1995-12-17T03:24:00') 
new Date(1995,11,17,3,24,0,100) //year,month,day,hour,minute,second,millisecond
new Date(1995,1,40,12,90) //超过部分自动修正 1,40->2,12(二月份只有28天) 12，90->13.30 
// Sun Mar 12 1995 13:30:00 GMT+0800 (中国标准时间)

new Date(1995,0) //注意月份要-1 //Sun Jan 01 1995 00:00:00 GMT+0800 (中国标准时间)

//日期格式 字符串格式要求比较宽松
new Date(1990-1-1 12:34:00)
new Date("1990/1/1 12:34:00")
new Date("12:34:00 1990/1/1")
new Date("1 1 1990 12:34:00")
new Date("1990 1 1 12 34 00") //Invalid Date

//日期时间->时间戳 
Date.now() //当前时间转成时间戳 1537220577631
Date.parse("1990-1-1 12:33:9:123") //秒631123200000
new Date("1990-1-1 12:33:9:123").getTime() //
+new Date("1990/3/4") //636480000000
//时间戳 ->日期时间
new Date(631123200000) //Mon Jan 01 1990 00:00:00 GMT+0800 (中国标准时间)

var d = new Date("2015-6-15 13:23:56:666")
//返回年份 4位数
d.getFullYear() //2015
//返回月份（0~11）
d.getMonth() // 5
//返回一星期中的第几天,（0~6）可以用来获取星期几
d.getDay() //第2天 1 
//返回天数（1~31）
d.getDate() //15
//返回小时 (0~23)
d.getHours()  //13
//返回分钟(0~59)
d.getMinutes() //23
//返回秒(0~59)
d.getSeconds() // 56
//返回毫秒(0~999)
d.getMilliseconds() // 666

//时差，本地时间与 GMT 时间之间的时间差，以分钟为单位
new Date().getTimezoneOffset()/60 //-480/60=-8




//获取日期是星期几
var d=new Date()
var weekday=["Sunday周日","Monday周一","Tuesday周二","Wednesday周三","Thursday周四","Friday周五","Saturday周六"]
weekday[d.getDay()]

//获取月份的天数
function monthHowDay (datestring) {
	var date = new Date(datestring)
	var month = date.getMonth()
	for (var i = 1; i < 33; i++) {
		date.setDate(i)
		if (date.getMonth()!==month) {
			console.log (  (month+1)+"月有"+(i-1)+"天"  )
	    return i-1
		}
	}
}
monthHowDay("2018/10") //10月有31天  31


//获取一年中的第几天-howmanyday、第几周-howmanyweek、剩余天数-endofyear、当月剩余天数-endofmonth、总天数-daynum
//⚠️依赖monthHowDay（）

function howManyDayInYear (datestring,par){
	var date = new Date(datestring)
	var month = date.getMonth()
	var howmanyday=0,endofmonth=0,endofyear=0,endday=0,daynum=0
	for (var i = 0; i < 12; i++) {
		daynum = daynum + monthHowDay(date.setMonth(i))
		if (i==month){
			endofmonth = monthHowDay(date.setMonth(i))-date.getDate() //当月剩余天数
			howmanyday= daynum-endofmonth //今天是今年的第几天
		}
		if(i>month){
			endday= endday + monthHowDay(date.setMonth(i)) 
		}
	}
	endofyear = endday + endofmonth //今年剩余天数

	console.log ( 
		"今天是今年的第几天:" + howmanyday + 
		"今天是今年的第几周:" + Math.ceil((howmanyday/7)) + 
		"今年剩余天数:" + endofyear +
		"当月剩余天数:" + endofmonth +
		"今年的总天数："+daynum 
	 )
	if (par==="howmanyday") { return howmanyday }
	else if (par==="howmanyweek") { return Math.ceil((howmanyday/7)) }
	else if (par==="endofyear") { return endofyear }
	else if (par==="endofmonth") { return endofmonth }
	else { return daynum }
	
}




