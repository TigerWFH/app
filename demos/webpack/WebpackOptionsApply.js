class WebpackOptionsApply{
  constructor(){
  }
  process(compile){
    let p1 = new Plugin1();
    let p11 = new Plugin11();
    let p2 = new Plugin2();
    let p3 = new Plugin3();
    let p4 = new Plugin4();
    compile.apply(p1, p2, p3, p4, p11);
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