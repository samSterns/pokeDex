import Component from '../Component.js';

class Paging extends Component {

    onRender(dom) {
        const prevButton = dom.querySelector('.prev');
        const nextButton = dom.querySelector('.next');

        if (!prevButton) {
            return;
        }

        let page = 1;

        function updateControls(){
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            const parsedPage = parseInt(searchParams.get('page'));
            if (isNaN(parsedPage)) {
                page = 1;
            }
            else {
                page = parsedPage;
            }
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        function updatePage(increment) {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', page + increment);

            window.location.hash = searchParams.toString();
        }

        prevButton.addEventListener('click', () => {
            updatePage(-1);
        });
        
        nextButton.addEventListener('click', () => {
            updatePage(1);
        });
    }
    renderHTML() {
        const perPage = 10; // this API only does 10 per
        const count = this.props.count;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        let page = 1;
        const parsedPage = parseInt(searchParams.get('page'));
        if (isNaN(parsedPage)) {
            page = 1;
        }
        else {
            page = parsedPage;
        }

        // if (!count) {
        //     return /*html*/`
        //         <p class="paging-div">No results, try to catch another kind</p>
        //     `;
        // }

        const lastPage = Math.ceil(count / perPage);
        return /*html*/ `
            <div class="paging-div">
                <button class="prev" ${page === 1 ? 'disabled' : ''}>◀</button>
                <span>Page ${page} of ${lastPage}</span>
                <button class="next" ${page === lastPage ? 'disabled' : ''}>▶</button>
            </div>
        `;
    }
}

export default Paging;