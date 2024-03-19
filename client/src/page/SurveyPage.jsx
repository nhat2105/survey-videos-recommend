import React from 'react'
import TopicForm from '../components/TopicForm'
import minions from "../assets/background.jpg"

function SurveyPage() {

  return (
    <div style={{backgroundColor: "white"}}>
      <div style={{display:'flex', justifyContent: 'center'}}>
        <label style={{fontSize: 45, marginTop: 40, color: 'white', fontFamily: "cursive", fontWeight: 500,
        position: 'absolute', zIndex: 1}}>Make Your Day</label>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <img src={minions} alt='' style={{ width: "100%", maxHeight: "100vh", objectFit: "cover", zIndex: 0}} />
      </div>
      {<TopicForm />}
    </div>
  )
}

export default SurveyPage