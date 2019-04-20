## 研究day.js就好，https://github.com/iamkun/dayjs/blob/dev/docs/zh-cn/API-reference.md

#### 输出 带‘0’的日期格式
```javascript
new Date().toJSON().substr(0,10)+ ' ' + new Date().toTimeString().substr(0,8)
//"2019-04-20 21:02:11"
```

#### 相对时间差
```javascript
twoTimeInterval({
    time01:new Date('2018-01-03'),
    time02:new Date(),
},'之前')
function twoTimeInterval (obj,afterText){
            var time01 = new Date(obj.time01),time02 = new Date(obj.time02),unit = obj.unit,interval=0;
            //格式判断
            time01==undefined || time02==undefined ? console.error("时间格式有误！"):console.log();
             
            //一天内的时间，加上年月日才能计算
            if ( isNaN(time01.getFullYear()) || isNaN(time02.getFullYear())){
                time01= new Date("2015/6/12 "+obj.time01)
                time02= new Date("2015/6/12 "+obj.time02)
            }
            //不能相同的时间
            time01-time02 ?  console.log(): console.warn("两个时间不可以相等！");
            //开始计算
            time01>time02 ? interval=time01-time02:interval=time02-time01;
            //自动判断用什么时间单位
            if(!unit){
                let t = interval/1000
                if(t < 59) unit = 's'
                else if(t < 59*60) unit = 'm'
                else if(t < 59*60*24) unit = 'h'
                else if(t < 59*60*24*60) unit = 'D'
                else if(t < 59*60*24*30*12) unit = 'M'
                else if(t < 59*60*24*30*12*1000) unit = 'Y'
            }
            afterText = afterText || ''
            switch(unit){
                case 's':
                     interval= ~~(interval/1000)+"秒";
                     break
                case 'm':
                     interval= ~~(interval/(60000))+"分钟";
                     break
                case 'h':
                     interval= ~~(interval/(3600000))+"小时";
                     break
                case 'D':
                     interval= ~~(interval/(86400000))+"日";
                     break
                case 'M':
                     interval= ~~(interval/(86400000*30))+"个月"; //还不够准！！！！
                     break
                case 'Y':
                     interval= ~~(interval/(86400000*365))+"年";
                     break
                default:
                    return console.warn("参数有误！s/m/h/D/M/Y") 
            }
            return interval = interval +''+ afterText
        }
```