  
import PokeItem from '../pokedex/PokeItem.js';
const test = QUnit.test;

QUnit.module('Render Pokemon Item');

test('renders html from data', assert => {
    // arrange
    const movie = {
        _id: "5cef3501ef6005a77cd4fd16",
        pokemon: "venusaur",
        url_image: "http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
        pokebase: "venusaur",
        pokedex: "http://www.pokemon.com/us/pokedex/venusaur",
},

    const expected = /*html*/`
        <li class="individual-poke">
            <h2>
                <a href="https://www.imdb.com/title/tt1201607" target="_blank">
                    Harry Potter and the Deathly Hallows: Part 2
                </a>
            </h2>
            <img 
                src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png"
                alt="Harry Potter and the Deathly Hallows: Part 2 movie poster"
            >
            <time>2011</time>
        </li>
    `;

    // act
    const props = { movie: movie };
    const pokeeItem = new PokeItem(props);
    const html = pokeeItem.renderHTML();
    
    // assert
    assert.htmlEqual(html, expected);
});