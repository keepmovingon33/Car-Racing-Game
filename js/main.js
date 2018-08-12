var speed = document.getElementById('speed');
var score = document.getElementById('score');
var background = document.getElementById('background');
var start = document.getElementById('bttStart');
var playGame = false;
var playAnimation = requestAnimationFrame(play);
var setup;

var keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowLeft: false,
	ArrowRight: false
}

start.addEventListener('click', startGame);
document.addEventListener('keydown', pressKeyOn);
document.addEventListener('keyup', pressKeyOff);




function startGame(){
	console.log('lets play');
	start.style.display = 'none';
	var tree1 = document.createElement('div');
	tree1.setAttribute('id', 'tree1');
	// tree1.x = 180;
	// tree1.y = 80;
	background.appendChild(tree1);

	var tree2 = document.createElement('div');
	tree2.setAttribute('id', 'tree2');
	// tree1.x = 180;
	// tree1.y = 80;
	background.appendChild(tree2);
	
	var tree3 = document.createElement('div');
	tree3.setAttribute('id', 'tree3');
	// tree1.x = 180;
	// tree1.y = 80;
	background.appendChild(tree3);

	var tree4 = document.createElement('div');
	tree4.setAttribute('id', 'tree4');
	// tree1.x = 180;
	// tree1.y = 80;
	background.appendChild(tree4);
	
	var tree6 = document.createElement('div');
	tree6.setAttribute('id', 'tree6');
	// tree1.x = 180;
	// tree1.y = 80;
	background.appendChild(tree6);

	var tree5 = document.createElement('div');
	tree5.setAttribute('id', 'tree5');
	// tree1.x = 180;
	// tree1.y = 80;
	background.appendChild(tree5);

	
	var temp = document.createElement('div');
	temp.setAttribute('id', 'playerCar');
	temp.x = 250;
	temp.y = 300;
	background.appendChild(temp);
	playGame = true;

	requestAnimationFrame(play);

	setup = {
	element: temp,
	speed: 9,
	gameScore: 0,
	winnerScore: 10,
	// roadwidth: 250
}

}

function play(){
	if (playGame){
		update();
		treeMoving();
		///movement
		if(keys.ArrowUp && setup.element.y >0){
			setup.element.y -= 2;
		}
		if(keys.ArrowDown && setup.element.y < 420){
			setup.element.y += 2;
		}
		if(keys.ArrowRight && setup.element.x < 413){
			setup.element.x += 2;
			
		}
		if(keys.ArrowLeft && setup.element.x > 151){
			setup.element.x -= 2;
			
		}

		setup.element.style.top = setup.element.y + 'px';
		setup.element.style.left = setup.element.x + 'px';
	 }
	playAnimation = requestAnimationFrame(play);
}

function treeMoving(){
	var move1 = document.getElementById('tree1');
	var move2 = document.getElementById('tree2');
	var move3 = document.getElementById('tree3');
	var move4 = document.getElementById('tree4');
	var move5 = document.getElementById('tree5');
	var move6 = document.getElementById('tree6');

	var num1 = move1.offsetTop;
	var num2 = move2.offsetTop;
	var num3 = move3.offsetTop;
	var num4 = move4.offsetTop;
	var num5 = move5.offsetTop;
	var num6 = move6.offsetTop;

	if(num1 <  420){
		num1 = num1 + 3;
	}
	else{
		num1 = 0;
	}
	if(num2 <  420){
		num2 = num2 + 3;
	}
	else{
		num2 = 0;
	}
	if(num3 <  420){
		num3 = num3 + 3;
	}
	else{
		num3 = 0;
	}
	if(num4 <  420){
		num4 = num4 + 3;
	}
	else{
		num4 = 0;
	}
	if(num5 <  420){
		num5 = num5 + 3;
	}
	else{
		num5 = 0;
	}
	if(num6 <  420){
		num6 = num6 + 3;
	}
	else{
		num6 = 0;
	}
	move1.style.top = num1 + 'px';
	move2.style.top = num2 + 'px';
	move3.style.top = num3 + 'px';
	move4.style.top = num4 + 'px';
	move5.style.top = num5 + 'px';
	move6.style.top = num6 + 'px';
}



function update(){
	score.innerHTML = setup.gameScore;
	speed.innerHTML = setup.speed;
}

function pressKeyOn(event){
	event.preventDefault();
	console.log(event.key);
	keys[event.key] = true;
}

function pressKeyOff(event){
	event.preventDefault();
	console.log(keys);
	keys[event.key] = false;
}