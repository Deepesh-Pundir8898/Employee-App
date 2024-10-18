import { useState ,useReducer } from 'react'
import './App.css'
import { EmployeeList } from './components/EmployeeList/EmployeeList'
import { TeamList } from './components/TeamList/TeamList'
import employeesJson from "./static/Employee.json"


function App() {
 

  const reducerFn = (state, action) => {
   
    if (action.type === "ADD_TO_TEAM_LIST") {
      
      // const stateCopy = { ...state };
      // const teamListCopy = [...stateCopy.teamList];
      // teamListCopy.push(action.payload);
      // stateCopy.teamList = teamListCopy;

      // return stateCopy;
      // stateCopy.teamList.push(action.payload)

      const updatedData = {
        ...state,
        teamList: [...state.teamList, action.payload]
      }
      return updatedData;
    } else if (action.type === "CALCULATE_AVERAGE_AGE") {
      const avgAge = (state.teamList.reduce((pv, cv) => pv + cv.age, 0) / state.teamList.length).toFixed(2);

      const stateCopy = {
        ...state,
        averageAge: avgAge>0 ? avgAge : 0
      }
      // stateCopy.averageAge = avgAge;
      return stateCopy;
    } else if (action.type === "REMOVE_FROM_TEAM_LIST") {
      const updateTeamList = state.teamList.filter(employee=>employee.id !== action.payload.id);
      return {...state , teamList:updateTeamList,averageAge:0}

    } else if (action.type === "SORT_LIST_BY_AGE") {
        const sortedTeamList = [...state.teamList].sort((a,b)=>a.age-b.age);
        return {...state, teamList:sortedTeamList}
    } else {
      return state;
    }
  };

  const initState = {
    employeeList: employeesJson,
    teamList: [],
    averageAge: 0
  }

  const [state, dispatch] = useReducer(reducerFn, initState);

  return (
    <>
     <h1>Employee's App</h1>
     <div className='container'>
      <EmployeeList 
        employees={state.employeeList}
        teamList={state.teamList}
        dispatch={dispatch} 
      />
      <TeamList 
        dispatch={dispatch}   
        employees={state.teamList}
        averageAge={state.averageAge}/>
     </div>
    </>
  )
}

export default App
