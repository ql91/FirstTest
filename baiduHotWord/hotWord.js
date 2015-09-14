/*热词：
  t:1 表示一组数组
  row1:"a b c b a d f e 05 4a"  表示输入的一组数据
  row2:"1 2 3 4" 表示出现改次数的第一个字母
  返回:出现row2的次数的第一个出现改次数的字母
*/

console.log(hotWord(1,"a b c b a d f e 05 4a","1 2 3 4"));

function hotWord(t,row1,row2){
    var arr1=row1.split(" ");//转成数组
    var arr2=row2.split(" ");//转成数组

    //去除重复的row1数据
    var list=[];
    for(var i=0;i<arr1.length;i++){
        if(list.indexOf(arr1[i])==-1){
            list.push(arr1[i]);
        }
    }   

    //记录当前出现次数的首次出现的字母或者数字
    var obj=[];
    var o=[];
    for(var i=0;i<list.length;i++){
        var count=0;
        for(var j=0;j<arr1.length;j++){
            if(list[i]==arr1[j]){
                count++;
            }
        }
        
        if(o.indexOf(count)==-1){
            o.push(count);
            var number=list[i]+" "+count;
            obj.push(number);           
        }
    }
     
    //console.log(obj);

    var obj_1=[];
    for(var i=0;i<obj.length;i++){
        var ss=obj[i].split(" ");
        obj_1.push(ss[1]);
    }

    //console.log(obj_1);

    //记录需要返回的数组
    var backArr=[];
    for(var i=0;i<arr2.length;i++){    
        if(obj_1.indexOf(arr2[i])>-1){
             for(var j=0;j<obj.length;j++){
                var ss=obj[j].split(" ");
                if(arr2[i]==ss[1]){
                     backArr.push(ss[0]);                         
                }                   
             }
        }else{
            backArr.push("no");           
        }

    }

    return backArr.join(" ");

}