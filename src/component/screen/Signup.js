import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { baseurl } from "../../Urls";
// import fetch from 'node-fetch';

function Signup() {

  const [credential,setcredential] = useState({name:"",email:"",password:"",location:""});

  const handelSubmit=async(e)=>{
    e.preventDefault();
    const respone = await fetch(`${baseurl}/api/createuser`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({name:credential.name,email:credential.email,password:credential.password,location:credential.location})
    })
    const json=await respone.json();
    console.log(json);

    if(!json.success){
      alert("Enter Valid Credentials");
    }
  };

  const onChange=(event)=>{
    setcredential({...credential,[event.target.name]:event.target.value})
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container justify-content-center text-light">
        <form onSubmit={handelSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" name='name' value={credential.name} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" name='email' value={credential.email} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" name='password' value={credential.password} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputLocation" className="form-label">
              Location
            </label>
            <input type="text" className="form-control" name='location' value={credential.location} onChange={onChange}/>
          </div>
          <button type="submit" className="btn btn-primary m-3">
            Submit
          </button>
          <button type="submit" className="btn btn-danger m-3 " >
            <Link to="/login" className="text-light text-decoration-none">Already an account</Link>
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
