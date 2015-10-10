# js实现文本框内容发生改变时触发事件
`场景一：在用户动态输入文字的时候，修改提示'您还可以输入XX字'`
`场景二：动态显示用户输入的文本框内容`

oninput,onpropertychange,onchange的用法和区别
1.onchange触发事件必须满足两个条件：<br>
a)当前对象属性改变，并且是由键盘或鼠标事件激发的（脚本触发无效）<br>
b)当前对象失去焦点(onblur)；<br>

2.onpropertychange的话，只要当前对象属性发生改变，都会触发事件，但是它是<mark>IE专属</mark>的；<br>

3.oninput支持ie9以上以及firefox和opera等浏览器，但有一点不同，它绑定于对象时，并非该对象所有属性改变都能触发事件，它只在对象value值发生改变时奏效。<br>

```bash
<h1>输入信息</h1>
	<input type="text" id="in">
	<h2>Console</h2>
	<div id="out"></div>
	<script>
       window.onload=function(){
       	 var input=document.getElementById("in");
       	 var out=document.getElementById("out");
               /*input.oninput=function(){
       	 	out.innerHTML=input.value;
       	 }*/
       	 input.onchange=function(){
       	 	out.innerHTML=input.value;
       	 }
       	 /*input.onpropertychange=function(){
       	 	out.innerHTML=input.value;
       	 }*/
       }
	</script>
```
