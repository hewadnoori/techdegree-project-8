const img = document.querySelectorAll('img');
const name = document.querySelectorAll('h3');
const email = document.querySelectorAll('.email');
const city = document.querySelectorAll('.city');
const profile = document.querySelectorAll('.profile');
console.log(img);
console.log(name);
console.log(email);
console.log(city);
console.log(profile);
const profiles = [];

async function getRandomUser(userAmount) {

    for (let i = 0; i < userAmount; i++) {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        profiles.push(data);
    }
    return profiles;
};
async function getUserProfile(data) {
    console.log(data);
    const names = data.map(people => people.results.name);
    for (let i = 0; i < data.length; i++) {
        let person = `${data[i].results[0].name.first} ${data[i].results[0].name.last}`;
        // name[i].innerHTML = `<h3>${person}</h3>`; another way to do it
        name[i].textContent = person;
        let emailAddress = data[i].results[0].email;
        email[i].textContent = emailAddress;
        let cityLocation = data[i].results[0].location.city;
        city[i].textContent = cityLocation;
        let image = data[i].results[0].picture.large;
        img[i].src = image;
    }
};

getRandomUser(12)
    .then(getUserProfile)
    .catch(e => {
        alert('Something went wrong!');
        console.error(e)
    });

profile.forEach(profile => {
    profile.addEventListener('click', async (event) => {
        console.log('it worked!');
    })
});