import React from 'react';

import styles from './ColorPicker.module.css';

function ColorPicker({ color, bgColorChangeHandler }) {
    return (
        <input className={styles.colorPicker} type="color" onChange={bgColorChangeHandler} value={color} />
    );
};

export default ColorPicker;
