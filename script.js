//complete this code
class Person {
	constructor(name:string,age:number){
		this.name=name;
		this.age=age;
	}

	get()
	{
		return name;
	}

	set()
	{
		return age;
	}
}

class Student extends Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}

	void study()
	{
		return name + " is studying";
	}
}

class Teacher extends Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}

	void teach()
	{
		return name+" is teaching"
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
