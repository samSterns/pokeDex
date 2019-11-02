const URL = 'https://alchemy-pokedex.herokuapp.com';

export async function getPoke() {  
    const response = await fetch(URL);
    return await response.json();
}