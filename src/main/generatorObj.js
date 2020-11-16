import {data, quantity} from './data';
import {getRandomInt} from './GetRandom/GetRandomInt'
//генерация объектов
export let createNewData = () => {
    for (let i = 0; i < quantity; i++) {
        let newObj = {};
        newObj = {
            id: i,
            x: Math.random() ,
            y: getRandomInt(300),
            city: null,
            color: null,
        }

        data.push(newObj)

    }
    for (let i = 0; i < data.length; i++) {

        if (data[i].x >= 0 && data[i].x <= 1 && data[i].y <= 150) {
            data[i].city = 'Тольятти';
            data[i].color = 'black';
        } else if (data[i].y >= 150 && data[i].x >= 0.5 && data[i].x <= 1) {
            data[i].city = 'Чепаевск';
            data[i].color = 'green';
        } else {
            data[i].city = 'Самара';
            data[i].color = 'purple';
        }
    }

}