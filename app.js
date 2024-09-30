let orderPizzas = [];
let orderTotal = 0;
const submitBtn = document.getElementById("submitButton");

submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    // Add cost to total
    let orderCost = 0;
    const type = document.getElementById("pizzaTypes").value.split("-");
    orderCost += parseInt(type[1]);

    const size = document.getElementById("pizzaSizes").value.split("-");
    orderCost += parseInt(size[1]);

    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked'));
    let orderToppings = [];
    let tPrice = 0;
    for (const t of toppings) {
        const topping = t.value.split("-");
        orderToppings.push(topping[0]);
        tPrice += parseInt(topping[1]);
    }
    orderCost += tPrice;

    const pNumber = document.getElementById("quantity").value;
    let orderQuantity = parseInt(pNumber);

    orderCost *= orderQuantity;
    orderTotal += orderCost;

    const pizza = {
        pizzaName: type[0], 
        pizzaPrice: type[1], 
        pizzaSize: size[0], 
        sizePrice: size[1], 
        toppings: orderToppings, 
        toppingsPrice: tPrice, 
        quantity: orderQuantity, 
        pizzaTotalPrice: orderCost};

    orderPizzas.push(pizza);
    console.log(pizza);
    console.log("Your total is "+orderTotal+ " NOK");
}