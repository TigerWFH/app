/**
 * 说明：
 *    所有的同步触发函数，都会执行所有注册的事件处理函数；
 *    所有异步的触发函数，都需要被注册的事件处理函数显式调用下一个事件处理函数，才能执行（第一个注册的会被直接执行）。
 *      且当满足某一特定条件时，会终止后续事件处理函数的执行。
 */ 


/**
 * @desc 同步执行注册在name下的事件处理函数，并给所有事件处理函数传入匿名参数args
 * @name {string} 插件名;当name不存在时，不执行，不报错。
 * @...args {any} 匿名参数
 */ 
Tapable.prototype.applyPlugins(name, ...args);
/**
 * @desc 匿名参数改为命名参数
 */ 
Tapable.ptototype.applyPlugins0(name);
Tapable.ptototype.applyPlugins1(name, param);
Tapable.ptototype.applyPlugins2(name, param1, param2);




/**
 * @desc 同步执行注册在name下的事件处理函数（先进先执行），给第一个事件处理函数传入命名参数init和匿名参数args，
 *        给后续的事件处理函数传入参数args以及上一个事件处理函数的返回值result。函数最终返回最后一个事件处理函数
 *        的返回值result。
 * @name {string} 插件名；如果name不存在，返回init。
 * @init 传递参数的第一个
 * @...args 匿名参数
 * @return 返回最后一个函数的执行结果result。
 */ 
Tapable.prototype.applyPluginsWaterfall(name, init)
/**
 * @desc 匿名参数改为命名参数
 */ 
Tapable.prototype.applyPluginsWaterfall0(name, init)
Tapable.prototype.applyPluginsWaterfall1(name, init, param)
Tapable.prototype.applyPluginsWaterfall2(name, init, param1, param2)



/**
 * @desc 同步执行注册在name下的所有事件处理函数，给事件处理函数传入匿名参数args。如果事件处理函数返回值result，不等于undefined，
 *        返回result并终止后续事件处理函数的执行。
 * @name {string} 插件名;当name不存在时，不执行，不报错。
 * @...args 匿名参数
 * @return 若有函数返回值非undefined，则返回该结果，否者不返回
 */ 
Tapable.prototype.applyPluginsBailResult(name);
/**
 * @desc 匿名参数改为命名参数
 */ 
Tapable.prototype.applyPluginsBailResult1(name, param);
Tapable.prototype.applyPluginsBailResult2(name, param1, param2);
Tapable.prototype.applyPluginsBailResult3(name, param1, param2, param3);
Tapable.prototype.applyPluginsBailResult4(name, param1, param2, param3, param4);
Tapable.prototype.applyPluginsBailResult5(name, param1, param2, param3, param4, param5);



/**
 * @desc 异步执行注册在name下的所有事件处理函数。给事件处理函数传入匿名参数args（最后一个是callback），并按注册顺序执行事件处理函数
 *       （后续的事件处理函数需要在之前的事件处理函数中显式的调用args传入的callback，才能被调用）。
 *        当所有事件处理函数被执行后，会调用callback函数。
 * @name {string} 插件名；如果name不存在，则返回callback()执行结果。
 * @...args {any} 匿名参数
 * @callback {(err?:Error)=>void}
 */ 
Tapable.prototype.applyPluginsAsync(name)
Tapable.prototype.applyPluginsAsyncSeries(name)
/**
 * @desc 匿名参数改为命名参数
 */ 
Tapable.prototype.applyPluginsAsyncSeries1(name, param, callback)



/**
 * @desc 异步执行注册在name下的函数，第一个函数传入参数param，callback属性，且args最后一个值是一个调用下一个函数的callback，
 *        如果前一个函数不显示调用该callback，则不执行下一个函数。
 * @name 插件名；如果name不存在，则返回callback()执行结果。
 * @param 
 * @callback 也就是说后续的函数需要前面的函数在回掉中显式调用，才会执行（不明白这么设计的原因）。
 */ 
Tapable.prototype.applyPluginsAsyncSeriesBailResult(name)
Tapable.prototype.applyPluginsAsyncSeriesBailResult1(name, param, callback)


/**
 * @desc 异步执行注册在name下的所有事件处理函数。给事件处理函数传递参数current和callback。current初始值为init，之后为事件处理函数的返回值，
 *        当执行完所有的事件处理函数后，执行callback。如果有事件处理函数传递了err参数，终止后续事件处理函数的执行且执行callback(err)。
 * @name {string} 插件名
 * @init {any}
 * @callback {err=>void}
 */ 
Tapable.prototype.applyPluginsAsyncWaterfall(name, init, callback)

/**
 * @desc
 * @name {string}
 * @...args {any}
 * @callback {err=>void}
 */ 
Tapable.prototype.applyPluginsParallel(name, args, callback)



Tapable.prototype.applyPluginsParallelBailResult(name)
Tapable.prototype.applyPluginsParallelBailResult1(name, param, callback)


Tapable.prototype.hasPlugins(name)
Tapable.prototype.plugin(name, fn)
Tapable.prototype.apply()