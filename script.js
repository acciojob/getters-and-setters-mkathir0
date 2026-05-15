//complete this code
class Person {

	public._name=name;
	public._age=age;
	
	constructor(name:string,age:number){
		this.name=name;
		this.age=age;
	}

	get name: string()
	{
		return this._name;
	}

	set age(age: number)
	{
		this._age=age;
	}
}

class Student extends Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}

	study():void
	{
		console.log(this.name + " is studying");
	}
}

class Teacher extends Person {
	constructor(name:string,age:number){
		super(name,age)
	}

	teach(): void
	{
		console.log(this.name+" is teaching")
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
