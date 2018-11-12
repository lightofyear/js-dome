var box = {a:5,b:6};
var a = {name:'123',age:17};
[].push.call(a,box);
console.log(a);
"use strict";
console.log(this);
function argT() {
    var arg = [].slice.call(arguments,0);
    console.log(arg);
}
argT(0,1,2,3,4);
//数组去重
var arr = [1,2,3,1,5,6];
var arr1 = arr.filter(function (item,index) {
    return arr.indexOf(item)===index;
});
console.log(arr1);
var arr2 = [1,2,5,4,6,9,7,5,4,1,2];
len = arr2.length;
for(var i=len;i>0;i--){
    for(var j=i-1;j>=0;j--){
        if (arr2[i] === arr[j]) {
            arr2.splice(i,1)

        }
    }
}
console.log(arr2);
var str = '123';
// str2=str.split(/\d/,10);
str2=str.replace(3,str+'.');
console.log(str2);
var str3=str.split('1').join('233');
console.log(str3);

var a = new Number(1) ;
console.log(typeof a);