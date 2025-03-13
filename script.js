
let cheese = "https://therecipecritic.com/wp-content/uploads/2023/01/white_pizza-2-500x500.jpg"
let pineapple = "https://www.yeprecipes.com/data/media/7/pepperoni-pineapple-jalapeno-pizza.jpg"; 
let veggie = "https://www.vindulge.com/wp-content/uploads/2023/02/Vegetarian-Pizza-with-Caramelized-Onions-Mushrooms-Jalapeno-FI.jpg";

let pizzas = [cheese, pineapple, veggie];


function changeRecipe() {
    let randomIndex = Math.round(Math.random()*2);
    let header;

    let list = document.getElementById("add-cheese");
    if (randomIndex!==0 && !document.getElementById("optional")) {
        let addToppings = document.createElement('li');
        addToppings.innerHTML = "add toppings";
        addToppings.id="optional";
        list.appendChild(addToppings);
    }
    
    if (randomIndex === 0 ){
        header="How to make a cheese pizza";
        if (document.getElementById("optional")){
            document.getElementById("optional").remove()
        }
    } else if (randomIndex===1) {
        header= "How to make a pineapple pizza";
        document.getElementById('optional').innerHTML="add pineapple and other toppings";
    } else if (randomIndex===2) {
        header="How to make a vegetable pizza";
        document.getElementById('optional').innerHTML="add veggie toppings";
    };

    document.getElementById("heading").innerHTML=header;
    document.getElementById('pizza').src = pizzas[randomIndex];
}

function toggleDarkMode(){
    let body = document.body;
    body.classList.toggle('dark-mode');
}
