import React from 'react';

import styles from './ColorPicker.module.css';

function ColorPicker({ color, colorPickHandler, bgColorChangeHandler }) {
    return (
        <>
            <button className={styles.btn} onClick={bgColorChangeHandler}>Change color</button>
            <input className={styles.colorPicker} type="color" onChange={colorPickHandler} value={color} />
        </>
    );
};

export default ColorPicker;
