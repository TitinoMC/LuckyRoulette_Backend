import { animals_card } from "./cards.js";
import { get_animals } from "./fetch.js";
import { update_counter } from "./store.js";

const animals = async() => {
    update_counter();
    await get_animals()
        .then(data => {
            data.map(({id, nombre}) => {
                animals_card(id, nombre);
            })
        });
}

animals();
