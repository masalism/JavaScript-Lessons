//BUDGET CONTROLLER
var budgetController = (function() {

    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //Data structure
    var data = {
        allItems: {
            exp: [],
            inc: []
        }, 
        totals: {
            exp: 0,
            inc: 0
        }
    }

})();


//UI CONTOROLLER
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    //Public function
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };

        },

        //Exposed strings to the public
        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    //Private function
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        //ENTER key functionality
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };


    //Private funtion
    var ctrlAddItem = function() {

        // 1. Get the field input data
        var input = UICtrl.getInput();

        // 2. Add the item to the budget controller

        // 3. add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    };

    return {
        init: function() {
            console.log('app has started');
            setupEventListeners();
        }
    };

})(budgetController, UIController);



//INITIALIZATION
controller.init();