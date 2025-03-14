class Recipe {
    constructor(imageSource, heading ){
        this.imageSource=imageSource;
        this.heading=heading;
    }
}

const cheese = new Recipe(
    "https://therecipecritic.com/wp-content/uploads/2023/01/white_pizza-2-500x500.jpg",
    "How to make a cheese pizza"
);

const pineapple = new Recipe(
    "https://whipandwander.com/wp-content/uploads/2022/04/Pepperoni-and-Pineapple-Pizza-with-Hot-Honey-1.jpg",
    "How to make a pineapple pizza"
)

const veggie = new Recipe(
    "https://www.vindulge.com/wp-content/uploads/2023/02/Vegetarian-Pizza-with-Caramelized-Onions-Mushrooms-Jalapeno-FI.jpg",
    "How to make a vegetable pizza"
)

const pizzas = [cheese, pineapple, veggie];
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
    let randomIndex = Math.round(Math.random()*2);
    let header = pizzas[randomIndex].heading;

    let list = document.getElementById("add-cheese");
    if (randomIndex!==0 && !document.getElementById("optional")) {
        let addToppings = document.createElement('li');
        addToppings.innerHTML = "add toppings";
        addToppings.id="optional";
        list.appendChild(addToppings);
    }
    
    if (randomIndex === 0 ){
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
    document.getElementById('pizza').src = pizzas[randomIndex].imageSource;
}

function toggleDarkMode(){
    let body = document.body;
    body.classList.toggle('dark-mode');
}
