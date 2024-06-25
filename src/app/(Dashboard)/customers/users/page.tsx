import React from 'react'
import styles from './Users.module.scss'
import UsersInfoCard from './components/UsersInfoCard'
import { ActiveUsersCardIcon, TotalUsersCardIcon, UsersLoansCardIcon, UsersSavingsCardIcon } from '@/components/Icons'
import UsersTable from './components/UsersTable'

const index = () => {
  return (
    <div className={styles.users}>
      <h2>Users</h2>

      <section className={styles.cardsSlider}>
        <UsersInfoCard cardTitle='Users' amount={2453} icon={TotalUsersCardIcon}/>
        <UsersInfoCard cardTitle='Active users' amount={2453} icon={ActiveUsersCardIcon}/>
        <UsersInfoCard cardTitle='Users with loans' amount={2453} icon={UsersLoansCardIcon}/>
        <UsersInfoCard cardTitle='Users with savings' amount={2453} icon={UsersSavingsCardIcon}/>
      </section>


      <section>
        <UsersTable />
        </section>
   </div>
  )
}

export default index
