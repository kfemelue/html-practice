
let cheese = "https://therecipecritic.com/wp-content/uploads/2023/01/white_pizza-2-500x500.jpg"
let pineapple = "https://www.yeprecipes.com/data/media/7/pepperoni-pineapple-jalapeno-pizza.jpg"; 
let veggie = "https://www.vindulge.com/wp-content/uploads/2023/02/Vegetarian-Pizza-with-Caramelized-Onions-Mushrooms-Jalapeno-FI.jpg";

let pizzas = [cheese, pineapple, veggie];





function changeImg() {
    let randomIndex = Math.floor(Math.random()*2);
    console.log(randomIndex);
    document.getElementById('pizza').src = pizzas[randomIndex];
}

function darkMode(){
    // let bodyParent = document.body.parentNode;
    let body = document.body;
    // bodyParent.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
}