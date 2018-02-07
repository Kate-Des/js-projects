
// for (начало, условие, шаг)
// var x=29;

// for ( var i=17; i<x; i++ ) {
 
//    if (i % 2 !== 0) continue;

       
//    document.write (i+ "</br>")


// }

// var x = 0;
// while (x<10) {
//     x=x+2;
// document.write (x + "</br>");
// }

// do {
// x=prompt( "введите четное число, которое больше 20");
// if (x==null) break;
// } while (x<20 || x%2!==0);

// var arr= [1,2,3,4,5];
// console.log (arr.length);

// console.log (arr[2]);
// arr[4]=18;
// console.log (arr[4]);


// for (i=0; i<arr.length; i++) {
//     document.write (arr [i] + "</br>");
// }

// var arr=[];
// var firstEl=prompt ('Пжл, введите число');
// firstEl=+firstEl;

// for (i=0; i<5; i++) {
//     arr[i]=firstEl;
//     firstEl+=1;
//     document.write (arr [i] + "</br>")
// }

// var y=0;
// for (i=0; i<arr.length; i++) {
//    y += arr [i];
// }
// document.write (y);

// var arr_1 = new Array ();
// var arr_2 = new Array ();
// var arr_3 = new Array ();
// for (var i=0; i<5; i++)  arr_1[i]=i;
// for (var i=0; i<10; i++)  arr_2[i]=i;
// for (var i=0; i<15; i++)  arr_3[i]=i;

// var arr = new Array (arr_1, arr_2, arr_3);
// console.log (arr);

// for (var x=0; x<arr.length; x++) {
//     for (var j=0; j<arr.length; j++) {
//         document.write (arr[x],[j] + "       ||     ");
//     }
//     document.write ("</br>");
// }

var arr = [5,8,0,3,9];
for (var x=0; x<arr.length; x++) {
for (var i=0; i<arr.length; i++) {
    if (arr[i]>arr[i+1]) {
        var a = arr[i];
        var b = arr [i+1];
        arr[i]=b;
        arr[i+1]=a;

    }

}
}
console.log (arr);
  




