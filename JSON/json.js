const jsonString = `[
  {
    "id": 101,
    "name": "Alice Rahman",
    "email": "alice.rahman@example.com",
    "isActive": true,
    "joined": "2023-06-15T09:30:00Z",
    "roles": ["admin", "editor"],
    "profile": {
      "age": 29,
      "location": "Dhaka",
      "preferences": {
        "theme": "dark",
        "notifications": true
      }
    }
  },
  {
    "id": 102,
    "name": "Tanvir Ahmed",
    "email": "tanvir.ahmed@example.com",
    "isActive": false,
    "joined": "2022-11-03T14:45:00Z",
    "roles": ["viewer"],
    "profile": {
      "age": 35,
      "location": "Chittagong",
      "preferences": {
        "theme": "light",
        "notifications": false
      }
    }
  },
  {
    "id": 103,
    "name": "Nadia Islam",
    "email": "nadia.islam@example.com",
    "isActive": true,
    "joined": "2024-01-20T08:00:00Z",
    "roles": ["editor"],
    "profile": {
      "age": 26,
      "location": "Sylhet",
      "preferences": {
        "theme": "dark",
        "notifications": true
      }
    }
  },
  {
    "id": 104,
    "name": "Fahim Chowdhury",
    "email": "fahim.chowdhury@example.com",
    "isActive": true,
    "joined": "2023-09-10T17:20:00Z",
    "roles": ["admin"],
    "profile": {
      "age": 31,
      "location": "Khulna",
      "preferences": {
        "theme": "light",
        "notifications": true
      }
    }
  },
  {
    "id": 105,
    "name": "Sadia Karim",
    "email": "sadia.karim@example.com",
    "isActive": false,
    "joined": "2021-04-25T12:10:00Z",
    "roles": [],
    "profile": {
      "age": 40,
      "location": "Rajshahi",
      "preferences": {
        "theme": "dark",
        "notifications": false
      }
    }
  }
]`;

const users = JSON.parse(jsonString);
console.log(users[0].profile.location);
users
  .filter((user) => !user.isActive)
  .map((user) => console.log(`Name: ${user.name} age: ${user.profile.age}`));

console.log(JSON.stringify(users, null, 2));
console.log(JSON.stringify(users, ["name", "email"], "\t"));
// JSON.stringify(value, replacer, space)
// JSON.parse(text, reviver)
const modifiedUsers = JSON.parse(jsonString, (user)=>{user.name, user.profile.age})
console.log(modifiedUsers)