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
