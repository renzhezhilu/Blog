<!-- https://www.mmxiaowu.com/article/584821bcd4352863efb5545e -->
<!-- https://www.cnblogs.com/wu-chao/p/8418541.html -->
<!-- https://www.cnblogs.com/xiaohuochai/p/7204875.html -->
<!-- https://www.soinside.com/question/7AAJ6Br8WXcqPHhH8NSAEA -->
### 基本概念

Collections 集合   
Functions   函数   
Users       用户   
document    记录    

### 数据库

#### 查看数据库

``` 
show dbs
```

#### 查看集合

``` 
use test
show collections
```

#### 查看集合内容

``` 
db.cats.find()
```

#### 删除数据库

``` 
use dbname
db.dropDatabase()
```

### #新建

``` 
增加的同时如果没有集合就会新建
```

### #增加 insert()、save() 

有insert方法和save方法，区别是当默认的“_id”值已存在时，调用insert方法插入会报错；而save方法不会, 会更新相同的_id所在行数据的信息

##### db. 集合.insert(数据)

``` javascript
db.jihename.insert({
    name: "张三",
    ago: 27
})
db.getCollection('jihename').insert({
    name: "张三",
    ago: 27
})
```

或

``` javascript
db.jihename.save({
    name: "张三",
    ago: 27
})
db.getCollection('jihename').insert({
    name: "张三",
    ago: 27
})
```

##### 批量增加(for)

``` javascript
for (var i = 0; i < 5; i++) db.jihename.save({
    'name': '2222222' + i,
    'age': i + 8
});
```

### 删除 remove()

符合条件的都删除

``` javascript
db.jihename.remove(age: {
    '$gt:19'
}
})
```

### 查询 find()、findOne()、limit()、skip()、count()、sort() 

查看所有数据库

``` 
show dbs
```

查询集合

``` javascript
db.jihename.find()
db.jihename.find({
    name: '阿花'
})
```

只查询第一条

``` javascript
db.jihename.findOne({
    name: '阿黄'
})
```

限制查询数量

``` javascript
db.jihename.find({
    name: '阿黄'
}).limit(10)
```

跳过指定数量查询

``` javascript
db.jihename.find({
    name: '阿黄'
}).limit(3).skip(10)
```

条件查询-大于等于

``` javascript
大于： $gt
小于： $lt
大于等于： $gte
小于等于： $lte
非等于： $ne

db.jihename.findOne({
    name: '阿黄',
    age: {
        '$gt:19'
    }
})
db.jihename.find({
    name: '妹子',
    age: {
        '$gt': 18,
        '$lt': 28
    }
}).limit(3).skip(10)
//跳过结果的前10条，取3条age大于18小于28的妹子
```

统计查询

``` javascript
db.jihename.find({
    age: {
        '$gt:19'
    }
}).count() //15
//age大于19的数据有几条 
```

查询结果排序

``` javascript
db.jihename.find({
    name: '妹子',
    age: {
        '$gt': 18,
        '$lt': 28
    }
}).sort({
    age: 1
})
//1：从小到大 -1：反之
```

查询结果取舍字段

``` javascript
db.jihename.find({
    name: '妹子',
    age: {
        '$gt': 18,
        '$lt': 28
    }
}, {
    ago: 1
})
//1:只选择  0:不选择
```

### 替换/更新 update()、updateMany() 

更新一条

``` javascript
db.jihename.update({
    name: {
        $eq: '张飞'
    }
}, {
    $set: {
        name: '关羽'
    }
})
```

批量更新

``` javascript
db.jihename.updateMany({
    name: {
        $eq: '张飞'
    }
}, {
    $set: {
        name: '关羽'
    }
})
```

### 查询重复的数据

``` javascript
db.users.aggregate([{
        $group: {
            _id: {
                name: '$name'
            },
            count: {
                $sum: 1
            },
            dups: {
                $addToSet: '$_id'
            }
        }
    },
    {
        $match: {
            count: {
                $gt: 1
            }
        }
    }
], {
    allowDiskUse: true
})
//150万数据耗时 46秒
```

### 去重

``` javascript
db.users.aggregate([{
        $group: {
            _id: {
                name: '$name',
                条件02: '$条件02'
            },
            count: {
                $sum: 1
            },
            dups: {
                $addToSet: '$_id'
            }
        }
    },
    {
        $match: {
            count: {
                $gt: 1
            }
        }
    }
], {
    allowDiskUse: true
}).forEach(function(it) {
    it.dups.shift();
    db.users.remove({
        _id: {
            $in: it.dups
        }
    });
})
//150万数据去除40万重复数据耗时 1626秒 半个多小时
//缺点看不到进度和结果
//返回Script executed successfully, but there is no result to show.脚本执行成功，但是没有结果显示
```

### 模糊搜索

``` javascript
let re = new RegExp('iod', "i");
let re02 = new RegExp('33296', "i");
db.test.find({
    $or: [{
            st: re
        },
        {
            id: re02
        }
    ]
})
```

### 优化搜索效率/建立text index全文检索

#### 效果非常好！！！👌10s变1s不是梦

``` javascript
//1.新建text index 120万耗时150秒
//字段01: "text"
db.blogs.createIndex({
    title: "text",
    name: "text"
})
//2.搜索
db.blogs.find({
    $text: {
        $search: "index"
    }
})

// 3.执行简单的全文检索
db.blogs.find({
    $text: {
        $search: "index"
    }
})

// 4.查询包含index或者operators的记录
db.blogs.find({
    $text: {
        $search: "index operators"
    }
})

// 5.查询包含mongodb但是不包含search的记录
db.blogs.find({
    $text: {
        $search: "mongodb -search"
    }
})

// 6.查询包含text search词组的记录
db.blogs.find({
    $text: {
        $search: "\"text search\""
    }
})

//7.使用权重排序搜索结果
//默认情况下全文检索返回的结果是无序的；
//每次全文检索MongoDB会针对文档的匹配程度为每个document计算一个相对的分数；
//MongoDB提供了$meta textScore来支持全文检索的分数；

db.blogs.find({
    $text: {
        $search: "mongodb index"
    }
}, {
    score: {
        $meta: "textScore"
    }
}).sort({
    score: {
        $meta: "textScore"
    }
})

//如不先建立索引使用$text会报错
{
    "message": "text index required for $text query",
    "ok": 0,
    "code": 27,
    "codeName": "IndexNotFound",
    "name": "MongoError"
}
```

