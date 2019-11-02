import Component from '../Component.js';

class Paging extends Component {
    renderHTML() {
        return /*html*/ `
            <div class="paging-div">
            <button class="prev" disabled>◀</button>
            <span>Page 1 of 5</span>
            <button class="next">▶</button>
            </div>
        `;
    }
}

export default Paging;