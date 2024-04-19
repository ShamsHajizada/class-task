// 1-task

// class Animal {
//   constructor(name, birthDate, gender) {
//     this.name = name;
//     this.birthDate = birthDate;
//     this.gender = gender;
//   }
//   getAge() {
//     return new Date().getFullYear() - this.birthDate;
//   }
// }

// class Cat extends Animal {
//   constructor(name, birthDate, gender, weight, color) {
//     super(name, birthDate, gender);
//     this.weight = weight;
//     this.color = color;
//   }
//   getInfo() {
//     return `name is ${this.name},birthDate is ${this.birthDate},color is ${this.color}`;
//   }
// }

// const cat = new Cat("garfield", 2017, "male", "6kq", "orange");
// const animal = new Animal("garfield", 2017, "female");

// console.log(cat.getInfo());
// console.log(cat.getAge());

// 2-task

class Human {
  constructor(name, surname, gender, nationality, age = 0) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.nationality = nationality;
    this.age = age;
  }

  getFullName() {
    return `name is ${this.name}, ${this.surname}`;
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}

class User extends Human {
  isLogged = false;
  constructor(
    name,
    surname,
    gender,
    nationality,
    age,
    userName,
    email,
    isAdmin,
    password,
    bio,
    isLogged
  ) {
    super(name, surname, gender, nationality, age);
    this.userName = userName;
    this.email = email;
    this.isAdmin = isAdmin;

    if (password.length < 5) {
      window.alert("password should be at least 5 length!");
    } else {
      this.password = password;
    }

    if (bio.length > 30) {
      window.alert("bio should at max 100 chars!");
    } else {
      this.bio = bio;
    }
  }
}

const shams = new User(
  "shams",
  "hajizada",
  "female",
  "azerbaijan",
  "20",
  "shams_haji",
  "shams_haji@code.edu.az",
  "shams_haji",
  "12345678",
  "bio",
  "logged"
);

console.log(shams);

let users = [
  new User(
    "John",
    "Doe",
    "Male",
    "American",
    "johndoe",
    "john.doe@example.com",
    false,
    "password123",
    "A bit about John.",
    30
  ),
  new User(
    "Jane",
    "Doe",
    "Female",
    "British",
    "janedoe",
    "jane.doe@example.com",
    true,
    "securepassword",
    "Jane's bio goes here.",
    28
  ),
  new User(
    "Alex",
    "Smith",
    "Non-binary",
    "Canadian",
    "alexsmith",
    "alex.smith@example.com",
    false,
    "alexspassword",
    "All about Alex.",
    35
  ),
  new User(
    "Emily",
    "Clark",
    "Female",
    "Australian",
    "emilyclark",
    "emily.clark@example.com",
    false,
    "emilyspassword",
    "Explorer and photographer.",
    26
  ),
  new User(
    "Michael",
    "Brown",
    "Male",
    "German",
    "michaelbrown",
    "michael.brown@example.com",
    true,
    "michaelspass",
    "Coffee enthusiast. Avid reader.",
    32
  ),
  new User(
    "Luis",
    "Gomez",
    "Male",
    "Spanish",
    "luisgomez",
    "luis.gomez@example.com",
    false,
    "luispassword",
    "Music lover, Guitar player.",
    29
  ),
  new User(
    "Sophia",
    "Lopez",
    "Female",
    "Mexican",
    "sophialopez",
    "sophia.lopez@example.com",
    true,
    "sophiaspassword",
    "Digital marketer and content creator.",
    31
  ),
];