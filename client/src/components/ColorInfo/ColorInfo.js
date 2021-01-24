import React from 'react';

import styles from './ColorInfo.module.css';

function ColorInfo({ color }) {
    return (
        <p className={styles.colorInfo}>
            {color}
        </p>
    );
};

export default ColorInfo;