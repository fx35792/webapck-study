function GetIconFont(){
	const dom = document.getElementById('root');
	const iconDiv = document.createElement('div');
	iconDiv.classList.add('iconfont', 'icon-huiyuan');
	dom.append(iconDiv);
}
export default GetIconFont;