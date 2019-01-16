
//要在data里创建的数据才是响应式的,所以下手前先预设需要的数据
//X
vm.b = 'hi'; 
//O
data{
  b:'hi'
}

//一些属性和方法       more:https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7
vm.$el      //<div id="app"></div>
vm.$data.b  // = vm.b 
vm.$watch('b', function (newValue, oldValue) {
  // 这个回调将在 `vm.b` 改变后调用
})   


//实例 的生命周期
beforeCreate  ->  created  ->  beforeMount  ->  mounted  ->   beforeUpdate  -> updated  ->
beforeDestroy  -> destroyed
