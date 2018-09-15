### 豆瓣
https://api.douban.com/v2/movie/search?tag=%E6%98%AF
https://api.douban.com/v2/movie/search?q=%E6%98%AF
https://api.douban.com/v2/book/1220562

### 翻译音频
//百度-女-美国
var mp3src01_01 = "http://fanyi.baidu.com/gettts?lan=en&text="+con+"&spd=3&source=web"; 
//百度-男-英国
var mp3src01_02 = "http://fanyi.baidu.com/gettts?lan=uk&text="+con+"&spd=3&source=web";
//有道-男-美国
var mp3src02_01 ="http://dict.youdao.com/dictvoice?audio="+con+"&type=2";
//有道-女-英国
var mp3src02_02 ="http://dict.youdao.com/dictvoice?audio="+con+"&type=1";
//腾讯-女-中文
var mp3src03_01 ="https://fanyi.qq.com/api/tts?platform=PC_Website&lang=zh&text="+con+"&guid=629630fe-f563-487d-aeb1-a7a36a018c58";
//腾讯-女-英文
var mp3src03_02 ="https://fanyi.qq.com/api/tts?platform=PC_Website&lang=en&text="+con+".&guid=629630fe-f563-487d-aeb1-a7a36a018c58";
//微软-中文
var mp3src04_01 ="https://cn.bing.com/tspeak?&format=audio%2Fmp3&language=zh-CN&IG=B484A40B740C4625A4673D6D9A278890&IID=translator.5036.4&options=female&text="+con+"";
//微软-英文
var mp3src04_02 ="https://cn.bing.com/tspeak?&format=audio%2Fmp3&language=en-AU&IG=B484A40B740C4625A4673D6D9A278890&IID=translator.5036.7&options=female&text="+con+"";

### 金融
https://forexdata.wallstreetcn.com/kline?prod_code=XAUUSD&candle_period=2&data_count=1&fields=time_stamp,open_px,close_px,high_px,low_px
https://forexdata.wallstreetcn.com/real?en_prod_code=000001,SPX500INDEX,EURUSD,XAUUSD,USDCNH,UKOil,BTCUSD&fields=prod_name,preclose_px,last_px,px_change,px_change_rate,price_precision
https://forexdata.wallstreetcn.com/kline?prod_code=BTCUSD&candle_period=8&data_count=3000&end_time=1536776137&fields=time_stamp%2Copen_px%2Cclose_px%2Chigh_px%2Clow_px
https://wows-api.wallstreetcn.com/real?fields=prod_name,last_px,px_change,px_change_rate,high_px,low_px,open_px,preclose_px,business_amount,business_balance,market_value,turnover_ratio,dyn_pb_rate,amplitude,pe_rate,bps,hq_type_code,trade_status,bid_grp,offer_grp,business_amount_in,business_amount_out,circulation_value,securities_type,update_time,price_precision&en_prod_code=300073.SZ,300618.SZ,603799.SS

### 金融新闻
https://api-prod.wallstreetcn.com/apiv1/content/articles?category=global&limit=100&platform=wscn-platform
https://api-prod.wallstreetcn.com/apiv1/content/articles?category=forex&limit=20&platform=wscn-platform
https://api-prod.wallstreetcn.com/apiv1/finance/macrodatas?start=1536681600&end=1536767999
https://api-prod.wallstreetcn.com/apiv1/finance/macrodatas?start=1536422400&end=1537027199&importances=3

### 网易新闻
###### 本地
https://3g.163.com/touch/jsonp/article/local/%E5%B9%BF%E4%B8%9C%E7%9C%81_%E4%B8%9C%E8%8E%9E%E5%B8%82/0-33.do?callback=localData
https://3g.163.com/touch/api/pagedata/index_original?callback=originalList
https://3g.163.com/touch/api/pagedata/index_yaowen?callback=allTopicList
https://3g.163.com/touch/reconstruct/article/list/BBM54PGAwangning/0-10.html
##### 图片
https://3g.163.com/photocenter/api/list/0001/00AP0001,3R710001,4T8E0001/0/3/cache_00AP_3R71_4T8E_top.json?__rnd=85931945&callback=cache_00AP_3R71_4T8E_top
https://3g.163.com/photocenter/api/list/0001/00AN0001,00AO0001/0/10/cache_00AN0001_00AO0001.json?__rnd=26112675&callback=cache_00AN0001_00AO0001
##### 跟帖
https://3g.163.com/touch/jsonp/hot/comments/0-10.html
https://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/threads/DRE4CUAP0525X3BE?ibc=newspc&__rnd=56488296&callback=callback_1536778713045
https://comment.api.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/threads/DRE4CUAP0525X3BE/comments/DRE4CUAP0525X3BE_275692923?ibc=newswap&callback=callback_1536778713094
https://comment.news.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/threads/DRE4CUAP0525X3BE/comments/hotList?offset=0&limit=5&headLimit=3&tailLimit=2&ibc=newswap&showLevelThreshold=5&callback=callback_1536778713103
https://comment.news.163.com/api/v1/products/a2869674571f77b5a0867c3d71db5856/threads/DRE4CUAP0525X3BE/comments/newList?offset=0&limit=5&headLimit=3&tailLimit=2&ibc=newswap&showLevelThreshold=5&callback=callback_1536778713116

### 美图 规格不一
https://unsplash.com/napi/photos?page=4&per_page=12&order_by=latest

