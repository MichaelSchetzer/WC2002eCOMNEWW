import React from 'react'


const Welcome = () => {
  const myStyle = {
    backgroundImage:
      "url('http://127.0.0.1:8000/media/Posted_images/backgroundqatar.webp')",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '120vh',
color: "Black"
  };
  return (
    <div style={myStyle}>
      {/* <img style={{ height: '100%', width: '100%', backgroundSize: "cover" }} src="http://127.0.0.1:8000/media/Posted_images/websitebg.png">
      <h1 style={{padding:"50px"}}>Welcome to my E-commerce project</h1>
      </img> */}
      <h1 align="center" style={{ padding: "50px" }}>Welcome to my World Cup 2022 eCommerce Store</h1><br></br>
      <h4 align="center">This project was created by using:<br></br>
       Django - Backend <br></br> 
       React.js (Redux) - Front<br></br>
       SQlite - DB<br></br>
       Bootstrap + little bit Of MUI - Design <br></br>
      Have Fun! </h4><br></br><br></br>
        <br></br><br></br><br></br>
      <br></br><br></br><br>
      </br><br></br>
      <br></br>
      <br></br> <br></br><br></br><br></br>
      <br></br><br></br><br>
      </br>
      <h5 align="center">
        created by <a href="">Michael Schetzer</a></h5>

      <br></br><br></br><br></br>
      <br></br><br></br><br>
      </br><br></br>
      <br></br>
      <br></br>


    </div>
  )
}

export default Welcome