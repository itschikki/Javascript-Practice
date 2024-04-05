// Q1. You are creating a website for your college. Create a class User with 2 properties, name &
// email. It also has a method called viewData( ) that allows user to view website data.

class User{
  constructor(name,email){
    this.name= name;
    this.email=email;
  }
  viewData(){
    console.log("Website data");
  }
}

let student1 = new User("Durga","123@gmail.com");


/*Create a new class called Admin which inherits from User. Add a new method called
editData to Admin that allows it to edit website data.*/

class Admin extends User{
  constructor(name,email){
    super(name,email);
  }
  editData(){
    console.log("Edited Website Data");
  }
}

let student2 = new  Admin ("John", "1234@yahoo.com");