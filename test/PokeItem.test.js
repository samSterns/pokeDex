  
import PokeItem from '../pokedex/PokeItem.js';
const test = QUnit.test;

QUnit.module('Render Pokemon Item');

test('renders html from data', assert => {
   
    const pokemon = {
        _id: '5cef3501ef6005a77cd4fd16',
        pokemon: 'venusaur',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
        pokebase: 'venusaur',
        pokedex: 'http://www.pokemon.com/us/pokedex/venusaur'
    };

    const expected = /*html*/ `
    <li class="individual-poke" id="${pokemon.id}">
        <div class="pokemon">${pokemon.pokemon}</div>
        <div class="type">${pokemon.pokebase}</div>
        <img src="${pokemon.url_image}" alt="${pokemon.pokemon}">
    </li>
    `;

 
    const props = { pokemon: pokemon };
    const pokeeItem = new PokeItem(props);
    const html = pokeeItem.renderHTML();
    

    assert.htmlEqual(html, expected);
});