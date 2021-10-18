import React, {useState } from "react";
import styles from "./Card.module.css";
function Card({ props })
{
    const [counter, setCounter] = useState(0)
    
    const handleIncrement = (value) => {
        if (counter === 0 && value === -1) {
            setCounter(0);
        }
        else {
            setCounter(counter + value);
        }
    }
    return (
        <>
             <div>
                <div>{props.text}</div>
                <div className={styles.price}>
                    <div>{props.text1}</div>
                    <div className={styles.btn}>
                        <button onClick={() => handleIncrement(-1)}>-</button>
                        <div className={styles.cnt}>{counter}</div>
                        <button onClick={() => handleIncrement(+1)}>+</button>
                    </div>
                    </div>
                </div>
            </>
    )
}
export default Card