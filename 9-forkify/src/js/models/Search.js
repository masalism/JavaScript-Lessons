import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    //method
    async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const key = '173270bacb1528f8d76378293336d3d4';
        try {
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        } catch (error) {
            alert(error)
        }
        
    }
}



