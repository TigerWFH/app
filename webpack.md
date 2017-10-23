# webpack 打包后的代码形式
```
(function(modules){
/* code here */
})
([
  (function(module, exports){}),
  (function(module, exports {}),
  (function(module, exports {})
  /*更多import包*/
])
```
# webpack的import本质是什么?
  就是拷贝代码
```
```