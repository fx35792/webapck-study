import imgUrl from '../tab2-ico1.png';

function GetImg(){
	var dom = document.getElementById('root');
	var img = new Image();
	console.log(imgUrl);
	img.src = imgUrl;
	img.classList.add('banner');
	dom.append(img);
}

export default GetImg;