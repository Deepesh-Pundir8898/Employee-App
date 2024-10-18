import React, { useState } from 'react'
import styles from "./EmployeeList.module.css"

export const EmployeeList = (props) => {

    const isEmployeeInTeam = (employeeId) => {
        return props.teamList.some(emp => emp.id === employeeId);
      };

  return (
    <>
    <div className={styles.container}>
        <h1>Employee's List</h1>
            <div className={styles['employee-list-container']}>
                {props.employees.map(item=>{
                    return (
                        <div key={item.id} className={styles['employee-list-item']}>
                            <h3>{item.first_name +" "+ item.last_name}</h3>
                            <p>{item.age} years old</p>
                            {
                                !isEmployeeInTeam(item.id) &&(

                                    <button onClick={() => props.dispatch({ type: "ADD_TO_TEAM_LIST", payload: item })}>ADD</button>
                                )
                            }
                        </div>
                    )
                })}
        </div>
    </div>
       
    </>
  )
}
