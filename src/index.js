// import '@babel/polyfill';
//1.同步的代码分割业务代码
// import _ from 'lodash';
// console.log(_.join(['sunny','Fan'],'*****'))

//2.异步业务代码分割
function getComponent(){
	return import('lodash').then(({default:_})=>{
		var div = document.createElement('div');
		div.innerHTML = _.join(['sunny','Fan'],'----')
		return div
	})
}

getComponent().then((value)=>{
	document.body.appendChild(value)
});