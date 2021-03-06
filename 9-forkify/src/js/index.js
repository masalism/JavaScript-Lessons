import Search from './models/Search';
import * as searhView from './views/searchView';
import { elements } from './views/base';
/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping lsit object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
    // 1. Get query from the view
    const query = searhView.getInput();

    if(query) {
        // 2. New seach objrct and added state
        state.search = new Search(query);

        // 3. Prepare UI for results
        searhView.clearInput();
        searhView.clearResults();

        // 4. Search for recipes
        await state.search.getResults();

        // 5. render results on UI
        searhView.renderResults(state.search.result);
    }
}


elements.searhForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

