import React from 'react'

function VideoPopUp({topics}) {
  const show = true;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  let videoUrl;
  let picUrl;

  const videoBased = [
    {
        key: "ani",
        urlVid: ["https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1433215160639804"],
        urlPic: ["https://i.pinimg.com/736x/78/a3/c7/78a3c780906c0e93e36872f7e153cf88.jpg"],
    },

    {
        key: "art",
        urlVid: ["https://www.tiktok.com/embed/v2/6997911678461447430", "https://youtube.com/embed/8VZxXKHDzxs?si=m8wjKuZib53rzNCT"],
        urlPic: ["https://i.pinimg.com/736x/78/a3/c7/78a3c780906c0e93e36872f7e153cf88.jpg"],
    },

    {
        key: "children",
        urlVid: ["https://www.tiktok.com/embed/v2/6997911678461447430", "https://youtube.com/embed/8VZxXKHDzxs?si=m8wjKuZib53rzNCT"],
        urlPic: ["https://i.pinimg.com/736x/78/a3/c7/78a3c780906c0e93e36872f7e153cf88.jpg",],
    },

    {
        key: "funny",
        urlVid: ["https://www.tiktok.com/embed/v2/6997911678461447430", "https://youtube.com/embed/8VZxXKHDzxs?si=m8wjKuZib53rzNCT"],
        urlPic: ["https://i.pinimg.com/736x/78/a3/c7/78a3c780906c0e93e36872f7e153cf88.jpg"],
    },

    {
        key: "surprise",
        urlVid: ["https://youtube.com/embed/8VZxXKHDzxs?si=m8wjKuZib53rzNCT"],
        urlPic: ["https://i.pinimg.com/736x/78/a3/c7/78a3c780906c0e93e36872f7e153cf88.jpg"],
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
        { videoUrl && !videoUrl.includes("facebook")
          &&
          <iframe title="Video" width="315" height="560" src={videoUrl} allow="autoplay; encrypted-media" allowFullScreen></iframe>
        }

        { videoUrl && videoUrl.includes("facebook")
          &&
          <iframe title="Video" width="560" height="315" src={videoUrl} allow="autoplay; encrypted-media" allowFullScreen></iframe>
        }

        { picUrl
          &&
          <img src={picUrl} width="375" />
        }
        
      </section>
    </div>
  );
}

export default VideoPopUp