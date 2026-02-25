import axios from "axios";
import { useState } from "react";

function Register(){
    
  const[data,setData] = useState({
    username:"",
    email:"",
    psw:""
  });

  const changeName = (e) =>{
    setData({...data,[e.target.name]:e.target.value});
  }

  const submit = async () =>{
    try{
      const res = await axios.post("http://localhost:8080/reg",data);
      alert(res.data);
    }
    catch(err){
      alert(err.response.data);
    }
  }

  return(
    <div>
      <h1>Hi I am App</h1>
      <input type="text" name="username" onChange={changeName} placeholder="username"/>
      <input type="text" name="email" onChange={changeName} placeholder="email"/>
      <input type="password" name="psw" onChange={changeName} placeholder="psw"/>
      <button onClick={submit}>Register</button>
    </div>
  );
}
export default Register;