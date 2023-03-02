import { store_data, update_counter } from "./store.js";

export const result_card = (name, hour) => {
    const results_container = document.querySelector(".results");
    const img_name = name.replace(/[^a-z À-ŽA-Z]/g, '').toLowerCase().trim();
    const waiting_img = img_name.substring(0, 5) == 'lotto';
    const card = `
        <img src="../assets/img_results/${ waiting_img ? 'waiting' : img_name}.${waiting_img ? 'svg' : 'png'}" alt="${name}">
        <p class="card-name">${waiting_img ? 'En espera de los resultados' : name}</p>
        <div class="card-hour">
            <p>${hour}</p>
        </div>
    `
    const div_card = document.createElement('div');
    div_card.setAttribute("class", "results-card");
    div_card.innerHTML = card;
    results_container.append(div_card);
}

export const animals_card = (id, name) => {
    const animals_container = document.querySelector(".animals");
    const card = `
        <img src="../assets/img_results/${name}.png">
        <p class="card-name">${id} - ${name}</p>
        <input type="number" min="0" placeholder="0">
        <div class="button-container">
            <button>Agregar</button>
        </div>
    `;
    const div_card = document.createElement('div');
    div_card.setAttribute("class", "animals-card");
    div_card.innerHTML = card;
    div_card.addEventListener('click', (e) => {
        if(e.target.localName === "button" && e.target.parentNode.parentNode.children[2].valueAsNumber > 0){
            const name = e.target.parentNode.parentNode.children[1].textContent;
            const money = e.target.parentNode.parentNode.children[2].valueAsNumber;
            store_data(name, money);
            e.target.parentNode.parentNode.children[2].value = ''
            update_counter();
        }
    });
    animals_container.append(div_card);   
}

export const card_details = (name, amount) => {
    const img_name = name.replace(/[^a-z À-ŽA-Z]/g, '').toLowerCase().trim();
    const car_details = document.querySelector(".card-container");
    const card = `
        <img src="../assets/img_results/${img_name}.png">
        <p>${name}</p>
        <p>BS ${amount}</p>
    `
    const div_card = document.createElement("div");
    div_card.setAttribute("class", "details-card");
    div_card.innerHTML = card;
    car_details.appendChild(div_card);
}