import React from 'react'
import meow from "../assets/meow.jpg"
import countHigher from "../assets/children_countHigher.mp4"
import wholesome_us from "../assets/wholesome_couldbeus.mp4"
import cute from "../assets/5ofus.jpg"
import gdpt from "../assets/gdpt.jpg"
import meow2 from "../assets/meow2.mp4"
import euro from "../assets/euroFunny.mp4"
import breakdown from "../assets/amazingGreatJob.mp4"
import '../style/modal.css'; 

function VideoPopUp({topics, show, onClose}) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  let videoUrl;
  let picUrl;

  const videoBased = [
    {
        key: "ani",
        urlVid: ["https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1433215160639804",
                "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=222451072977543",
                "https://www.youtube.com/embed/sdS6DrZV_oQ",],
        urlPic: ["https://i.pinimg.com/736x/78/a3/c7/78a3c780906c0e93e36872f7e153cf88.jpg"],
    },

    {
        key: "art",
        urlVid: ["https://www.facebook.com/plugins/video.php?href=https://fb.watch/qDFKSnu7GN/"],
        urlPic: [meow],
    },

    {
        key: "children",
        urlVid: ["https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=222451072977543",
                "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=276637624499346",
                "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1826813627749996",
                "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=480596147405740",
                countHigher],
                
        urlPic: ["https://cdn.acidcow.com/pics/20210518/1621360852_8linlv409m.jpg",],
    },

    {
        key: "funny",
        urlVid: ["https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=785776076226715", 
                 "https://www.tiktok.com/embed/v2/7190882557460827434",
                  meow2, euro, breakdown,
                 "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=621559299107690",
                 "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1349472412309482",
                 "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=743277186854207"],

        urlPic: [gdpt],
    },

    {
        key: "surprise",
        urlVid: [ wholesome_us,
                 "https://www.tiktok.com/embed/v2/6995520840431308038",
                 "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=222451072977543"],
        urlPic: [ "https://i.pinimg.com/736x/78/a3/c7/78a3c780906c0e93e36872f7e153cf88.jpg",
                  "https://i.kym-cdn.com/photos/images/newsfeed/001/592/011/e75.png",
                cute],
    },

  ]
  function getRandomInt(min, max) {
    min = Math.ceil(min); // Round up to the nearest integer
    max = Math.floor(max); // Round down to the nearest integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomId;
  if (topics){
    if (topics.length === 0){
      //show surprise if nothing is chosen
      const rand = getRandomInt(0, 1);
      if (rand === 0){
        randomId = getRandomInt(0, videoBased[4].urlVid.length - 1)
        videoUrl = videoBased[4].urlVid[randomId]
      }
      else if (rand === 1){
        randomId = getRandomInt(0, videoBased[4].urlPic.length - 1)
        picUrl = videoBased[4].urlPic[randomId]
      }

    } 
    else if (topics.length === 1)
    {
      //show the only topic (randomized)
      let id = 0;
      let key = topics[0];
      if (key.includes("Ani")){
        id = 0
      }
      else if (key.includes("Art")){
        id = 1
      }
      else if (key.includes("C")){
        id = 2
      }

      else if (key.includes("sur")){
        id = 4
      }
      else {
        id = 3
      }

      const rand = getRandomInt(0, 1);
      if (rand === 0){
        randomId = getRandomInt(0, videoBased[id].urlVid.length - 1)
        videoUrl = videoBased[id].urlVid[randomId]
      }
      else if (rand === 1){
        randomId = getRandomInt(0, videoBased[id].urlPic.length - 1)
        picUrl= videoBased[id].urlPic[randomId]
      }
    } 
    else if (topics.length > 1)
    {
      //auto do wholesome if it is in the array
      let surprise = false;
      let randomId = getRandomInt(0, topics.length - 1)
      let rand = getRandomInt(0, 1);

      for (var i = 0; i < topics.length; i++){
        if (topics[i].includes("surprise"))surprise = true;
      }

      if (surprise){
        rand = getRandomInt(0, 1);
        if (rand === 0){
          randomId = getRandomInt(0, videoBased[4].urlVid.length - 1)
          videoUrl = videoBased[4].urlVid[randomId]
        }
        else if (rand === 1){
          randomId = getRandomInt(0, videoBased[4].urlPic.length - 1)
          picUrl = videoBased[4].urlPic[randomId]
        }
      }
      
      else if (!surprise)
      {
        //pick random from chosen topics
        if (rand === 0){
          rand = getRandomInt(0, videoBased[randomId].urlVid.length - 1)
          videoUrl = videoBased[randomId].urlVid[rand]
        }
        else if (rand === 1){
          rand = getRandomInt(0, videoBased[randomId].urlPic.length - 1)
          picUrl = videoBased[randomId].urlPic[rand]
        }
      }
    }
  }
  
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      { topics && (
          <>
            <div><button className="exit-button" onClick={onClose}>X</button></div>
            {/* Render video or image */}
            { videoUrl && (
              <iframe title="Video" width="315" height="510" src={videoUrl} allow="autoplay; encrypted-media" allowFullScreen></iframe>
            )}
            { picUrl && (
              <img src={picUrl} width="375" alt="" />
            )}
            {/* Add exit button */}
            
          </>
        )}

      </section>
    </div>
  );
}

export default VideoPopUp