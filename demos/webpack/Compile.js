let Tapable = require('tapable');

class Compile extends Tapable{
  constructor(){
    super();
  }
  run(){
    console.log('compile.run ……');
    // this.applyPlugins('plugin1');
    // this.applyPlugins0('plugin1');
    // this.applyPlugins2('plugin1');
    // console.log(this.applyPluginsWaterfall('plugin1', 'monkey'));
    this.applyPluginsAsync('plugin1', ()=>{});
    // this.applyPluginsAsyncSeries('plugin2', ()=>{})//异常
    // this.applyPluginsAsyncSeries1('plugin2', ()=>{})//异常
    // this.applyPluginsAsyncSeriesBailResult('plugin2', ()=>{});//异常
    // this.applyPluginsAsyncWaterfall('plugin');
  }
}

module.exports = Compile;