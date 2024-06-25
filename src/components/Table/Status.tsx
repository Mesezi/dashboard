import React from 'react';
import { getStatusColors } from '@/lib/utils';
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