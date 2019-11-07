import Component from '../Component.js';

class Header extends Component {
    renderHTML(){
        return /*html*/ `
        <section>
            <header class="header">
                <nav class="main-nav">
                    <div class="nav-home"><a href="index.html">Home</a></div>
                </nav>

                <h1>PokeDex</h1>
            </header>
        </section>
        `;
    }

}

export default Header;