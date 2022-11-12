import React from 'react';
import styles from './Overlay.module.css'
function Overlay(props) {
    return (
        <div className={styles.overlay}>
            {props.children}
        </div>
    );
}

export default Overlay;