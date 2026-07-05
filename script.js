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
        name: "Cheese Slice",
        price: "₹40"
      },
      {
        name: "Extra Patty",
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
  },

  steak: {
    name: "T-Bone Steak",
    tagline: "Juicy. Tender. Premium.",
    price: "₹899",
    rating: "4.9",
    calories: "980 kcal",
    spice: "Mild",
    model: "Miller and Carter T-bone steak medium.glb",
    description:
      "Premium T-bone steak grilled to medium perfection, delivering rich flavour and tenderness.",

    ingredients: [
      "Beef Steak",
      "Butter",
      "Garlic",
      "Black Pepper",
      "Rosemary"
    ],

    allergens: [
      "Milk"
    ],

    addons: [
      {
        name: "Pepper Sauce",
        price: "₹70"
      },
      {
        name: "Mashed Potatoes",
        price: "₹120"
      }
    ]
  },

  combo: {
    name: "Chicken Combo Box",
    tagline: "Crispy. Saucy. Filling.",
    price: "₹499",
    rating: "4.7",
    calories: "1100 kcal",
    spice: "Medium Spicy",
    model: "Box Combo w_ extra sauce.glb",
    description:
      "A satisfying combo meal featuring crispy chicken pieces served with extra signature sauce.",

    ingredients: [
      "Fried Chicken",
      "French Fries",
      "Signature Sauce",
      "Seasoning"
    ],

    allergens: [
      "Gluten",
      "Milk",
      "Egg"
    ],

    addons: [
      {
        name: "Extra Sauce",
        price: "₹30"
      },
      {
        name: "Soft Drink",
        price: "₹50"
      }
    ]
  },

  cookie: {
    name: "Chocolate Chip Cookie",
    tagline: "Warm. Sweet. Chocolatey.",
    price: "₹99",
    rating: "4.8",
    calories: "320 kcal",
    spice: "Not Spicy",
    model: "Chocolate chip cookie .glb",
    description:
      "Freshly baked chocolate chip cookie loaded with rich chocolate chunks and buttery goodness.",

    ingredients: [
      "Flour",
      "Butter",
      "Chocolate Chips",
      "Sugar",
      "Vanilla"
    ],

    allergens: [
      "Gluten",
      "Milk",
      "Egg"
    ],

    addons: [
      {
        name: "Vanilla Ice Cream",
        price: "₹60"
      },
      {
        name: "Chocolate Syrup",
        price: "₹30"
      }
    ]
  },

  lasagna: {
    name: "Classic Lasagna",
    tagline: "Cheesy. Layered. Comforting.",
    price: "₹429",
    rating: "4.8",
    calories: "890 kcal",
    spice: "Mild",
    model: "lasagna.glb",
    description:
      "Layers of pasta sheets, rich tomato sauce and melted cheese baked to perfection.",

    ingredients: [
      "Pasta Sheets",
      "Tomato Sauce",
      "Mozzarella",
      "Parmesan",
      "Italian Herbs"
    ],

    allergens: [
      "Milk",
      "Gluten"
    ],

    addons: [
      {
        name: "Extra Cheese",
        price: "₹60"
      },
      {
        name: "Garlic Bread",
        price: "₹80"
      }
    ]
  }
};

/* GET ITEM FROM URL */

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

food.ingredients.forEach((ingredient) => {
  ingredients.innerHTML += `<li>${ingredient}</li>`;
});

/* ALLERGENS */

const allergens =
  document.getElementById("allergens");

allergens.innerHTML = "";

food.allergens.forEach((allergen) => {
  allergens.innerHTML += `<li>${allergen}</li>`;
});

/* NUTRITION */

document.getElementById(
  "nutritionCalories"
).textContent = food.calories;

document.getElementById(
  "nutritionRating"
).textContent =
  food.rating + " ⭐";

document.getElementById(
  "nutritionSpice"
).textContent =
  food.spice;

/* ADDONS */

const addons =
  document.getElementById("addons");

addons.innerHTML = "";

food.addons.forEach((addon) => {
  addons.innerHTML += `
    <div class="row">
      <span>${addon.name}</span>
      <strong>${addon.price}</strong>
    </div>
  `;
});

/* BUTTONS */

document
  .getElementById("arBtn")
  .addEventListener("click", () => {
    viewer.activateAR();
  });

document
  .getElementById("pauseBtn")
  .addEventListener("click", () => {
    viewer.autoRotate =
      !viewer.autoRotate;
  });

document
  .getElementById("resetBtn")
  .addEventListener("click", () => {
    viewer.cameraOrbit =
      "0deg 75deg 100%";
  });
