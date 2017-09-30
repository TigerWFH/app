let Compiler = require('./Compiler');
let WebpackOptionsApply = require('./WebpackOptionsApply');
let NodeEnviromentPlugin = require('./NodeEnvironmentPlugin');

function webpack(options){
  // 1、 校验参数的完整有效性
  // code here
  let compiler = null;
  if (Array.isArray(options)){
    // 当参数是配置数组时，处理多个webpack返回实例
  }
  else if (typeof options === 'object'){
    // 处理单配置运行
    // 2、 补充默认参数 
    // to code here---> new WebpackOptionsDefaulter().process(options);
    // 3、 实例化编译器，并初始化部分参数
    compiler = new Compiler();
    compiler.context = options.context;//工作目录
    compiler.options = options;//配置参数
    // 4、 初始化compiler IO参数，并注册"before-run"
    let nodeEnviromentPlugin = new NodeEnviromentPlugin();
    nodeEnviromentPlugin.apply(compiler);
    // 5、 调用配置中的插件(这些插件是webpack初始化环境之前所做的准备工作)
    if (options.plugins && Array.isArray(options.plugin)){
      compiler.apply.apply(compiler, options.plugins);
    }
    // 这两个事件没有找到webpack运行之前的注册信息(......)
    compiler.applyPlugins('environment');
    compiler.applyPlugins('after-environment');
    // 6、注册各种事件
    let webpackOptionsApply = new WebpackOptionsApply();
    webpackOptionsApply.process(options, compiler);
  }
  else{
    throw new Error("无效的参数：options");
  }

  return compiler;
}

exports = module.exports = webpack;

