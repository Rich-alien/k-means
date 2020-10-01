import {cluster, FilterOperationDistant, operationDistant} from "./data";
//минимальный эллемент
export let Min = () => {
    for (let i = cluster.length; i < operationDistant.length; i += cluster.length) {

        let data = [operationDistant[i - 2], operationDistant[i - 1], operationDistant[i]];
        let result = data.filter(e => e.distant === Math.min(...data.map(f => f.distant)));
        let withoutMass={
            Cluster: result[0].Cluster,
            distant:result[0].distant,
        }
        FilterOperationDistant.push(withoutMass);
    }
}
