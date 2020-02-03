# 常见模块

## Pillow 

> 影像库 [官方»](https://pillow.readthedocs.io/en/stable/index.html)

``` python
from PIL import image
image.open('./1.png')
```

## requests 

> HTTP请求 [官方»](https://2.python-requests.org/en/master/)

``` python
import requests
r = requests.get('https://api.github.com/user', auth=('user', 'pass'))
r.status_code
# 200
r.headers['content-type']
# 'application/json; charset=utf8'
r.encoding
# 'utf-8'
r.text
# u'{"type":"User"...'
r.json()
# {u'disk_usage': 368627, u'private_gists': 484, ...}
api = requests.get('http://tool.lanrentuku.com/teshufuhao/')
api.encoding='utf-8' # 中文乱码
print(api.text)
```

## beautifulsoup4 

> HTML/XML解析器 [官方»](https://www.crummy.com/software/BeautifulSoup/bs4/doc.zh/)

``` python
from bs4 import BeautifulSoup
soup = BeautifulSoup("<p>Some<b>bad<i>HTML")
print (soup.prettify())
```

``` html
<html>
<body>
    <p>Some <b>bad <i> HTML</i></b></p>
</body>
</html>
```

## pyquery 

> jquery方式解析html [官方»](https://pyquery.readthedocs.io/en/latest/)

``` python
from pyquery import PyQuery as pq
p = pq('<p id="hello" class="hello">123</p>')('p')
p.attr("id")
# 'hello'
p.text()
# 123
```

## numpy 

> 数组/列阵计算 [官方»](https://numpy.org/)

``` python
import numpy as np
n = np.array([1,2,3],np.int64)
print(n)
//[1 2 3]
```

## pandas 

> 数据分析，时间序列和统计 [官方»](https://pandas.pydata.org/)

``` python
import pandas as pd
p = pd.Series([1 ,3,6, [1,2,3], 44, 1])
print(p)
# 0            1
# 1            3
# 2            6
# 3    [1, 2, 3]
# 4           44
# 5            1
# dtype: object
```

## matplotlib 

> 图表、可视化、绘图包 [官方»](https://matplotlib.org/)

``` python
xxx
```

## xx 

> xx [官方»](xx)

``` python
xxx
```

## xx 

> xx [官方»](xx)

``` python
xxx
```

## xx 

> xx [官方»](xx)

``` python
xxx
```

## xx 

> xx [官方»](xx)

``` python
xxx
```

## xx 

> xx [官方»](xx)

``` python
xxx
```

## xx 

> xx [官方»](xx)

``` python
xxx
```

## xx 

> xx [官方»](xx)

``` python
xxx
```

## xx 

> xx [官方»](xx)

``` python
xxx
```

## xx 

> xx [官方»](xx)

``` python
xxx
```

## xx 

> xx [官方»](xx)

``` python
xxx
```

## xx 

> xx [官方»](xx)

``` python
xxx
```

