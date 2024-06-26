import React from 'react';
import styles from './Table.module.scss'

interface StatusProps {
    text: string;
}

export const Status: React.FC<StatusProps> = ({ text }) => {
    return (
        <div className={`${styles.status} ${styles[text.toLowerCase()]}`}>
            {text}
        </div>
    );
};