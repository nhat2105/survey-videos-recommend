import React from 'react'

function VideoPopUp({ handleClose, show, topics}) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  let videoUrl;

  const videoBased = [
    {
        id: 1,
        code: "aniVid1",
        url: "",
    },

    {
        id: 2,
        code: "aniVid2",
        url: "",
    },

    {
        id: 3,
        code: "aniPic1",
        url: "",
    },

    {
        id: 4,
        code: "aniPic2",
        url: "",
    },

    {
        id: 5,
        code: "artVid1",
        url: "",
    },

    {
        id: 6,
        code: "artVid2",
        url: "",
    },

    {
        id: 7,
        code: "artPic1",
        url: "",
    },

    {
        id: 8,
        code: "artPic2",
        url: "",
    },

    {
        id: 9,
        code: "childrenVid1",
        url: "",
    },

    {
        id: 10,
        code: "childrenVid2",
        url: "",
    },

    {
        id: 11,
        code: "childrenPic1",
        url: "",
    },

    {
        id: 12,
        code: "childrenPic2",
        url: "",
    },

    {
        id: 13,
        code: "funnyVid1",
        url: "",
    },

    {
        id: 14,
        code: "funnyVid2",
        url: "",
    },

    {
        id: 15,
        code: "funnyPic1",
        url: "",
    },

    {
        id: 16,
        code: "funnyPic2",
        url: "",
    },

    {
        id: 17,
        code: "surpriseVid1",
        url: "",
    },

    {
        id: 18,
        code: "surpriseVid2",
        url: "",
    },

    {
        id: 19,
        code: "surpisePic1",
        url: "",
    },

    {
        id: 20,
        code: "surprisePic2",
        url: "",
    },



  ]

  if (topics.length === 0){
    //show surprise
  } else if (topics.length === 1){
    //show the only topic (randomized)
  } else {
    //pick random from chosen topics
    //auto do wholesome if it is in the array
  }

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button onClick={handleClose}>Close</button>
        <iframe title="Video" width="560" height="315" src={videoUrl} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </section>
    </div>
  );
}

export default VideoPopUp