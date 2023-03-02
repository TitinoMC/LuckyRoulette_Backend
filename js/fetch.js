const base_url = "http://localhost:5050/"; 
export const get_data = async() => {
    let result = '';
    await fetch(`${base_url}`)
        .then(res => res.json())
        .then(data => result = data)
        .catch(err => console.log(err));
    return result;
}

export const get_animals = async() => {
    let result;
    await fetch(`${base_url}animals/list`)
        .then(res => res.json())
        .then(data => result = data)
        .catch(err => console.log(err));
    return result;
}

export const new_ticket = async(data) => {
    let result;
    await fetch(`${base_url}new-ticket`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => result = data)
    .catch(err => console.log(err));
    return result;
}

export const get_ticket = async(id) => {
    let result;
    await fetch(`${base_url + id}`)
    .then(res => res.json())
    .then(data => result = data)
    .catch(err => console.log(err));
    return result;
}

export const add_reward = async(winners) => {
    await fetch(`${base_url}update-ticket`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(winners)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
}