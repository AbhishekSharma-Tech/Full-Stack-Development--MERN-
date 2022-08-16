import { useState } from "react";
import { Button } from "../components/Button";
import { Output } from "../components/Output";
import "../styles/Counter.css";

export const Counter = () => {
    let [count, setCount] = useState(0);

    const plus = () => setCount(count + 1);
    const minus = () => setCount(count - 1);

    return (
        <div className="container">
            <div>
                <Output message="Counter App"/>
            </div>
            <div className="btns">
                <Button funCall={plus} color="success" label="+"/>
                <Button funCall={minus} color="danger" label="-"/>
            </div>
            <div>
                <Output message={count}/>
            </div>
        </div>
    );
}