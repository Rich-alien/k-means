// import {getRandomInt} from "./GetRandomInt";
// import {City} from "../data";
import {data} from "../data";

//цвета
export let getColor = () => {
    for (let i = 0; i < data.length; i++) {
        switch (data[i].city){
            case 'Тольятти':
                return 'black'
            case "Самара":
                return 'purple'
            case "Чапаевск":
                return 'green'
            default:
                console.log('Не знаю');
        }
        // if (data[i].city === 'Тольятти') return 'black';
        // else if (data[i].city === 'Самара') return 'purple';
        // else return 'green';
    }
}