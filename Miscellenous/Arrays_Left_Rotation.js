function rotateArray(arr, num){
    while (num > 0) {
        for(var i=0; i<arr.length -1; i++){
            var temp = arr[i];
            arr[i]=arr[i+1];
            arr[i+1] = temp;
        }
        num--;
    }
    return arr;
}

function main() {
    var k = 4;
    var a = [1,2,3,4,5];
    var newA = rotateArray(a, k);
    var str = "";
    for (var i = 0; i < newA.length; i++) {
        str += newA[i]+" ";
    }
    console.log(str);
}

main();
