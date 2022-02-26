var allLinks = document.querySelectorAll('a');
allLinks.forEach(l => l.target = '_blank')

document.querySelector('.description').onclick = () => {
   let e = document.querySelector('.skills');
   e.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
   });
};
document.querySelector('.face').onclick = () => {
   let e = document.querySelector('.hobbies');
   e.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest"
   });
}

const hobbiesList = ['english', 'chess', 'gym', 'baseball', 'speedcubing'];
hobbiesList.forEach(el => {
	if (window.innerWidth >= 1050) {
		document.querySelector(`.${el}`).onmouseover = () => {
			document.querySelector(`.${el} > p`).style.padding = '3px';
			document.querySelector(`.${el} > p`).style.borderRadius = '5px';
			document.querySelector(`.${el} > p`).style.background = '#ccddd3';
			document.querySelector(`.${el}`).style.border = 'none';
		}
		document.querySelector(`.${el}`).onmouseout = () => {
			document.querySelector(`.${el} > p`).style.padding = '0px';
			document.querySelector(`.${el} > p`).style.background = 'none';
			document.querySelector(`.${el} > p`).style.borderRadius = '0px';
			document.querySelector(`.${el}`).style.border = '3px solid black';
		}
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
