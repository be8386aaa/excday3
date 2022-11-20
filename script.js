//-----EX1-----
a = prompt();
alert(isNaN(a))
//-----EX3-----
var arr = [2, 2, 1];
var extractUnique = arr => {
    var uniquenum = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.lastIndexOf(arr[i]) !== arr.indexOf(arr[i])) {
            continue;
        };
        uniquenum.push(arr[i]);
    };
    return uniquenum;
};
console.log(extractUnique(arr));
//-----EX2-----
