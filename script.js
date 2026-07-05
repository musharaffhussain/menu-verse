const menu = {
  burger: {
    name: "Zinger Burger",
    tagline: "Crispy. Fiery. Iconic.",
    price: "₹249",
    rating: "4.6",
    calories: "🔥 650 cal",
    spice: "🌶 Medium Spicy",
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
    ]
  },

  pizza: {
    name: "Pepperoni Pizza",
    tagline: "Cheesy. Hot. Delicious.",
    price: "₹399",
    rating: "4.8",
    calories: "🔥 820 cal",
    spice: "🌶 Medium",
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
    ]
  }
};

const params = new URLSearchParams(window.location.search);

const item =
  params.get("item") || "burger";

const food =
  menu[item] || menu.burger;

document.getElementById("name")
.textContent = food.name;

document.getElementById("tagline")
.textContent = food.tagline;

document.getElementById("price")
.textContent = food.price;

document.getElementById("rating")
.textContent = "⭐ " + food.rating;

document.getElementById("calories")
.textContent = food.calories;

document.getElementById("spice")
.textContent = food.spice;

document.getElementById("description")
.textContent = food.description;

document.getElementById("burgerViewer")
.src = food.model;

const ingredients =
document.getElementById("ingredients");

ingredients.innerHTML = "";

food.ingredients.forEach(i => {
  ingredients.innerHTML += `<li>${i}</li>`;
});

const allergens =
document.getElementById("allergens");

allergens.innerHTML = "";

food.allergens.forEach(i => {
  allergens.innerHTML += `<li>${i}</li>`;
});
