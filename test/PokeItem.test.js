  
import PokeItem from '../pokedex/PokeItem.js';
const test = QUnit.test;

QUnit.module('Render Pokemon Item');

test('renders html from data', assert => {
    // arrange
    const pokemon = {
        _id: '5cef3501ef6005a77cd4fd16',
        pokemon: 'venusaur',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
        pokebase: 'venusaur',
        pokedex: 'http://www.pokemon.com/us/pokedex/venusaur'
    };

    const expected = /*html*/`
        
    `;

    // act
    const props = { pokemon: pokemon };
    const pokeeItem = new PokeItem(props);
    const html = pokeeItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});