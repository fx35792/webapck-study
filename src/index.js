// import '@babel/polyfill';
//1.同步的代码分割业务代码
// import _ from 'lodash';
// console.log(_.join(['sunny','Fan'],'*****'))

//2.异步业务代码分割
// function getComponent(){
// 	return import(/* webpackChunkName:"lodash" */'lodash').then(({default:_})=>{
// 		var div = document.createElement('div');
// 		div.innerHTML = _.join(['sunny','Fan'],'----')
// 		return div
// 	})
// }

// getComponent().then((value)=>{
// 	document.body.appendChild(value)
// });

//方法二 async await 的写法
async function getComponent() {
    const { default: _ } = await import('lodash')
    const element = document.createElement('div');
    element.innerHTML = _.join(['sunny', 'Fan'], '-');
    return element
}

document.addEventListener('click', () => {
    getComponent().then((value) => {
        document.body.appendChild(value)
    })
})