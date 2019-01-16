
/////要在data里创建的数据才是响应式的,所以下手前先预设需要的数据
//X
vm.b = 'hi'; 
//O
data{
  b:'hi'
}

/////一些属性和方法       more:https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7
vm.$el      //<div id="app"></div>
vm.$data.b  // = vm.b 
vm.$watch('b', function (newValue, oldValue) {
  // 这个回调将在 `vm.b` 改变后调用
})   

/////实例 的生命周期
beforeCreate  ->  created  ->  beforeMount  ->  mounted  ->   beforeUpdate  -> updated  ->
beforeDestroy  -> destroyed

/////插入文本
<span>{{ val }}</span>
//一次性插入不会更新
<span v-once>{{ val }}</span> 

/////插入html
<h1 v-html>{{ a }}</h1>

/////绑定属性  a:123  b:null
//正常
<b id='a'></b> 
//绑定 <b id='123'></b> 
<b v-bind:id='a'></b> 
//简写
<b :id='a'></b>
//null、undefined 或 false则不渲染该属性  <b></b>
<b :id='b'></b>

/////单个表达式 a:'aaa'
<h2>{{ a+1 }}</h2>
{{ ok ? 'YES' : 'NO' }}
{{ new Date() }}
//在属性里要绑定才生效
<h2 class='a+1'></h2>  //<h2 class='a+1'></h2>
<h2 v-bind:class='a+1'></h2>  //<h2 class='aaa1'></h2>
//O 只能访问js默认的全局变量 如：Math、 Date
//O 只能访问实例中data定义的数据
//X 不能访问用户自定义的全局变量


//////指令
//v-if  根据表达式的真假显示元素
<b v-if="true"></b> // '<b></b>'
<b v-if="false"></b> // ''
//v-on  绑定事件
<a v-on:click="doSomething">...</a>

/////缩写
v-bing:id='...'  ->  :id='...'
v-on:click='...'  ->  @click='...'

/////计算属性
//表达式过于复制时改成计算属性
//X
<div> {{ message.split('').reverse().join('') }} </div>
//O
<div> {{ reversedMessage }} </div>
var vm = new Vue({
  ...
  data: { message: 'Hello'},
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
})













