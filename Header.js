import Component from './Component.js';

class Header extends Component {
    renderHtml(){
        return /*html*/ `
        <header class="header">
        <nav class="main-nav">
            <div class="nav-home"><a href="">Home</div>
            <div class="nav-home"><a href="">PlaceHolder</div>
        </nav>

        <h1>PokeDex</h1>
    </header>
        `;
    }

}

export default Header;