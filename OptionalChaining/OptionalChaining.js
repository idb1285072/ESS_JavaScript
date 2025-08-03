const alice = {
  profile: {
    name: "Alice"
  }
};

const name = alice?.profile?.name; // "Alice"
const age = alice?.details?.age;   // undefined (no error)

const numbers = [10, 20, 30];
console.log(numbers?.[8]);
console.log(numbers[8]);

const user = {
  id: 1293,
  name: "Murad",
  address: {
    street: "No. 9 Getreidegasse",
    city: "Salzburg",
    geo: {
      lat: 47.6454,
      long: 13.645,
    },
  },
};
// const lat = user.address && user.address.geo && user.address.geo.lat;
const lat = user?.address?.geo?.lat;
console.log(lat);
console.log(user.move?.());

// videoPlayer?.play?.();
// don't use on undefined variable

const users = [
  {
    name: "Murad",
    address: {
      city: "Dhaka",
      state: null,
      zip: null,
    },
    password: "somehash",
  },
  {
    name: "Raj",
    password: "raj@113",
  },
];

users.forEach((user) => {
  // console.log(user.address ? user.address.city : "");
  // console.log(user.address&&user.address.city);
  console.log(user.address?.city);
});
users.array?.[1];
users.getPassword?.();

const city = users[1].address?.city ?? "Dhaka";
console.log(city);
