async function getRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    console.log(data)
    const name = data.results[0].name;
    console.log(name);
};

getRandomUser();