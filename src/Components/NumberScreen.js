// import React,{useState} from "react";
// // import PhoneInput from "react-phone-number-input";
import { toast } from "react-toastify" ;
import 'react-toastify/dist/ReactToastify.css';

// const NumberScreen = () =>{
//   const[data,setData] = useState({}) ;

//   const handleSubmit = (e)=>{
//     e.preventDefault() ;
//     console.log(data.phoneNumber) ;
//     if(data.phoneNumber < 1000000000){
//       toast.error(" Invalid Phone Number ") ;
//       setTimeout(() => {
//         window.location = "/";
//       }, 4000); 
//     }else{
//       toast.info("OTP Sent");
//       setTimeout(() => {
//         window.location = "/otp";
//       }, 3000);
//     }

//   }

//   return(
//     <>
//     <form onSubmit={handleSubmit}> 
//       <input type="tel" placeholder="Enter Phone NUmber" required
//       onChange={e=>setData({...data,phoneNumber : e.target.value})}/>
//       <button >LogIn with OTP</button>
//     </form>
//     </>
//   )
// }

// export default NumberScreen ;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import MuiPhoneNumber from "material-ui-phone-number";

function NumberScreen() {
  localStorage.setItem("verified",false) ;
  localStorage.setItem("phoneNumber",false);
  const [phone, setPhone] = useState("");

  const handleOnChange = value => {
    setPhone(value);
  };

  const handleSubmit = (e)=>{
    e.preventDefault() ;
    console.log(phone) ;
    localStorage.setItem("phone",phone);
    if(phone < 1000000000){
      toast.error(" Invalid Phone Number ") ;
      setTimeout(() => {
        window.location = "/";
      }, 4000); 
    }else{
      localStorage.setItem("Number",true);
      localStorage.setItem("phone",true)
      toast.info("OTP Sent");
      setTimeout(() => {
        window.location = "/otp";
      }, 3000);
    }
  }

  return (
    <div className="App" style={{textAlign : "center"}}>
      <h1>AdmitKard</h1>
      <img style={{height : "40vh",width:"55vw"}} 
      src="https://media.istockphoto.com/vectors/many-notifications-in-the-mobile-phone-online-distractions-chaos-vector-id1257469268?k=20&m=1257469268&s=612x612&w=0&h=Y8gzDMI5JfXcqHZ_Bieer22TehLKRoRFBkQeuNivXuk="/>
      <h2>Enter Phone Number</h2>
      <div>
      <MuiPhoneNumber defaultCountry={"in"} onChange={handleOnChange} />
      </div>
      <p>We will send you a one time SMS message.</p>
      <p>Charges may apply.</p>
      <div style={{textAlign : "center",marginTop:"30px"}}>
      <button style={{backgroundColor:"#ffc266",cursor :"pointer",color : "white",border : "0px", borderRadius : "12px",height : "40px",width:"140px",fontSize:"16px"}}
      onClick={handleSubmit}>SignIn with OTP</button>
      </div>
    </div>
  );
}

export default NumberScreen;
