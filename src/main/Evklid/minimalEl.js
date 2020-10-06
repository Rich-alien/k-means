import {cluster, FilterOperationDistant, operationDistant} from "../data";
import {EvklidPodshet} from "./EvklidPodschet";
//минимальный эллемент
export let Min = () => {
    for (let i = cluster.length; i < operationDistant.length; i += cluster.length) {

        let data = [operationDistant[i - 3], operationDistant[i - 2], operationDistant[i-1]];
        let result = data.filter(e => e.distant === Math.min(...data.map(f => f.distant)));
        // console.log(result);
        let withoutMass={
            id: result[0].id,
            Cluster: result[0].Cluster,
            distant: result[0].distant,
        }

        FilterOperationDistant.push(withoutMass);
    }
    EvklidPodshet();
}
