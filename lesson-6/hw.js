//打印100-999之间的水仙花数。
for (let i = 100; i <= 999; i++) {
  let units = i % 10;
  let hundreds = parseInt(i / 100);
  let tens = parseInt((i - hundreds * 100) / 10);
  if (
    hundreds * hundreds * hundreds +
      tens * tens * tens +
      units * units * units ==
    i
  ) {
    console.log(i);
  }
}

const a = [1, 2, 3, 4, 5];
//实现一个函数，接受一个Array，将Array里面每一个值打印出来。
function arraylogger(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
arraylogger(a);

//实现一个函数，接受一个Array和一个增量值。返回一个新的Array，值为对原有Array中的每一个Element+增量值。
function arraylogger2(array, sum) {
  const tempArray = [];
  for (let i = 0; i < array.length; i++) {
    tempArray.push(array[i] + sum);
  }
  return tempArray;
}
const b = arraylogger2(a, 1);
console.log(b);

//实现一个函数，接受一个Array和一个Function，对Array中的每一个元素作为传入Function的参数调用。
function forEach(array, callBack) {
  for (let i = 0; i < array.length; i++) {
    callBack(array[i]);
  }
}
function logger(value) {
  console.log(value);
}
forEach(a, logger);
