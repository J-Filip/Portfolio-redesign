module.exports =  async function () {
    let fetched = await fetch('https://swapi.dev/api/people/')
    let data = await fetched.json()
    console.log(data);
    return data;
}

console.log('daad');