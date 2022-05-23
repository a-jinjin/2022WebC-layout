function test(...arr) {
  console.log(arr);
}

test(1, 2, 3, 4); //=> [1,2,3,4]

function testOne(param, item) {
  let print = param + "=> param";
  print += item.one + "=> one";
  print += item.two + "=> two";
  console.log(print);
}
testOne("test", {
  one: 1,
  two: 2,
});
// test => param  1 => one  2 => two

function testTwo(param) {
  let print = param;
  print += param.one;
  print += param.two;
  console.log(print);
}
testTwo({
  one: 1,
  two: 2,
});
