class Worker{
	constructor(name, surname, hourRate, hours){
		this.name = name;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
	}
	getSalary(){
		return (this.hourRate * this.hours);
	}
	getName(){
		return this.name;
	}
	getSurName(){
		return this.surname;
	}
	getHourRate(){
		return this.hourRate;
	}
	getHours(){
		return this.hours;
	}

	

}
let worker1 = new Worker('Mihai', 'Crihan', 24, 220); 
console.log(worker1.name); 
console.log(worker1.surname); 
console.log(worker1.hourRate); 
console.log(worker1.hours); 
console.log(worker1.getSalary());

let worker2 = new Worker('Petru', 'Faranume', 8, 80); 
console.log(worker2.name); 
console.log(worker2.surname); 
console.log(worker2.hourRate); 
console.log(worker2.hours); 
console.log(worker2.getSalary());

if(worker1.getSalary() > worker2.getSalary()){
	console.log(worker1.name + ' are mai mult ca ' + worker2.name + 'cu ' + (worker1.getSalary()-worker2.getSalary()));
} else {
	console.log(worker2.name + ' are mai mult ca ' + worker1.name + 'cu ' + (worker2.getSalary()-worker1.getSalary()));
}



// worker.getSalary();

















	// 	run(){
// 		console.log(this.type + ' started.');
// 		this.loadBIOS();
		
// 		if(this.checkHardwareForRun()){
// 			console.log('Hardware test OK');
// 			/*console.log('Motherboard: ' + this.motherboard);
// 			console.log('CPU: ' + this.cpu);
// 			console.log('RAM: ' + this.ram);
// 			console.log('GPU: ' + this.gpu);*/
// 		}else{
// 			console.log('Error. Hardware test failed')
// 			return false;
// 		}
// 		this.startOS();
// 		return true;
// 	}

// 	loadBIOS(){
// 		console.log('BIOS loaded');
// 	}

// 	checkHardwareForRun(){
// 		if(this.cpu !== null && this.cpu !== undefined && this.cpu !== '')
// 			return true;
// 		return false;
// 	}

// 	startOS(){
// 		console.log('OS ' + this.os + ' loaded');
// 	}

// 	startGame(){
// 		if(this.checkHardwareForGame())
// 			console.log('Game started');
// 		else
// 			console.log('Error. Game can not be started. Not enough RAM');
// 	}

// 	checkHardwareForGame(){
// 		if(this.ram.ddr >= 4 && this.ram.capacity >= 32)
// 			return true;
// 		return false;
// 	}
// }

// class Laptop extends PC{
// 	constructor(params){
// 		/*http://jsraccoon.ru/es6-classes*/
// 		super(params);
// 		this.type = 'Laptop';
// 	}

// 	checkHardwareForRun(){
// 		if(super.checkHardwareForRun() && this.hasDisplay()){
// 			return true;
// 		}
// 		return false;

// 	}

// 	hasDisplay(){
// 		return this.display !== null && this.display !== '' && this.display  !== undefined;
// 	}
// }

// class DesktopPC extends PC{
// 	constructor(params){
// 		super(params);
// 		this.type = 'DesktopPC';		
// 	}
// }

// let laptop = new Laptop({
// 	'motherboard': 'Gigabyte', 
// 	'cpu': 'Intel Core i7', 
// 	'ram': {
// 		'brand': 'Kingston',
// 		'ddr': 4,
// 		'frequency': 3000,	
// 		'capacity': 64
// 	}, 
// 	'gpu': 'GeForce 1080',
// 	'os': 'iOS',
// 	'display': null
// });
// let desktopPC = new DesktopPC({
// 	'motherboard': 'ASUS', 
// 	'cpu': 'AMD Ryzen', 
// 	'ram': {
// 		'brand': 'Hynix',
// 		'ddr': 4,
// 		'frequency': 1600,
// 		'capacity': 33
// 	},
// 	'gpu': 'ADD Radeon VII7',
// 	'os':' Android'
// });


// if(laptop.run())
// 	laptop.startGame();

// console.log('===================================');

// if(desktopPC.run())
// 	desktopPC.startGame();

