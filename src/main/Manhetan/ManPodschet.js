import {
    AfterNormalizeData,
    cluster,
    FilterOperationDistantMan
} from "../data";
//подсчет новых координат
export let ManPodshet = () => {
    let clusterAX = 0, clusterBX = 0, clusterCX = 0;
    let clusterAY = 0, clusterBY = 0, clusterCY = 0;
    let colmCluseterA = 0;
    let colmCluseterB = 0;
    let colmCluseterC = 0;
    for (let i = 0; i < FilterOperationDistantMan.length; i++) {

        switch (FilterOperationDistantMan[i].Cluster) {
            case "Чапаевск":
                colmCluseterA++;
                clusterAX += AfterNormalizeData[i].x;
                clusterAY += AfterNormalizeData[i].y;
                break;
            case "Самара":
                colmCluseterB++;
                clusterBX += AfterNormalizeData[i].x;
                clusterBY += AfterNormalizeData[i].y;
                break;
            default:
                colmCluseterC++;
                clusterCX += AfterNormalizeData[i].x;
                clusterCY += AfterNormalizeData[i].y;
                break;
        }
    }
    cluster.splice(0, cluster.length);
    let C =
            {x: (clusterCX / colmCluseterC), y: (clusterCY / colmCluseterC), city: "Тольятти"},
        B =
            {x: (clusterBX / colmCluseterB), y: (clusterBY / colmCluseterB), city: "Самара"},
        A =
            {x: (clusterAX / colmCluseterA), y: (clusterAY / colmCluseterA), city: "Чапаевск"};

    clusterAX = 0;
    clusterBX = 0;
    clusterCX = 0;
    clusterAY = 0;
    clusterBY = 0;
    clusterCY = 0;
    colmCluseterA = 0;
    colmCluseterB = 0;
    colmCluseterC = 0;

}
