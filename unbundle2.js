document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const selectedList = document.getElementById("selected-list");
    const totalPrice = document.getElementById("total-price");

    // Define prices for each chocolate
    const chocolatePrices = {
        "Dairymilk Chocolate": 2,
        "Temptation Chocolate": 5,
        "Fuse Chocolate": 3,
        "Munch Chocolate": 1,
        "KitKat Chocolate": 3,
        "Snakers Chocolate": 2.5,
        "MilkyBar Chocolate": 2,
        "Kinder Bueno Chocolate": 8,
        "5 Star Chocolate": 4,
        "Krackle Chocolate": 7.34,
        "milkychoco": 1,
        "DairyMilk Silk Chocolate": 4.5,
        "White Chocolate": 1.5,
    };

    let selectedChocolates = [];
    let total = 0;

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
            const selectedChocolate = event.target.value;
            const price = chocolatePrices[selectedChocolate]; 
            if (event.target.checked) {
                if (selectedChocolates.length < 8) {
                    selectedChocolates.push(selectedChocolate);
                    total += price;
                } else {
                    event.target.checked = false;
                    alert(`You can select a maximum of 8 chocolates,Your bill is: $${total}`);
                }
            } else {
                const index = selectedChocolates.indexOf(selectedChocolate);
                if (index !== -1) {
                    selectedChocolates.splice(index, 1);
                    total -= price;
                }
            }
            updateSelection();
        });
    });

    function updateSelection() {
        selectedList.innerHTML = "";
        selectedChocolates.forEach((chocolate) => {
            const listItem = document.createElement("li");
            listItem.textContent = chocolate;
            selectedList.appendChild(listItem);
        });
        totalPrice.textContent = total;
    }
});
