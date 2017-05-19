function stringSubset(string, map) {
  if (!map) {
    map = {"":true};
  }
  map[string] = true;
  for (var i = 0; i < string.length; i++) {
    console.log("string");
    console.log(string);
    var left = string.slice(0, i);
    console.log("left");
    console.log(left);
    var right = string.slice(i + 1);
    console.log("right");
    console.log(right);

    stringSubset(left + right, map);
  }
  return map;
}
console.log(stringSubset("abcd"));
