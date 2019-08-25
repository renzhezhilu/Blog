<!-- https://www.mmxiaowu.com/article/584821bcd4352863efb5545e -->
<!-- https://www.cnblogs.com/wu-chao/p/8418541.html -->

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
```


