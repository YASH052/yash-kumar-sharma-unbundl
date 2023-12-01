# yash-kumar-sharma-unbundl
I've provided an HTML document and a script to manage the selection of chocolates along with their prices. The HTML structure defines checkboxes for different chocolates with their respective prices, and the script handles the selection logic and updates the total price dynamically based on the selected chocolates.

**In the HTML:**

The structure is pretty straightforward, with checkboxes labeled for different chocolates, each associated with a specific value and price.

**In the JavaScript:**

The script waits for the DOM to be loaded and then sets up event listeners for each checkbox.
It maintains an object chocolatePrices that maps each chocolate to its price.
Upon selecting or deselecting a chocolate, it updates the list of selected chocolates and the total price accordingly.
If the user attempts to select more than 8 chocolates, it triggers an alert showing the message along with the total bill amount.

**The CSS:**

Contains styling for the layout, checkboxes, selected chocolates section, and total price display.
Overall, this code allows users to select chocolates up to a maximum of 8, dynamically updating the total price based on the selected items and displaying the selection and total price in the designated section.
