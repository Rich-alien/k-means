import React from 'react';
import './App.css';
import {run} from './main/main';
import {Layer, Stage, Text} from "react-konva";
import {tick} from "./main/draw/draw";

class App extends React.Component {
    componentDidMount() {
        run()
    }

    DrawThePoints = () => {
        tick();
    }

    render() {
        return (
            <div id="App">
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Text text="1 секундочку"/>
                        {
                            this.DrawThePoints
                        }
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default App;
