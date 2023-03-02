import { get_ticket } from "./fetch.js";

const search = document.querySelector('.search-container');

search.addEventListener('submit', (e) => {
    e.preventDefault();
    const input_value = e.target.children[0].value;
    get_ticket(input_value)
        .then(res => {
            add_ticket_info(res[0], input_value);
            e.target.children[0].value = '';
        })
});

const add_ticket_info = (ticket_info, input_value) => {
    const result_box = document.querySelector(".results-box");
    if(ticket_info != undefined){
        const {numero_ticket, monto_total, animales_y_monto, premio, fecha} = ticket_info;
        const html = `
            <p><span>Codigo Ticket:</span> ${numero_ticket}</p>
            <p><span>Premio:</span> ${premio == null ? "No recibido" : premio}</p>
            <p><span>Fecha:</span> ${fecha}</p>
            <p><span>Monto Total:</span> ${monto_total} Bs</p>
        `;
        const title = document.createElement('h3');
        title.textContent = "Animalitos"
        const ticket_animals = document.createElement("div");
        ticket_animals.setAttribute("class", "ticket-animales");
        ticket_animals.appendChild(title);

        for(let i = 0; i < animales_y_monto.length; i++ ){
            const {name, amount} = animales_y_monto[i];
            const p = document.createElement('p');
            p.innerHTML = `<span>Nombre:</span> ${name} - <span>Monto:</span> ${amount} Bs`;
            ticket_animals.appendChild(p);
        }
        result_box.innerHTML = html;
        result_box.appendChild(ticket_animals);
    }else {
        const message = `
            <p class="not-found first-p">El codigo "${input_value}" no existe en nuestra base de datos.</p>
            <p class="not-found">Revise e intentelo nuevamente c:</p>
        `
        result_box.innerHTML = message;
    }
}