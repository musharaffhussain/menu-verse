const menu = {
  burger: {
    name: "Zinger Burger",
    tagline: "Crispy. Fiery. Iconic.",
    price: "₹249",
    rating: "4.6",
    calories: "650 kcal",
    spice: "Medium Spicy",
    model: "zinger_burger.glb",
    description:
      "A hand-breaded chicken fillet marinated in a secret blend, crowned with fresh lettuce and signature sauce inside a toasted sesame bun.",

    ingredients: [
      "Chicken fillet",
      "Sesame bun",
      "Lettuce",
      "Signature sauce",
      "Pickles"
    ],

    allergens: [
      "Gluten",
      "Egg",
      "Soy"
    ],

    addons: [
      {
        name: "Cheese slice",
        price: "₹40"
      },
      {
        name: "Extra patty",
        price: "₹120"
      }
    ]
  },

  pizza: {
    name: "Pepperoni Pizza",
    tagline: "Cheesy. Hot. Delicious.",
    price: "₹399",
    rating: "4.8",
    calories: "820 kcal",
    spice: "Medium",
    model: "Small pizza photogrammetry.glb",
    description:
      "Stone-baked pizza topped with mozzarella cheese and pepperoni slices.",

    ingredients: [
      "Pizza Dough",
      "Mozzarella",
      "Tomato Sauce",
      "Pepperoni",
      "Oregano"
    ],

    allergens: [
      "Milk",
      "Gluten"
    ],

    addons: [
      {
        name: "Extra Cheese",
        price: "₹50"
      },
      {
        name: "Olives",
        price: "₹30"
      }
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const item = params.get("item") || "burger";
const food = menu[item] || menu.burger;

/* TOP SECTION */

document.getElementById("name").textContent =
  food.name;

document.getElementById("tagline").textContent =
  food.tagline;

document.getElementById("price").textContent =
  food.price;

document.getElementById("rating").textContent =
  "⭐ " + food.rating;

/* TAGS */

document.getElementById("calories").textContent =
  "🔥 " + food.calories;

document.getElementById("spice").textContent =
  "🌶 " + food.spice;

/* DESCRIPTION */

document.getElementById("description").textContent =
  food.description;

/* MODEL */

const viewer =
  document.getElementById("burgerViewer");

viewer.src = food.model;

/* INGREDIENTS */

const ingredients =
  document.getElementById("ingredients");

ingredients.innerHTML = "";

food.ingredients.forEach(i => {
  ingredients.innerHTML += `<li>${i}</li>`;
});

/* ALLERGENS */

const allergens =
  document.getElementById("allergens");

allergens.innerHTML = "";

food.allergens.forEach(i => {
  allergens.innerHTML += `<li>${i}</li>`;
});

/* NUTRITION CARD */

document.getElementById(
  "nutritionCalories"
).textContent = food.calories;

document.getElementById(
  "nutritionRating"
).textContent = food.rating + " ⭐";

document.getElementById(
  "nutritionSpice"
).textContent = food.spice;

/* ADDONS */

const addons =
  document.getElementById("addons");

addons.innerHTML = "";

food.addons.forEach(addon => {
  addons.innerHTML += `
    <div class="row">
      <span>${addon.name}</span>
      <strong>${addon.price}</strong>
    </div>
  `;
});

/* BUTTONS */

document.getElementById("arBtn")
.addEventListener("click", () => {
  viewer.activateAR();
});

document.getElementById("pauseBtn")
.addEventListener("click", () => {
  viewer.autoRotate =
    !viewer.autoRotate;
});

document.getElementById("resetBtn")
.addEventListener("click", () => {
  viewer.cameraOrbit =
    "0deg 75deg 100%";
});
