class Worker{
	constructor(name, surname, hourRate, hours){
		this.name = name;
		this.surname = surname;
		this.hourRate = hourRate;
		this.hours = hours;
	}
	getSalary(){
		console.log((this.hourRate * this.hour));
	}
	

}
let worker = new Worker('Ion', 'Creangă', 10, 176); 

console.log(worker.name); //afișează 'Ion' 
console.log(worker.surname); //afișează 'Creangă' 
console.log(worker.hourRate); //afișează 10 
console.log(worker.hours); //afișează 31 
console.log(worker.getSalary()); //afișează 1760 = 10*176

let worker1 = new Worker('Mihai', 'Crihan', 24, 433); 
let worker2 = new Worker('Petru', 'Fanranume', 8, 80); 





worker.getSalary();

















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

