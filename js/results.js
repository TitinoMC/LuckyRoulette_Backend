import { add_reward, get_data } from "./fetch.js";
import { result_card } from "./cards.js";

const results = async() => {
    const winners = [];
    await get_data()
    .then(data => {
        data.map(({img_alt, hour}) => {
            result_card(img_alt, hour);
            const name = img_alt.replace(/[^a-z À-ŽA-Z]/g, '').toLowerCase().trim();
            let hour_split = hour.split(':')[0];
            if(name.substring(0,5) != 'lotto'){winners.push({name, hour: parseInt(hour_split)})}
        })
    });
    add_reward(winners);
}

results();