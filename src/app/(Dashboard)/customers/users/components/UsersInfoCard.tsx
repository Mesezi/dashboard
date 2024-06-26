import React, { FC, SVGProps } from 'react'
import styles from '../Users.module.scss'
import { formatNumberWithCommas } from '@/lib/utils';

interface CardProps{
  icon: FC<SVGProps<SVGSVGElement>>;
  amount: number;
  cardTitle: string
}

const UsersInfoCard:FC<CardProps> = ({ amount, icon: Icon, cardTitle }) => {
  return (
    <div className={styles.userInfoCard}>
      <Icon />
      <p>{cardTitle}</p>
      <span>{formatNumberWithCommas(amount)}</span>
    </div>
  )
}

export default UsersInfoCard
