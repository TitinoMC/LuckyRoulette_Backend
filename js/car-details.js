import { card_details } from "./cards.js";
import { new_ticket } from "./fetch.js";
import { clean_store } from "./store.js";
const car_details = document.querySelector(".car-details");

let total = 0;
const add_animals = (number) => {
    if(localStorage.length != 0){
        for(let i = 0; i < localStorage.length; i++){
            const {amount, name} = JSON.parse(localStorage.getItem(localStorage.key(i)))
            card_details(name, amount);
            total += amount;
        }
        
        const total_bar = `
            <p>TOTAL:</p>
            <p class="total-amount">Bs ${total}</p>
        `;
        
        const div = document.createElement("div");
        div.setAttribute("class", "total-bar");
        div.innerHTML = total_bar;
        car_details.appendChild(div);
    }else {
        document.querySelector(".card-container").innerHTML = '';
        car_details.removeChild(car_details.lastChild);
        const empty_message = `
            <p>
                ${number != undefined ? "Gracias por su compra" : ""}
            </p>
            <p>
                ${number == undefined ? "No ha agregado animalitos a su carrito" : "Tu numero de ticket es: " + number}.
            </p>
        `
        const div = document.createElement("div");
        div.setAttribute("class", "empty_car");
        div.innerHTML = empty_message;
        car_details.appendChild(div);
    }
}

add_animals();

document.querySelector(".clean")
    .addEventListener("click", () => {
        clean_store();
        add_animals()
});

document.querySelector('.confirm button').addEventListener("click", () => {
    const arr = []
    for(let i = 0; i < localStorage.length; i++){
        const {amount, name} = JSON.parse(localStorage.getItem(localStorage.key(i)));
        const only_letter_name = name.replace(/[^a-z À-ŽA-Z]/g, '').toLowerCase().trim();

        arr.push({name: only_letter_name, amount});
    }
    const data = {
        monto: total,
        premio: null,
        arr_animals: arr
    }
    new_ticket(data)
    .then( ({cut_number}) => {
        clean_store();
        add_animals(cut_number);
        
    });

})


