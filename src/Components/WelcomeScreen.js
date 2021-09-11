import React from "react";
const welcomeScreen=() => {
    return (
        <>
           <div className="mainPart" style={{display:"flex",flexDirection:"column"}}>
               <div className="imagePart">
                    <img style={{marginRight:"20%",marginTop:"2%",marginLeft:"20%",width: "60vw",height: "50vh"}} 
                    src="https://media.istockphoto.com/vectors/book-festival-concept-a-group-of-tiny-people-reading-a-huge-open-book-vector-id1058389100?k=20&m=1058389100&s=612x612&w=0&h=WQ7Sq6TgxwG9E9hlg3i3cAtjwsExwygMjbjTI6vFtcw="/>   
               </div> 
               <div className="contentPart" style={{textAlign:"center"}} >
                   <h2 style={{textAlign:"center"}}>Welcome To AdmitKard</h2>
                   <p style={{marginLeft:"17%",marginRight:"17%"}}>
                       In order to provide you with a custom experience. We need to ask you a few Questions. </p>
               </div>
               <div style={{textAlign : "center",marginTop:"12px"}}>
                    <button style={{backgroundColor:"#ffc266",cursor :"pointer",color : "white",border : "0px", borderRadius : "12px",height : "40px",width:"140px",fontSize:"16px"}}>Get Started</button>
                    <p>This may takes a few miutes</p>
               </div>
           </div>
        </>
    )
}

export default welcomeScreen ;