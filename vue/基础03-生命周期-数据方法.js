////////////////////////////////////////////////////生命周期
//https://jsfiddle.net/2ucef95s
// 创建前 data、el都未加载
beforeCreate 	: function(){
	
},
// 创建完成 data已加载  el未加载
created 		: function(){
	
},
// 挂载前 $el的值为“虚拟”的元素节点
beforeMount 	: function(){
	
},
// 挂载完成 $el为真实的dom元素
mounted 		: function(){
	
},
// 更新前 可以监听到data的变化但是view层没有被重新渲染
beforeUpdate 	: function(){
	
},
// 更新完成  view层才被重新渲染，数据更新
updated 		: function(){
	
},
// 实例销毁之前调用。在这一步，实例仍然完全可用
beforeDestroy 	: function(){
	
},
// Vue 实例销毁后调用
destroyed 		: function(){
	
},
  
  
/////////////////////////////////////////////////////////
//数据
data: function () {
  return { a: 1 }
}
//父组件的数据
props: {
  // 检测类型
  height: Number,
  // 检测类型 + 其他验证
  age: {
    type: Number,
    default: 0,
    required: true,
    validator: function (value) {
      return value >= 0
    }
  }
  
  //计算
  var vm = new Vue({
  data: { a: 1 },
  computed: {
    // 仅读取
    aDouble: function () {
      return this.a * 2
    },
    // 读取和设置
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  }
})
vm.aPlus   // => 2
vm.aPlus = 3
vm.a       // => 2
vm.aDouble // => 4
}

//方法/函数
methods: {
  plus: function () {
    this.a++
  }
}

//监听data
watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal) 
    }
}
