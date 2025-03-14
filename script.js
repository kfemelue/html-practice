class Recipe {
    constructor(imageSource, heading, optionalStep ){
        this.imageSource=imageSource;
        this.heading=heading;
        this.addToppings = optionalStep;
    }
}

const cheese = new Recipe(
    "https://therecipecritic.com/wp-content/uploads/2023/01/white_pizza-2-500x500.jpg",
    "How to make a cheese pizza",
    ""
);

const pineapple = new Recipe(
    "https://whipandwander.com/wp-content/uploads/2022/04/Pepperoni-and-Pineapple-Pizza-with-Hot-Honey-1.jpg",
    "How to make a pineapple pizza",
    "add pineapple and other toppings"
)

const veggie = new Recipe(
    "https://www.vindulge.com/wp-content/uploads/2023/02/Vegetarian-Pizza-with-Caramelized-Onions-Mushrooms-Jalapeno-FI.jpg",
    "How to make a vegetable pizza",
    "add veggie toppings"
)

const pepperoni = new Recipe(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSXRjvkpBmof5TwLTEOukJ0PlX5S3cOKdfoA&s",
    "How to make pepperoni Pizza",
    "add pepperoni"
)

const pizzas = [cheese, pineapple, veggie, pepperoni];
const pizzaImage = document.getElementById("pizza");

let hasBeenSpun=false;

pizzaImage.addEventListener('click', function(){
    if (hasBeenSpun){
        pizzaImage.className="spin-back"
    }else{
        pizzaImage.className="spin"
    }
    hasBeenSpun = !hasBeenSpun
});

function changeRecipe() {
    let randomIndex = Math.round(Math.random()*(pizzas.length-1));
    let toppingsString = pizzas[randomIndex]['addToppings'];
    let list = document.getElementById("add-cheese");

    if (randomIndex!==0 && !document.getElementById("optional")) {
        let toppings = document.createElement('li');
        toppings.innerHTML = toppingsString;
        toppings.id="optional";
        list.appendChild(toppings);
    }
    
    if (pizzas[randomIndex].heading === "How to make a cheese pizza" ){
        if (document.getElementById("optional")){
            document.getElementById("optional").remove()
        }
    }else{
        document.getElementById('optional').innerHTML = toppingsString;
    }

    document.getElementById("heading").innerHTML=pizzas[randomIndex].heading;
    document.getElementById('pizza').src = pizzas[randomIndex].imageSource;
}

function toggleDarkMode(){
    let body = document.body;
    body.classList.toggle('dark-mode');
}
