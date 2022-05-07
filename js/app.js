const img = document.querySelectorAll('img');
const name = document.querySelectorAll('profile-data, h3');
const email = document.querySelectorAll('.email');
const city = document.querySelectorAll('.city');
const phone = document.querySelectorAll('.phone');
const address = document.querySelectorAll('.address')
const birthday = document.querySelectorAll('.birthday');
const profile = document.querySelectorAll('.profile');

console.log(img);
console.log(name);
console.log(email);
console.log(city);
console.log(address);
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
        let phoneNumber = data[i].results[0].phone;
        phone[i].textContent = phoneNumber;
        let detailedAddress = `${data[i].results[0].location.street.number} ${data[i].results[0].location.street.name}, ${data[i].results[0].location.country} ${data[i].results[0].location.postcode}`
        address[i].textContent = detailedAddress
        let birth = data[i].results[0].dob.date;
        birthday[i].textContent = birth;
    }
};

getRandomUser(12)
    .then(getUserProfile)
    .catch(e => {
        alert('Something went wrong!');
        console.error(e)
    });
const popupImg = document.getElementById("pop-img");
const popupName = document.querySelectorAll('popup-profile-data, h4');
const popupEmail = document.querySelector('.popup-email');
const popupCity = document.querySelector('.popup-city');
const popupPhone = document.querySelector('.popup-phone');
const popupAddress = document.querySelector('.popup-address');
const popupBirthday = document.querySelector('.popup-birthday');
const close = document.querySelector('.close');
console.log(close)
const popupMoreProfileData = document.querySelector('.more-profile-data');
profile.forEach(profile => {
    profile.addEventListener('click', async (event) => {
        document.getElementById("overlay").style.display = "block";
        document.getElementById("popup").style.display = "grid";
        console.log(event.currentTarget)
        const img = event.currentTarget.firstElementChild;
        const name = img.nextElementSibling.firstElementChild;
        const email = name.nextElementSibling;
        const city = email.nextElementSibling;
        const phone = img.nextElementSibling.nextElementSibling.firstElementChild;
        const address = phone.nextElementSibling;
        const birthday = address.nextElementSibling;
        console.log(phone.textContent);
        popupImg.src = event.currentTarget.firstElementChild.firstElementChild.src;
        popupName[0].textContent = name.textContent;
        popupEmail.textContent = email.textContent;
        popupCity.textContent = city.textContent;
        popupPhone.textContent = phone.textContent;
        popupAddress.textContent = address.textContent
        popupBirthday.textContent = birthday.textContent;
    })
});

close.addEventListener('click', () => {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("popup").style.display = "none";
})