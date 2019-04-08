








#### 需要通过submit按钮发送才能起作用
```html
<form action="/example/html5/demo_form.asp" method="get">
Points: <input type="number" name="points" min="0" max="10" step="3"/>
<input type="submit" />
</form>
```


#### 不能为空
###### 添加required即可

```html
<form action="url" method="get">
    <input id="text" required />
    <input type="submit" />
</form>
```

#### 数字

###### min最小  max最大  step每次增加

```html
<input type="number" name="points" min="0" max="10" step="3" required/>
```
#### 两位小数
```html
<input type="number" step="0.01" />
```

#### 邮箱

```html
<input type="email" autocomplete="off"/>
```

#### 自动地获得焦点autofocus

```html
<input type="text"   autofocus="autofocus" />
```

#### 提示 placeholder

```html
<input type="search"  placeholder="Search W3School" />
```

#### 正则pattern

```html
<input id="text" pattern="^1[3-9]\d{9}$" required />
a — 匹配一个字符a(不能匹配 b,  aa等等.)
abc — 匹配 a, 其次 b, 最后 by c.
a* — 匹配字符 a, 0个或者多个 (+ 代表至少匹配一个或者多个).
[^a] — 匹配一个字符，但它不能是a.
a|b — 匹配一个字符 a 或者 b.

[abc] — 匹配一个字符，它可以是a,b或c.
[^abc] — 匹配一个字符，但它不可以是a,b或c.
[a-z] — 匹配字符范围 a-z且全部小写  (你可以使用 [A-Za-z] 涵盖大小写, 或 [A-Z] 来限制必须大写).

a.c — 匹配字符 a,中间匹配任意一个字符,最后匹配字符 c.
a{5} — 匹配字符 a五次.
a{5,7} — 匹配字符 a五到七次,不能多或者少.
你也可以在这些表达式中使用数字和其他字符, 例如:

[ -] — 匹配一个空格或者虚线.
[0-9] — 匹配数字范围0~9.
```

#### 邮箱

```html
<input type="email"  />
```

#### 网址

```html
<input type="url"  />
```

#### 滑动条

```html
<input type="range" name="points" min="1" max="10" />
```

#### 日期

```html
<input type="date" />  选取日、月、年
<input type="month" />  选取月、年
<input type="week" />  选取周和年
<input type="time" />  小时和分钟
<input type="datetime" />  UTC 时间
<input type="datetime-local" />  本地时间
```

#### 日期限制
```html
请输入 1980-01-01 之前的日期：
<input type="date" name="bday" max="1979-12-31">
请输入 2000-01-01 之后的日期：
<input type="date" name="bday" min="2000-01-02">
```

#### 下拉列表

```html
<select >
    <option value="volvo" selected>Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
</select>
```

#### 带搜索的下拉列表

```html
<input list="browsers">
<datalist id="browsers">
   <option value="Internet Explorer">
   <option value="Firefox">
   <option value="Chrome">
   <option value="Opera">
   <option value="Safari">
</datalist> 
```

#### 文本域
```html
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

#### 按钮
```html
<button type="button" >Click Me!</button> 只是按钮
<input type="submit"> 提交表单
<input type="image"> 图片按钮
formmethod 属性  submit/image
<form action="action_page.php" method="get">
    <input type="submit" value="Submit">
   <input type="submit" formmethod="post" formaction="demo_post.asp">
</form> 
```

#### 输入框

```html
<input type="text" >  <!-- 文本 -->
<input type="password" >  <!-- 密码 -->


```

#### 单选/多选

```html
<input type="radio"  checked>单选
<input type="checkbox"  checked>多选
```

#### 颜色
```html
<input type="color" >
```

#### 输入限制
```html
<input type="text" disabled> 禁用
<input type="text" readonly> 只读
<input type="text" required> 必需填写
<input type="text" maxlength="12"> 最大字符数
<input type="text" size="12"> 物理宽度（以字符计）
<input type="text" max="12" min="2" step="2"> 最大值/最小值/增减间隔
<input type="text" pattern=""> 正则表达式
<input type="text" value="默认值"> 默认值
```

#### 一次性禁用所有的表单元素
```html
<form>
    <fieldset disabled>
        <legend>完成您的购物订单</legend>
        <...> 
    </fieldset>
</form>
```
```css
fieldset[disabled] {
   -ms-pointer-events: none;
   pointer-events: none;
}
```

#### 自动完成 
```html
浏览器会基于用户之前的输入值自动填写值
autocomplete
<form action="action_page.php" autocomplete="on">
   First name:<input type="text" name="fname"><br>
   Last name: <input type="text" name="lname"><br>
   E-mail: <input type="email" name="email" autocomplete="off"><br>
   <input type="submit">
</form> 

```

#### 不进行验证
```html
novalidate
<form action="action_page.php" novalidate>
   E-mail: <input type="email" name="user_email">
   <input type="submit">
</form> 
```

#### 自动获得焦点
```html
autofocus
<input type="text" name="fname" autofocus>
```

#### 上传
```html
<input type="file" name="img" multiple="multiple" /> multiple可以选取一个以上的文件
```

#### 样式
```css
/* 无效时 */
input:invalid {
  border: 2px dashed red;
}
/* 有效时 */
input:valid {
  border: 2px solid black;
}
```

#### xxxx
```html
xxxx
```

#### xxxx
```html
xxxx
```

#### xxxx
```html
xxxx
```

#### xxxx
```html
xxxx
```

#### xxxx
```html
xxxx
```

#### xxxx
```html
xxxx
```
