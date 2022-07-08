const car=document.getElementById("canvas");
const ctx=car.getContext("2d");
const limit = 0.004;

let x = 145, y=70;
let speed, a=0.0005;

function animate(){
	speed = 0;
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.beginPath();
	ctx.rect(x,y,5,10);
	ctx.fill();
	ctx.stroke();
	document.addEventListener('keydown', e =>{
		speed += a;
		if(e.keyCode === 87){
			y-=speed;
		}
		if(e.keyCode === 83){
			y+=speed;
		}
		if(e.keyCode === 65){
			x-=speed;
		}
		if(e.keyCode === 68){
			x+=speed;
		}
		if(speed>limit){
			speed=limit;
		}
	});
	document.addEventListener('keyup', e =>{
		speed += a;
		if(e.keyCode === 87){
			y-=speed;
		}
		if(e.keyCode === 83){
			y+=speed;
		}
		if(e.keyCode === 65){
			x-=speed;
		}
		if(e.keyCode === 68){
			x+=speed;
		}
		speed*=0.8;
	});
}

animate();
