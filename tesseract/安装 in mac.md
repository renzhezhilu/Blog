### tesseract简介
> OCR(Optical Character Recognition)即光学字符识别技术，专门用于对图片文字进行识别，并获取文本。
> tesseract-ocr引擎先由HP实验室研发，后来成为一个开源项目，主要由google进行改进优化。

### 安装homebrew包管理器
```java
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

### 安装tesseract
安装完毕后用tesseract -v 或 tesseract -help测试
```java
//先安装依赖库libpng, jpeg, libtiff, leptonica
brew install leptonica

//安装tesseract的同时安装训练工具
brew install --with-training-tools tesseract

//安装tesseract的同时安装所有语言，语言包比较大，如果安装的话时间较长，建议不安装，按需选择
brew install  --all-languages tesseract

//安装tesseract，并安装训练工具和语言
brew install --all-languages --with-training-tools tesseract 

//只安装tesseract，不安装训练工具
brew install  tesseract
```

### 下载语言库
下载地址: 
https://github.com/tesseract-ocr/tessdata

简体中文：chi_sim.traineddata

英文： eng.traineddata

将文件拷贝到：
`/usr/local/Cellar/tesseract/3.04.01_2/share/tessdata`

### 所有语言包
```
库名	语言
afr	Afrikaans(南非荷兰语)
amh	Amharic(阿姆哈拉语)
ara	Arabic(阿拉伯语)
asm	Assamese(阿萨姆)
aze	Azerbaijani(阿塞拜疆)
aze_cyrl	Azerbaijani - Cyrilic(阿塞拜疆-Cyrilic)
bel	Belarusian(白俄罗斯)
ben	Bengali(孟加拉)
bod	Tibetan(西藏)
bos	Bosnian(波斯尼亚)
bul	Bulgarian(保加利亚语)
cat	Catalan; Valencian(加泰罗尼亚语; 巴伦西亚)
ceb	Cebuano(宿务)
ces	Czech(捷克)
chi_sim	Chinese - Simplified(中国-简体)
chi_tra	Chinese - Traditional(中国-繁体)
chr	Cherokee(切诺基)
cym	Welsh(威尔士)
dan	Danish(丹麦)
dan_frak	Danish - Fraktur(丹麦-Fraktur)
deu	German(德国)
deu_frak	German - Fraktur(德国-Fraktur)
dzo	Dzongkha(不丹文)
ell	Greek, Modern （1453-）(希腊，现代（1453-）)
eng	English(英语)
enm	English, Middle (1100-1500)(英语，中东（1100-1500）)
epo	Esperanto(世界语)
equ	Math / equation detection module(数学/方程式检测模块)
est	Estonian(爱沙尼亚)
eus	Basque(巴斯克)
fas	Persian(波斯)
fin	Finnish(芬兰)
fra	French(法语)
frk	Frankish(法兰克)
frm	French, Middle (ca.1400-1600)(法国，中东（ca.1400-1600）)
gle	Irish(爱尔兰)
glg	Galician(加利西亚)
grc	Greek, Ancient (to 1453)(希腊语，古（到1453年）)
guj	Gujarati(古吉拉特语)
hat	Haitian; Haitian Creole(海天; 海地克里奥尔语)
heb	Hebrew(希伯来语)
hin	Hindi(印地文)
hrv	Croatian(克罗地亚)
hun	Hungarian(匈牙利)
iku	Inuktitut(因纽特语)
ind	Indonesian(印尼)
isl	Icelandic(冰岛)
ita	Italian(意大利语)
ita_old	Italian - Old(意大利语-旧)
jav	Javanese(爪哇)
jpn	Japanese(日本)
kan	Kannada(卡纳达语)
kat	Georgian(格鲁吉亚)
kat_old	Georgian - Old(格鲁吉亚-旧)
kaz	Kazakh(哈萨克斯坦)
khm	Central Khmer(中央高棉)
kir	Kirghiz; Kyrgyz(柯尔克孜; 吉尔吉斯)
kor	Korean(韩国)
kur	Kurdish(库尔德人)
lao	Lao(老挝)
lat	Latin(拉丁)
lav	Latvian(拉脱维亚)
lit	Lithuanian(立陶宛)
mal	Malayalam(马拉雅拉姆语)
mar	Marathi(马拉)
mkd	Macedonian(马其顿)
mlt	Maltese(马耳他)
msa	Malay(马来文)
mya	Burmese(缅甸)
nep	Nepali(尼泊尔)
nld	Dutch; Flemish(荷兰; 佛兰芒语)
nor	Norwegian(挪威)
ori	Oriya(奥里亚语)
osd	Orientation and script detection module(定位及脚本检测模块)
pan	Panjabi; Punjabi(旁遮普语; 旁遮普语)
pol	Polish(波兰)
por	Portuguese(葡萄牙语)
pus	Pushto; Pashto(普什图语; 普什图语)
ron	Romanian; Moldavian; Moldovan(罗马尼亚; 摩尔多瓦; 摩尔多瓦)
rus	Russian(俄罗斯)
san	Sanskrit(梵文)
sin	Sinhala; Sinhalese(僧伽罗语; 僧伽罗语)
slk	Slovak(斯洛伐克)
slk_frak	Slovak - Fraktur(斯洛伐克- Fraktur)
slv	Slovenian(斯洛文尼亚)
spa	Spanish; Castilian(西班牙语; 卡斯蒂利亚)
spa_old	Spanish; Castilian - Old(西班牙语; 卡斯蒂利亚-老)
sqi	Albanian(阿尔巴尼亚)
srp	Serbian(塞尔维亚)
srp_latn	Serbian - Latin(塞尔维亚语-拉丁语)
swa	Swahili(斯瓦希里语)
swe	Swedish(瑞典)
syr	Syriac(叙利亚)
tam	Tamil(泰米尔)
tel	Telugu(泰卢固语)
tgk	Tajik(塔吉克斯坦)
tgl	Tagalog(菲律宾语)
tha	Thai(泰国)
tir	Tigrinya(提格雷语)
tur	Turkish(土耳其)
uig	Uighur; Uyghur(维吾尔族; 维吾尔)
ukr	Ukrainian(乌克兰)
urd	Urdu(乌尔都语)
uzb	Uzbek(乌兹别克斯坦)
uzb_cyrl	Uzbek - Cyrilic(乌兹别克斯坦- Cyrilic)
vie	Vietnamese(越南语)
yid	Yiddish(意第绪语)
```
### end