var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function addlist(input) {

    var item = $('<li>');

    item.append(input);

    shoppingListEl.append(item);

}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on('submit', function(event) {
    //event.preventDefault();
    addlist($(#shopping-input').val());

});