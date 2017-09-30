/**
 * NodeEnvironmentPlugin：
 *    1、负责初始化部分compiler成员函数
 *    2、并注册before-run事件
 */ 

 class NodeEnvironmentPlugin{
   apply(compiler){
     compiler.inputFileSystem = 'inputFileSystem';
     const inputFileSystem = compiler.inputFileSystem;
     compiler.outFileSystem = 'outFileSystem';
     compiler.watchFileSystem = 'watchFileSystem';
     compiler.plugin("before-run", (compiler, callback)=>{
       if (compiler.inputFileSystem === inputFileSystem){
        //  inputFileSystem.purge();
         callback();
       }
     })
   }
 }

 module.exports = NodeEnvironmentPlugin;