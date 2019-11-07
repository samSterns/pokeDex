import Component from '../Component.js';

class PokeItem extends Component {
    renderHTML(){
        const pokemon = this.props.pokemon;

        return /*html*/ `
        <li class="individual-poke" id="${pokemon.id}">
        <div class="pokemon">${pokemon.pokemon}</div>
        <div class="type">${pokemon.pokebase}</div>
        <img src="${pokemon.url_image}" alt="${pokemon.pokemon}">
    </li>
        `;
    }
}
export default PokeItem;