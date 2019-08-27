// Assign a new variable for the values from data.js
var tableData = data;

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Define a function that populates the table body in index.html
function populateTable(data) {
    return data.forEach( function(ufo) {
        console.log(ufo);
        var row = tbody.append("tr"); // add a blank row to the table
        
        // Set up another for loop over each index, value pair for the ufo element
        Object.entries(ufo).forEach(function([index, value]) {
            console.log(index, value);
            var cell = row.append("td"); // add a blank cell to the active row of the table
            cell.text(value); // populate that cell with the value of the active index
        });
    });
}; 

// Call the function on the full data set so table appears on page load
populateTable(tableData);

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

// Use D3 to select the filter button
var button = d3.select("#filter-btn");

// Write method to filter based clicking the filter button + the fill-in field
button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Get the filtered data based on input value
  var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

  // Log the input value
  console.log(inputValue);

  // Change the table on the site
  tbody.html(""); // remove any existing table data
  populateTable(filteredData); // use populate table function to add filtered data
});

