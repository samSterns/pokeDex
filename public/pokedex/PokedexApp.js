import Component from '../Component.js';
import Header from '../common/Header.js';
import SearchOptions from './SearchOptions.js';
import Paging from './Paging.js';
import PokeList from './PokeList.js';
import { getPoke } from '../services/pokedex-api.js';

class PokedexApp extends Component {

    async onRender(dom){
        const header = new Header();        
        dom.prepend(header.renderDOM());

        const searchOptions = new SearchOptions();
        dom.appendChild(searchOptions.renderDOM());

        
        const paging = new Paging({ count: 0 });
        dom.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ pokemon: [] });
        dom.appendChild(pokeList.renderDOM());

        async function loadPoke() {

            const pokemon = await getPoke();
            const results = pokemon.results;
            const count = pokemon.count;
            pokeList.update({ pokemon: results });
            paging.update({ count: count });
        
        }

        loadPoke();

        window.addEventListener('hashchange', () => {
            loadPoke();
        });
    }

    renderHTML() {
        return /*html*/ `
        <div>
            <main>
            </main>
        </div>
        `;
    }

}

export default PokedexApp; 