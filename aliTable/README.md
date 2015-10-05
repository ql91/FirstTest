#2015阿里笔试题 表格根据表头动态排序、删除、查询 

###题目要求
![表格排序要求图01](https://ql91.github.io/imgby91/aliTable/表格排序.png)

![表格排序要求图02](https://ql91.github.io/imgby91/aliTable/要求.png)

###解题思路
(题目中描述表格的元素id为person-list奇数行的class名为odd没理解，所以按着自己的思路编写了程序。)<br>

方式一：<br>
1.使用一个data对象存储各状态(删除、排序、筛选)后的对象的值；<br>
2.使用一个ageArray数组存储年龄,便于排序；<br>
3.给各状态添加相应的事件。<br>

方式二：<br>
换种方式考虑，可以用到HTML DOM TableRow 对象,TableRow 对象代表一个 HTML 表格行。<br>
可以用TableRow对象的deleteCell(index)删除行中的指定的单元格和insertCell(index)在一行中的指定位置插入一个空的 元素。<br>

`HTML5, CSS, Bootstrap,JavaScript`
