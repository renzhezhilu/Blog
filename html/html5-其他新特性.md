#### -图片懒加载/Chrome 75
```html
<img loading=lazy>
```

#### 解决不用引用外部图片
```html
<!-- head里增加 -->
<meta name="referrer" content="never">
```

window.onerror = window.close;

上面这行代码，可以让网页应用有手机 App 的体验