import React from 'react'
import styles from "./TeamList.module.css"

export const TeamList = (props) => {
  return (
    <>
    <div className={styles['container']
    }>
        <h1>Team List</h1>
        <div className={styles['team-list-container']}>

                {
                    props.employees.map(data => {
                        return <div key={data.id} className={styles['team-list-item']}>
                            {data.first_name} {data.last_name} - {data.age} years old
                            <button onClick={() => props.dispatch({ type: "REMOVE_FROM_TEAM_LIST", payload: data })}>REMOVE</button>
                        </div>
                    })
                }
            <p>Average age : {props.averageAge}</p>
            <div className={styles['btn']}>
            <button onClick={() => props.dispatch({ type: "CALCULATE_AVERAGE_AGE", payload: {} })}>Calculate Average Age</button>
            <button onClick={() => props.dispatch({ type: "SORT_LIST_BY_AGE", payload: {} })}>Sort by age</button>
            </div>
        </div>
    </div>
        
        
    </>
  )
}
