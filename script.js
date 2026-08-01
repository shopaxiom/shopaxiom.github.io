function addToCart() {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let existingItem = cart.find(item => item.name === "Axiom Sea Salt Spray");

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            name: "Axiom Sea Salt Spray",
            price: 19.99,
            image: "images/axiom.png",
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Axiom Sea Salt Spray added to cart!");
}