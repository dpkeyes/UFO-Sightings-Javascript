// Assign a new variable for the values from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Populate the table body in index.html with this table data
data.forEach( function(ufo) {
    console.log(ufo);
    var row = tbody.append("tr"); // add a blank row to the table
    
    // Set up another for loop over each index, value pair for the ufo element
    Object.entries(ufo).forEach(function([index, value]) {
        console.log(key, value);
        var cell = row.append("td"); // add a blank cell to the active row of the table
        cell.text(value); // populate that cell with the value of the active index
    });
});

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// Use D3 to select the filter button
var button = d3.select("#filter-btn");

// Write method to initiate new rows being added to the table and then displayed
button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Log the input value
  console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);
});

