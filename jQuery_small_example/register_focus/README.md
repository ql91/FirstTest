# jquery的extend和fn.extend

jQuery为开发插件提拱了两个方法，分别是：<br>
 
jQuery.fn.extend(object);<br>
jQuery.extend(object);<br>

`.extend(object); 为扩展jQuery类本身.为类添加新的方法。`<br>
`jQuery.fn.extend(object);给jQuery对象添加方法。`<br>

fn 是什么东西呢。查看jQuery代码，就不难发现。<br>

``` javascript 
jQuery.fn = jQuery.prototype = {
　　　init: function( selector, context ) {//....　
　　　//......
};
```

原来 jQuery.fn = jQuery.prototype.对prototype肯定不会陌生啦。<br>

jQuery.extend(object);<br>
为jQuery类添加添加类方法，可以理解为添加静态方法。如：<br>

``` javascript 
$.extend({
　　add:function(a,b){return a+b;}
});
```

便为　jQuery　添加一个为 add　的　“静态方法”，之后便可以在引入 jQuery　的地方，使用这个方法了。<br>
``` javascript 
$.add(3,4);  //return 7
```

jQuery.fn.extend(object); 对jQuery.prototype进得扩展，就是为jQuery类添加“成员函数”。jQuery类的实例可以使用这个“成员函数”。(见[例子](http://htmlpreview.github.io/?https://github.com/ql91/small-example/blob/master/jQuery_small_example/register_focus/register_focus_%24.extend.html))
