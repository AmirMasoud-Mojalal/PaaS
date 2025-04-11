const obj = {
  a: '1',
  content:[
    [{c:'2'},{d:'3'}]
  ]
  // b: {
  //   b2: '2',
  //   b3: '3',
  // },
  // c: '4',
};

console.log(obj);

const newContent = [[[{x:'y'}]]]
// console.log(newContent);

// const a = [...obj.content, ...newContent]
// console.log(a);

const newObj = {
  ...obj,
  ...(true && [ newContent ]), // b:  && {...obj.b}
};
// console.log(obj);
console.log(newObj);

