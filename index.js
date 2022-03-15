let colors = {
	i: 0,
	bodyBackground: [
		"#234479", "#c5bbb1"
	],
	itemBackground: [
		"#99a6b2", "#afc1d5"
	],
	white: [
		"#fff", "#fff"
	],
	selected: [
		"#efdcce", "#ccddd3"
	],
	stroke: [
		"#ff9a4d", "red"
	],
};
function applyColors(data=colors) {
	let colors = Object.keys(data);
	//remove the i from the [colors]
	colors.shift();
	for (const color of colors) {
		document.documentElement.style.setProperty(`--${color}`, data[color][data.i % 2])
	}
	data.i++;
	return data;
}
//start painting the page
colors = applyColors(colors);
	
var allLinks = document.querySelectorAll('a');
allLinks.forEach(l => l.target = '_blank');

document.querySelector('.description').onclick = () => {
   let e = document.querySelector('.skills');
   e.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
   });
};
document.querySelector('.face').onclick = () => {
	colors = applyColors(colors)
}

const hobbiesList = ['english', 'chess', 'gym', 'baseball', 'speedcubing'];
hobbiesList.forEach(h => {
	document.querySelector(`.${h}`).style.backgroundRepeat = 'no-repeat'
	document.querySelector(`.${h}`).style.backgroundSize = 'cover'
	document.querySelector(`.${h}`).style.borderRadius = '5px'
})
// if (window.innerWidth >= 1025) {
// 	hobbiesList.forEach(h => {
// 		document.querySelector(`.hobbies > .${h}`).onmouseover = () => {alert(0)
// 			document.querySelector(`.${h}`).style.backgroundImage = `./img/${h}.jpg`;
// 			document.querySelector(`.${h}`).style.backgroundRepeat = `no-repeat`;
// 			document.querySelector(`.${h}`).style.backgroundSize = `cover`;
// 			if (h === 'baseball')
// 				document.querySelector(`.${h}`).style.backgroundImage = `./img/${h}jfif`;
// 		}
// 		document.querySelector(`.hobbies > .${h}`).onmouseout = () => {alert(1)
// 			document.querySelector(`.${h}`).style.backgroundImage = `none`;
// 		}
// 	});
// }
hobbiesList.forEach(el => {
	if (window.innerWidth >= 1025) {
		document.querySelectorAll(`.${el}`).forEach((e, index) => e.onmouseover = () => {
			document.querySelectorAll(`.${el} > p`)[index].style.padding = '3px';
			document.querySelectorAll(`.${el} > p`)[index].style.borderRadius = '5px';
			document.querySelectorAll(`.${el} > p`)[index].style.background =
				document.documentElement.style.getPropertyValue('--itemBackground');
			document.querySelectorAll(`.${el}`)[index].style.border = 'none';
		})
		document.querySelectorAll(`.${el}`).forEach((e, index) => e.onmouseout = () => {
			document.querySelectorAll(`.${el} > p`)[index].style.padding = '0px';
			document.querySelectorAll(`.${el} > p`)[index].style.background = 'none';
			document.querySelectorAll(`.${el} > p`)[index].style.borderRadius = '0px';
			document.querySelectorAll(`.${el}`)[index].style.border = '3px solid black';
		})
	}
})

function copy(text) {
   const elem = document.createElement('textarea');
   elem.value = text;
   document.body.appendChild(elem);
   elem.select();
   document.execCommand('copy');
   document.body.removeChild(elem);
};
var gmail = 'hlophlop1245@gmail.com';

var gmailAnim = anime({
	targets: '.gmail',
	rotate: '1turn',
	duration: 2500,
	autoplay: false
})
document.querySelector('.gmail').onclick = () => {
   copy(gmail);
	gmailAnim.restart();
}
