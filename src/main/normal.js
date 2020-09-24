import {getMaxOfArray, getMinOfArray} from "./getValue";

export let normal = (x, data) => {
    return (
        (x - (getMinOfArray(data))) / ((getMaxOfArray(data)) - (getMinOfArray(data)))
    );
}