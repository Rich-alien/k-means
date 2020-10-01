import React from 'react';
import ReactDOM from 'react-dom';
import {AfterNormalizeData, cluster} from "../data";
import {Layer, Rect, Stage} from "react-konva";
import style from '../draw.module.css'
// import {move} from "../Evklid/Evklid";
//отрисовка объектов
export function tick() {
    const element = (
        <div className={style.container}>
            <Stage width={1200} height={window.innerHeight}>
                <Layer>
                    {/*{*/}
                    {/*    EvklidCyrcle()*/}
                    {/*}*/}
                    {

                        AfterNormalizeData.map(d => (
                            <Rect
                                x={d.x}
                                y={d.y}
                                width={10}
                                height={10}
                                fill={d.color}
                            />
                        ))}
                    {cluster.map(d => (<Rect
                            x={d.x}
                            y={d.y}
                            width={10}
                            height={10}
                            fill={'red'}
                            shadowBlur={5}
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);