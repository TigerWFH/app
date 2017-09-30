let webpack = require('./webpack');
(function(){
  function processOptions(options){
    let compiler = null;
    compiler = webpack(options);
    console.log(Object.prototype.toString.apply(compiler));
    try {
      compiler = webpack(options);
      console.log(compiler);
      console.log(typeof compiler.run);
    }
    catch(e){

    }
    let isWatch = false;
    if (isWatch){
      compiler && compiler.watch();
    }
    else{
      compiler&&compiler.run();
    }
  }
  let options = {
    output: {
      path: "path"
    }
  };
  processOptions(options);
}());