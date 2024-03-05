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
        urlPic: ["https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1433215160639804"],
    },

    {
        key: "art",
        urlVid: ["https://www.tiktok.com/embed/v2/6997911678461447430", "https://youtube.com/embed/8VZxXKHDzxs?si=m8wjKuZib53rzNCT"],
        urlPic: ["https://www.tiktok.com/embed/v2/6997911678461447430", "https://youtube.com/embed/8VZxXKHDzxs?si=m8wjKuZib53rzNCT"],
    },

    {
        key: "children",
        urlVid: ["https://www.tiktok.com/embed/v2/6997911678461447430", "https://youtube.com/embed/8VZxXKHDzxs?si=m8wjKuZib53rzNCT"],
        urlPic: ["https://www.tiktok.com/embed/v2/6997911678461447430",],
    },

    {
        key: "funny",
        urlVid: ["https://www.tiktok.com/embed/v2/6997911678461447430", "https://youtube.com/embed/8VZxXKHDzxs?si=m8wjKuZib53rzNCT"],
        urlPic: ["https://www.tiktok.com/embed/v2/6997911678461447430"],
    },

    {
        key: "surprise",
        urlVid: ["https://www.tiktok.com/embed/v2/6997911678461447430", "https://youtube.com/embed/8VZxXKHDzxs?si=m8wjKuZib53rzNCT"],
        urlPic: ["https://www.tiktok.com/embed/v2/6997911678461447430", "https://youtube.com/embed/8VZxXKHDzxs?si=m8wjKuZib53rzNCT"],
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
        videoUrl= videoBased[4].urlPic[randomId]
      }

    } else if (topics.length === 1){
      //show the only topic (randomized)
      let id = 0;
      let key = topics[0];
      switch (key){
        case key.includes("Animals"):
          id = 0;
          break;
        case key.includes("Art"):
          id = 1;
          break;
        case key.includes("C"):
          id = 2;
          break;
        case key.includes("sur"):
          id = 4;
          break;
        default:
          id = 3;
          break; 
      }
      const rand = getRandomInt(0, 1);
      if (rand === 0){
        randomId = getRandomInt(0, videoBased[id].urlVid.length - 1)
        videoUrl = videoBased[id].urlVid[randomId]
      }
      else if (rand === 1){
        randomId = getRandomInt(0, videoBased[id].urlPic.length - 1)
        videoUrl= videoBased[id].urlPic[randomId]
      }
    } else {
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
          videoUrl= videoBased[4].urlPic[randomId]
        }
      }

      //pick random from chosen topics
        if (rand === 0){
          rand = getRandomInt(0, videoBased[randomId].urlVid.length - 1)
          videoUrl = videoBased[randomId].urlVid[rand]
        }
        else if (rand === 1){
          rand = getRandomInt(0, videoBased[randomId].urlPic.length - 1)
          videoUrl= videoBased[randomId].urlPic[rand]
        }
      }
    }
  console.log("Here")
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        { videoUrl
          &&
          <iframe title="Video" width="315" height="560" src={videoUrl} allow="autoplay; encrypted-media" allowFullScreen></iframe>
        }

        { picUrl
          &&
          <img src={picUrl}  height="315" width="560"  />
        }
        
      </section>
    </div>
  );
}

export default VideoPopUp