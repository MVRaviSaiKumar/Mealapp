document.addEventListener("DOMContentLoaded", function () {
    const mealForm = document.getElementById("meal-form");
    const mealNameInput = document.getElementById("mealName");
    const addMealButton = document.getElementById("addMeal");
    const searchMealInput = document.getElementById("searchMeal");
    const mealItems = document.getElementById("mealItems");

    const meals = [];

    addMealButton.addEventListener("click", function () {
        const mealName = mealNameInput.value.trim();

        if (mealName !== "") {
            meals.push(mealName);
            mealNameInput.value = "";
            displayMeals();
        }
    });

    searchMealInput.addEventListener("input", function () {
        displayMeals();
    });

    function displayMeals() {
        const searchTerm = searchMealInput.value.trim().toLowerCase();

        const filteredMeals = meals.filter(function (meal) {
            return meal.toLowerCase().includes(searchTerm);
        });

        mealItems.innerHTML = "";

        if (filteredMeals.length === 0) {
            mealItems.innerHTML = "<li>No meals found.</li>";
        } else {
            filteredMeals.forEach(function (meal) {
                const listItem = document.createElement("li");
                listItem.textContent = meal;
                mealItems.appendChild(listItem);
            });
        }
    }

    displayMeals();
});
