
const colors = ["green","red","orange","blue","rgba(133,220,220)","rgba(250,220,220)","rgba(133,150,220)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
	const randomNumber = getRandomNumber();
	console.log(randomNumber);
	document.body.style.backgroundColor = colors[randomNumber];
	color.textContent = colors[randomNumber];
});
function getRandomNumber(){return Math.floor(Math.random()*colors.length);}

function NextPage() {return window.location.href="pageTwo.html";}
function Homepage() {return window.location.href="Homepage.html";}