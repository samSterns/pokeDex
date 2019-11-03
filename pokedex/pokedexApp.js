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

        const optionsSection = dom.querySelector('.searchbar-section');
        const searchOptions = new SearchOptions();
        optionsSection.prepend(searchOptions.renderDOM());

        const listSection = dom.querySelector('.paging-div');
        const paging = new Paging();
        listSection.appendChild(paging.renderDOM());

        const pokeList = new PokeList({ movies: [] });
        listSection.appendChild(pokeList.renderDOM());

        const response = await getPoke();
        const pokemon = response.Search;
        pokeList.update({ pokemon: pokemon });

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