import Component from '../Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {

    onRender(dom) {
        const pokemon = this.props.pokemon;

        pokemon.forEach(pokemon => {
            const pokeItem = new PokeItem({ pokemon: pokemon });
            const pokeItemDOM = pokeItem.renderDOM();
            dom.appendChild(pokeItemDOM);
        });

    }

    renderHTML(){
        return /*html*/ `
            <li class="individual-poke"></li>
        `;
    }
}

export default PokeList;