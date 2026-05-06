const user = {
    name: "hoang",
    address: {
        city: "HN",
        location: {
            lat: 123,
        },
    },
};

const newUser = { ...user };

newUser.address.location.lat = 999;

console.log(user.address.location.lat);
