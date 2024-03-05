import React, {useState} from 'react'
import VideoPopUp from '../page/VideoPopUp';

function TopicForm() {
  const [surveyData, setSurveyData] = useState([]);
  const [showVideoPopup, setShowVideoPopup] = useState(false);

  const handleSubmit = (selectedOptions) => {
    setSurveyData([...surveyData, selectedOptions]);
    setShowVideoPopup(true);
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
        <div style={{ marginTop: 20, width: 250 }}>
            <label style={{ marginLeft: 20, fontSize: 20 }}>
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
        <label style={{marginTop: 30, fontSize: 20}}>Choose topic(s) that you are interested in</label>
        <Option code={'Animals'} />
        <Option code={'Art'} />
        <Option code={'Children'} />
        <Option code={'Funny Things'} />
        <Option code={'A surprise secret topic?'} />
        <button onClick={handleSubmit} style={{borderRadius: 10, marginTop: 20, marginBottom: 20}} >Submit</button>
        {showVideoPopup && <VideoPopUp topics={selectedOptions} />}
    </div>
  )
}

export default TopicForm