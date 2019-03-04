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
	getSurname(){
		return this.surname;
	}
	getRate(){
		return this.hourRate;
	}
	getHours(){
		return this.hours;
	}
	increaseSalary(x){
		this.hourRate += x;
	}
	setTax(x){
		this.x=1-x/100;
	}
	
	getSalaryNetto(){
		return(this.getSalary()*this.x);
	}

}
let worker1 = new Worker('Mihai', 'Crihan', 24, 220); 
console.log(worker1.getName()); 
console.log(worker1.getSurname());
console.log(worker1.getRate()); 
console.log(worker1.getHours()); 
console.log(worker1.getSalary());
worker1.increaseSalary(2); 
console.log(worker1.getSalary()); 
worker1.setTax(18);
console.log(worker1.getSalaryNetto()); 

let worker2 = new Worker('Petru', 'Faranume', 8, 81); 
console.log(worker2.getName()); 
console.log(worker2.getSurname());
console.log(worker2.getRate()); 
console.log(worker2.getHours()); 
console.log(worker2.getSalary()); 
worker2.increaseSalary(2); 
console.log(worker2.getSalary());
worker2.setTax(18);
console.log(worker2.getSalaryNetto()); 





if(worker1.getSalary() > worker2.getSalary()){
	console.log(worker1.name + ' are mai mult ca ' + worker2.name + 'cu ' + (worker1.getSalary()-worker2.getSalary()));
} else {
	console.log(worker2.name + ' are mai mult ca ' + worker1.name + 'cu ' + (worker2.getSalary()-worker1.getSalary()));
}
console.log('=========================================================================================================================================================');
var workers =[3];
worker1 = new Worker('Mihai', 'Crihan', 24, 220); 
worker2 = new Worker('Petru', 'Faranume', 8, 81); 
worker3 = new Worker('Gabi', 'Emciuk', 10, 100);

workers[0] = worker1;
workers[1] = worker2;
workers[2] = worker3;

	for(let i = 0; i < 3; i++){
		console.log(workers[i].getName()); 
		console.log(workers[i].getSurname());
		console.log(workers[i].getRate()); 
		console.log(workers[i].getHours()); 
		console.log(workers[i].getSalary()); 
		workers[i].increaseSalary(2); 
		console.log(workers[i].getSalary());
		workers[i].setTax(18);
		console.log(workers[i].getSalaryNetto()); 


	}