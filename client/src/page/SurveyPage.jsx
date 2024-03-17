import React from 'react'
import TopicForm from '../components/TopicForm'
import minions from "../assets/background.png"

function SurveyPage() {

  return (
    <div style={{backgroundColor: 'lightgrey'}}>
      <div style={{display:'flex', justifyContent: 'center'}}>
        <label style={{fontSize: 45, marginTop: 20}}>Make Your Day</label>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={minions} alt='' style={{marginTop: 20}}/>
      </div>
      {<TopicForm />}
    </div>
  )
}

export default SurveyPage