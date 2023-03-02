
export const store_data = (name, amount) => {
    const data = {
        name,
        amount
    }
    const number_name = name.replace(/[^0-9]/g, '');
    let ifExist = false;
    for(let i = 0; i <= localStorage.length; i++){
        if(localStorage.key(i) == number_name){
            ifExist = true;
            continue;
        }
    }

    if(!ifExist){
        localStorage.setItem(number_name, JSON.stringify(data));
    }else {
        console.log("El animalito ya ha exite en su carrito");
    };
}

export const update_counter = () => {
    document.querySelector('.car-counter').textContent = localStorage.length;
}

export const clean_store = () => {
    localStorage.clear();
}