import {cluster, FilterOperationDistantMan, operationDistantManhetan} from "../data";
import {ManPodshet} from "./ManPodschet";
//минимальный эллемент
export let MinMan = () => {
    for (let i = cluster.length; i < operationDistantManhetan.length; i += cluster.length) {

        let data = [operationDistantManhetan[i - 3],
            operationDistantManhetan[i - 2],
            operationDistantManhetan[i - 1]];
        let result = data.filter(e => e.distant === Math.min(...data.map(f => f.distant)));
        // console.log(result);
        let withoutMass = {
            id: result[0].id,
            Cluster: result[0].Cluster,
            distant: result[0].distant,
        }

        FilterOperationDistantMan.push(withoutMass);
    }
    ManPodshet();
}