### 百度图片
https://m.baidu.com/sf/vsearch/image/search/wisejsonala?tn=wisejsonala&ie=utf8&cur=result&fromsf=1&word=%E5%A4%A9%E7%A9%BA&pn=30&rn=30&gsm=1e
https://m.baidu.com/sf/vsearch/image/search/wisejsonala?tn=wisejsonala&ie=utf8&cur=result&fromsf=1&word=%E5%A4%A9%E7%A9%BA&pn=0&rn=30&gsm=1e&z=3&width=0&height=0&simibdtype=0&fromfilter=1
https://m.baidu.com/sf/vsearch/image/wise/piccorrelate?fromsf=1&word=%E5%A4%A9%E7%A9%BA&cs=820856136%2C2100710011&os=192205059%2C236244713&is=0%2C0&bdtype=0&screenHeight=1334&screenWidth=750&queryImageUrl=https%3A%2F%2Fss1.bdstatic.com%2F70cFvXSh_Q1YnxGkpoWK1HF6hhy%2Fit%2Fu%3D820856136%2C2100710011%26fm%3D26%26gp%3D0.jpg&pictureoffset=4&spn=0&origintype=undefined&aiInfoType=0

### 商品
###### 游客随机推荐
https://api.m.jd.com/api?functionId=uniformRecommend&client=m&appid=m_index&Area=1_72_4139&pin=&body={"source":9,"page":2,"needRecomTips":1,"pageSize":22}
###### 单品信息


https://m.360buyimg.com/mobilecms/s750x750_jfs/t24571/38/653433402/213398/8fd9a549/5b3c378bNcf72fdcc.jpg!q80.dpg.webp
###### 类型选择
https://yx.3.cn/service/info.action?ids=29922101672,5479867,1230025,30544525102,20820857683,30901970580,31649960891&callback=cb2b80fbeadafc069f2eca03f65046dc99&g_ty=ls&g_tk=5381
###### 视频 
https://wq.jd.com/commodity/extension/getplayurl?callback=videoUrlCBA&type=1&vid=6641897&sceneval=2
###### 店铺信息
https://wq.jd.com/mshop/BatchGetShopInfoByVenderId?callback=getVenderInfoCBA&venderIds=142607&t=0.02295104768684819
https://wq.jd.com/mshop/BatchGetShopInfoByVenderId?callback=getVenderInfoCBA&venderIds=1000008667&t=0.36397990319232343
https://shop.m.jd.com/?shopId=1000008667&skuId=1230025&categoryId=15901_15903_15917
https://wqcoss.jd.com/mcoss/reclike/getrecinfo?recpos=6159&pc=30&sku=5479867&c1=15901&c2=15903&c3=15917&callback=cb902007A&t=0.20221420483480346
###### 评论
https://wq.jd.com/questionanswer/GetSkuQuestionListWeChat?callback=askAnswerCBA&productId=5479867&t=0.16416927637572387
https://wq.jd.com/commodity/comment/getcommentlist?sorttype=5&sceneval=2&sku=5479867&page=1&pagesize=10&score=0&callback=skuJDEvalA&t=0.899028125593794
### 图标
https://apicdn.icons8.com/api/iconsets/v2/icon?id=435,437,5376,843,73,9659,355,123,381,2952,132,364,3096,343,77,2806,9671,3447,104,1669,2816,63,3701,398,23,532,366,529,34,4717,46&format=json&variants=disabled&info=disabled&language=en-US
https://api.icons8.cn/api/iconsets/v2/icon?id=435,437,5376,843,73,9659,355,123,381,2952,132,364,3096,343,77,2806,9671,3447,104,1669,2816,63,3701,398,23,532,366,529,34,4717,46&format=json&variants=disabled&info=disabled&language=zh-CN
https://apicdn.icons8.com/api/iconsets/v4/icon?id=95992&info=false&language=zh-CN

### 视频
###### 爱奇艺
http://pub.m.iqiyi.com/jp/h5/recommend/videos/?area=h_swan&size=30&type=video&tvid=1324591800&referenceId=1324591800&albumId=1324591800&cookieId=0&channelId=13&filterStatus=1&trimUser=false&qyid=1yu6c5fhfs4463fn7ci5qcq0&ppuid=2354013938&uid=1yu6c5fhfs4463fn7ci5qcq0&_=1536787495873&callback=Zepto1536787493188
http://pub.m.iqiyi.com/jp/h5/recommend/videos/?area=h_swan&size=30&type=video
http://api-top.iqiyi.com/index/top?utype=h5_play&cid=29&dim=hour&len=4&area=m_iqiyi

###### bilibili
https://api.bilibili.com/x/web-interface/ranking?rid=0&day=3&jsonp=jsonp
https://api.bilibili.com/x/web-interface/dynamic/region?rid=1&jsonp=jsonp&_sw-precache=juoihjoi

### IP 用户位置
https://api.bilibili.com/x/web-interface/zone?jsonp=jsonp


### 天气
http://wis.qq.com/weather/common?source=pc&weather_type=observe|forecast_1h|forecast_24h|index|alarm|limit|tips|rise&province=广东省&city=梅州市&county=
http://wis.qq.com/weather/common?source=pc&weather_type=air|rise&province=广东省&city=东莞市
```
    //var HOST = "wisdev.cpcwe.com";

    // observe         实况
    // forecast_1h     预报
    // forecast_24h    预报
    // air             空气质量
    // index           指数
    // alarm           天气预警
    // limit           尾号限行
    // var TYPES = ["observe", "forecast_1h", "forecast_24h", "air", "index", "alarm", "limit"];

```
