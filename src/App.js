import React from 'react';
import firstPic from "./imageInSrc.jpeg"
import secondPic from "./img/imageInPublic.jpg"
import videoPath from "./Video/video.mp4"
import "./myApp.css"

function App() {
  return (
    <div className="App">
      <header className="header-main"></header>
      <main className="App-main">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <h1 className="title red">HALLEB ANIS</h1>
      <img src={firstPic} alt="" style={{width:600,display:"block",marginBottom:"10px"}} />
      <img src={secondPic} alt="" style={{width:600,display:"block",marginBottom:"10px"}}/>
      <video style={{width:"320", height:"240"}} controls>
        <source src={videoPath} type="video/mp4" />
      </video>
    </div>
      </main>
    </div>
  );
}

export default App;
