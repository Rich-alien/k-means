import {AfterNormalizeData} from "./main/data";
import {Rect} from "react-konva";
import React from "react";

let rerenderEntireTree = () => {

}
export let state={

}
export let comon = ()=>{
    AfterNormalizeData.map(d =>(
            <Rect
                x={d.x}
                y={d.y}
                width={30}
                height={30}
                fill={this.state.color}
                shadowBlur={5}
                onClick={this.handleClick}
                zIndex={5}/>
        )
    )
    rerenderEntireTree(state)
}