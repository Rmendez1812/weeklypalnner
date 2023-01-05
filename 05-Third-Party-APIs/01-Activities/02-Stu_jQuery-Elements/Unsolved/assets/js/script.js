// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/

var rootE1 = $('#root')

// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable

var p = $('<p>')

// TODO: Add the following text to the newly created `<p>` element: "~ Carol Dweck"

p.text('~ Carol Dweck')

// TODO: Add the class `plain` to the author element

p.addClass('plain')

// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable

var h1 = $<'<h1>'>

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."

h1.text("Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.")

// TODO: Apply the class `fancy` to the quote element

h1.addClass('fancy')

// TODO: Append the author element to the quote element

p.append(h1)

// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`

rootE1.append(p)
