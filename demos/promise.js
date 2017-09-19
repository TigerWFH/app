// let p = new Promise((resolve, reject)=>{
//   // reject(123);
//   resolve(123);
// }).then(() => { 
//   console.log('p'); 
//   return 'p'; 
// });

// let p1 = new Promise((resolve, reject)=>{
//   // resolve(p);
//   reject(p);
// });

// p1.then(success=>{
//   console.log('success');
// }, error=>{
//   console.log('error', error);
// })
let target = {};
let handler = {};
let proxy = new Proxy(target, handler);
proxy.color = 'red';
console.log(target.color);