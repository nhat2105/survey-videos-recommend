import React, {useState} from 'react'
import VideoPopUp from '../page/VideoPopUp';
import Aftermath from '../page/Aftermath';

function TopicForm() {
  const [surveyData, setSurveyData] = useState([]);
  const [showVideoPopup, setShowVideoPopup] = useState(false);
  const [emotion, setEmotion] = useState("");
  const [firstTime, setFirstTime] = useState(true);
  const [evalu, setEval] = useState(false);
  const [evalEmo, setEvalEmo] = useState("")
  const [aftermath, setAftermath] = useState(null);
  const [neg, setNeg] = useState(false);

  const handleSubmit = (selectedOptions) => {
    setSurveyData([...surveyData, selectedOptions]);
    setShowVideoPopup(true);
  };

  const handleEmotionSubmit = () => {
    let res = parseFloat(evalEmo) - parseFloat(emotion);
    console.log("Emo: " , parseFloat(emotion))
    console.log("Feedback: " , parseFloat(evalEmo))
    if (evalEmo){
      if (res > 0){
        setAftermath(true)
      }
      else setNeg(true)
    }
    setFirstTime(false);
  };

  //tear down method
  const stopFeedback = () =>{
    setAftermath(false);
    setFirstTime(true);
    setEvalEmo("");
    setEval(false);
    setShowVideoPopup(false);
    setNeg(false)
    setEmotion("");
    setSelectedOptions([])
  }

  const stopPopUp = () =>{
    setShowVideoPopup(false);
    setEval(true);
  }

  const handleEmotionChange = (event) => {
    if (evalu === true){
      setEvalEmo(event.target.value)
    }
    else setEmotion(event.target.value)
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const Option = ({code}) => {
    return (
        <div style={{ marginTop: 20, width: 350, alignItems: 'center', justifyContent: 'center' }}>
            <label style={{ marginLeft: 20, fontSize: 20, alignSelf: 'center' }}>
                <input 
                type="checkbox"
                checked={selectedOptions.includes(code)}
                onChange={() => handleOptionChange(code)}
                />
                {code}
            </label>
        </div>
  );
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center'}}>
        {firstTime === true && evalu === false && 
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', 
          zIndex: 1, position: 'absolute', top: 200}}>
            <label style={{marginTop: 30, fontSize: 20}}>From 1-10, rate your level of happiness right now:</label>
                <input style={{marginTop: 20}} value={emotion} onChange={handleEmotionChange} type="textfield"/>
          </div>
        }

        {evalu === true && 
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyItems: 'center', 
          zIndex: 1, position: 'absolute', top: 200}}>
            <label style={{marginTop: 30, fontSize: 20}}>Now let's do this again. From 1-10, rate your level of happiness right now:</label>
              <div>
                <input style={{marginTop: 50}} value={evalEmo} onChange={handleEmotionChange} type="textfield"/>
              </div>
          </div>
        }

        {firstTime === false && evalu === false &&
          <div style={{zIndex: 1, position: 'absolute', top: 175, backgroundColor: 'white', borderRadius: 10}}>
            <label style={{marginLeft: 5, marginRight: 5, marginTop: 10, marginBottom: 10,
               fontSize: 20, fontWeight: 600}}>Choose topic(s) that you are interested in</label>
            <Option code={'Animals'} />
            <Option code={'Art'} />
            <Option code={'Children'} />
            <Option code={'Funny Things'} />
            <Option code={'A surprise secret topic?'} />
          </div>
        }
        <button onClick={(firstTime || evalu) ? handleEmotionSubmit : handleSubmit} 
        style={{borderRadius: 10, marginTop: 20, position: 'absolute', zIndex: 1,
         top: 400}} >Submit</button>
        {showVideoPopup && <VideoPopUp topics={selectedOptions}  show={showVideoPopup} onClose={stopPopUp} />}
        {(aftermath || neg) && <Aftermath code={aftermath} show={evalu} onClose={stopFeedback} />}
    </div>
  )
}

export default TopicForm