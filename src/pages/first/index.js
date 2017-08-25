
import Loadable from 'react-loadable';
import First from './container';
export default First;
/**
 * @description 高阶组件，延迟加载组件，只调用一次，系统会缓存结果
 * @loader {compoennt} 要延迟加载的组件
 * @render {Func(loader, props)} 可以定制延迟加载的组件(props)
 * @loading {null | component} 加载延迟组件时，渲染的mask,required
 * @delay {number,default=200ms} 和loading有关
 * @timeout {number} loading持续的时间，超时后关闭loading
 */
// export default Loadable({
//     loader: () => import('./container').then(
//         mod => {
//             console.log('loading finished!');
//             return mod;
//         }
//     ).catch(err => {
//         console.log(err);
//     }),
//     loading: () => null
// });