import {City, Color, data, quantity} from './data';
import {getRandomInt} from './GetRandom/GetRandomInt'
import {getRandomFloat} from './GetRandom/GetRandomFloat'
//генерация объектов
export let createNewData = () => {
    for (let i = 0; i < quantity; i++) {
        let RandomNumber = getRandomInt(3);
        let newObj = {};
        newObj = {
            id: i,
            x: getRandomFloat(),
            y: getRandomInt(300),
            city: City[RandomNumber],
            color: Color[RandomNumber],
        }
        data.push(newObj)
    }
}