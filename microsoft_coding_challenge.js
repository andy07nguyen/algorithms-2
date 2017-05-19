function kThLargest(arr, k) { // Input Array and K th Value
  if (k === undefined) { // if K is null or undefined return 0
    return 0;
  }
  if (arr.length === 0) { // If empty array return 0
    return 0;
  }
  var count = 0; // Set count to 0
  for (var i = 0; i < arr.length; i++) { // Loop thru Array
    if (arr[i] >= k) { // if Array element greater than or equal to k, increment count
      count++;
    }
  }
  return count; // return count
}

// kThLargest(["a", "b", "c"],1);
// kThLargest([1,2,5,9],3);
// kThLargest([1,2,5,9,3],3);


function firstDuplicate(arr) { // Input array
  if (arr.length === 0) { // If empty array return false
    return false;
  }
  for (var i = 0; i < arr.length; i++) { // hold element in array
    for (var j = i+1; j < arr.length; j++) { // hold another element in array
      if (arr[i] === arr[j]) { // compare both if match found return element
        return arr[i];
      }
    }
  }
  return false; // if no duplicates return false
}
// console.log(firstDuplicate([]));


function DLNode(value) {

}
