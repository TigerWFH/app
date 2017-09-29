let Compile = require('./Compile');
let WebpackOptionsApply = require('./WebpackOptionsApply');

function webpack(options){
  console.log('run webpack ……');
  let compile = new Compile();
  let webpackOptionsApply = new WebpackOptionsApply();
  webpackOptionsApply.process(compile);
  compile.run();
}

webpack();