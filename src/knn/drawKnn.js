import React from 'react';
import ReactDOM from 'react-dom';
import {Layer, Rect, Stage} from "react-konva";
import style from './draw.module.css'
import {saveData} from "../main/data";
// import {move} from "../Evklid/Evklid";
//отрисовка объектов
export function knnPoints() {
    const element = (
        <div className={style.container}>
            <Stage width={1200} height={window.innerHeight}>
                <Layer>
                    {/*{*/}
                    {/*    EvklidCyrcle()*/}
                    {/*}*/}
                    {

                       saveData.map(d => (
                            <Rect
                                x={d.x}
                                y={d.y}
                                width={10}
                                height={10}
                                fill={d.color}
                            />
                        ))}
                    {/*{cluster.map(d => (<Rect*/}
                    {/*        x={d.x}*/}
                    {/*        y={d.y}*/}
                    {/*        width={10}*/}
                    {/*        height={10}*/}
                    {/*        fill={'red'}*/}
                    {/*        shadowBlur={5}*/}
                    {/*    />*/}
                    {/*))}*/}
                    {

                    }

                </Layer>

            </Stage>
            {/*<button onClick={ ()=>{SearchError()}}>*/}
            {/*    Evklid*/}
            {/*</button>*/}
            {/*<button onClick={ ()=>{SearchErrorMan()}}>*/}
            {/*    Manhetan*/}
            {/*</button>*/}
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(knnPoints, 1000);