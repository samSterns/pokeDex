import Component from '../Component.js';

class SearchOptions extends Component {

    renderHTML() {
        return /*html*/ `
            <div class="searchbar-section">
                <form class="search">
                    <div>Search:</div>
                    <input name="search">
                    <button>🔍</button>
                </form>
            </div>
        `;
    }
}

export default SearchOptions;