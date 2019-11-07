
import Component from '../Component.js';
import Header from '../common/Header.js';

class HomeApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div>
                
                <main>
                    <p>
                        <a href="pokedex.html">Explore Pokemon</a>
                    </p>
                </main>
            </div>
        `;
    }
}

export default HomeApp;