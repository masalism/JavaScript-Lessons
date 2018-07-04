import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = '173270bacb1528f8d76378293336d3d4';
    try {
        const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error)
    }
    
}
getResults('pasta');

