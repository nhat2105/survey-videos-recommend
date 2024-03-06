import React from 'react'

function VideoPopUp({topics}) {
  const show = true;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  let videoUrl;
  let picUrl;

  const videoBased = [
    {
        key: "ani",
        urlVid: ["https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1433215160639804",
                "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=222451072977543"],
        urlPic: ["https://i.pinimg.com/736x/78/a3/c7/78a3c780906c0e93e36872f7e153cf88.jpg"],
    },

    {
        key: "art",
        urlVid: ["https://www.facebook.com/plugins/video.php?href=https://fb.watch/qDFKSnu7GN/"],
        urlPic: ["https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/346857877_1922122991455418_1827631242607112232_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4TFKQkJ-h2kAX8cKvC4&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfBZjQk6oH-tGl6IYmA3c1EjphVCzmf93QwUYOEFCjjSCA&oe=65EBEC54",
                 "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/430063387_309608225462675_3514915417247799443_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oFSFc1WWfMsAX9Kk5go&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfCPzAO7Ss6C5keDT252vRzHK6DdsUMXbVHwiXpp62lFyw&oe=65ED1689"],
    },

    {
        key: "children",
        urlVid: ["https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=222451072977543",
                "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=276637624499346",
                "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1826813627749996",
                "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=480596147405740", 
                "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1745315299135491"],
                
        urlPic: ["https://cdn.acidcow.com/pics/20210518/1621360852_8linlv409m.jpg",],
    },

    {
        key: "funny",
        urlVid: ["https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=785776076226715", 
                 "https://www.tiktok.com/embed/v2/7190882557460827434",
                 "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=621559299107690",
                 "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=1349472412309482",
                 "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=743277186854207"],

        urlPic: ["https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/428610905_735260915371260_4840293545165043140_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YpD47j4-eZ4AX-Jp3UK&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfApaneW5WWJFP5dGCQwT6BmOtHkFJZQAsmrLKfwQOObZQ&oe=65ECD372",
      ],
    },

    {
        key: "surprise",
        urlVid: ["https://youtube.com/embed/8VZxXKHDzxs?si=m8wjKuZib53rzNCT",
                 "https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/watch/?v=222451072977543"],
        urlPic: ["https://i.pinimg.com/736x/78/a3/c7/78a3c780906c0e93e36872f7e153cf88.jpg",
                  "https://scontent.fyyc3-1.fna.fbcdn.net/v/t39.30808-6/363816296_660733216086460_636859928052760664_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gqyNF_kbOjQAX9kjgrC&_nc_ht=scontent.fyyc3-1.fna&oh=00_AfAI36JF2ikYO78xkhpQv2rITzulBaAAvv6P7toP2HlonA&oe=65ED3FC0",
                  "https://i.kym-cdn.com/photos/images/newsfeed/001/592/011/e75.png"],
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
        { videoUrl
          &&
          <iframe title="Video" width="315" height="510" src={videoUrl} allow="autoplay; encrypted-media" allowFullScreen></iframe>
        }

        { picUrl
          &&
          <img src={picUrl} width="375" alt=""/>
        }
        
      </section>
    </div>
  );
}

export default VideoPopUp