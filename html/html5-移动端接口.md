#### -调用相机
```html
<input type="file"  accept="image/*" capture="camera" >
<!-- multiple="multiple" -->
```
#### -调用录像
```html
<input type="file" accept="video/*" capture="camcorder" > 
```
#### -调用录音麦克风禁用
```html
<input type="file" accept="audio/*" capture="microphone" >

```
#### -机体震动
```html
<a onclick="navigator.vibrate(5000)" >开启5s震动</a>
<a onclick="navigator.vibrate(0)" >终止这5s震动</a>
```
```javascript
if("vibrate" in navigator){
   navigator.vibrate(5000)
}
else{
   alert("你的机体不支持震动api");
}
```