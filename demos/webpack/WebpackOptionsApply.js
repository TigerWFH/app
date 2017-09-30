/**
 * WebpackOptionsApply：
 *    该类负责plugin的注册，会根据options.target值进行不同的事件注册
 *    相当于负责了整个webpack的事件流主从顺序
 */

 let OptionsApply = require('./OptionsApply');

class WebpackOptionsApply extends OptionsApply{
  constructor(){
    super();
  }
  process(options, compiler){
    // let ExternalsPlugin;
    // compiler.outputPath = options.output.path;
    // compiler.recordsInputPath = options.recordsInputPath || options.recordsPath;
    // compiler.recordsOutputPath = options.recordsOutputPath || options.recordsPath;
    // compiler.name = options.name;
    // compiler.dependencies = options.dependencies;

    if (typeof options.target === "string"){
      // 此部分是根据target定制的plugin
      let JsonpTemplatePlugin;
      let NodeSourcePlugin;
      let NodeTargetPlugin;
      let NodeTemplatePlugin;
      switch(options.target){
        case 'web':
        break;
        case 'webworker':
        break;
        case 'node':
        case 'async-node':
        break;
        case 'node-webkit':
        break;
        case 'atom':
        case 'electron':
        case 'electron-main':
        break;
        case 'electron-renderer':
        break;
        default:
        throw new Error("Unsupported target '" + options.target + "'.");
      }
    }
    else if (options.target !== false){
      // options.target(compiler);
    }
    else{
      throw new Error("Unsupported target '" + options.target + "'.");
    }
    // if (options.output.library || options.output.libraryTarget !== "var"){
    //   // lib 专用plugin
    // }
    // if (options.externals){

    // }

    // common plugins
    // compiler.apply(new EntryOptionPlugin());
    let p1 = new Plugin1();
    let p11 = new Plugin11();
    let p2 = new Plugin2();
    let p3 = new Plugin3();
    let p4 = new Plugin4();
    compiler.apply(p1, p2, p3, p4, p11);
  }
}
class Plugin1{
  apply(compile){
    compile.plugin('plugin1', function(){
      console.log('plugin1 ……');
      arguments[0]();
    });
  }
}
class Plugin11{
  apply(compile){
    compile.plugin('plugin1', (error)=>{
      console.log('plugin11 ……');
    });
  }
}
class Plugin2{
  apply(compile){
    compile.plugin('plugin2', (error)=>{
      console.log('plugin2 ……');
    });
  }
}
class Plugin3{
  apply(compile){
    compile.plugin('plugin3', (error)=>{
      console.log('plugin3 ……');
    });
  }
}
class Plugin4{
  apply(compile){
    compile.plugin('plugin4', (error)=>{
      console.log('plugin4 ……');
    });
  }
}
module.exports = WebpackOptionsApply;