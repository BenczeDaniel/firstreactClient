import React, { useState } from "react";
import {useMutation} from 'react-query'
import {useNavigate} from 'react-router-dom'
import {checkUsername,checkEmail,register } from "./getData";
import {validate} from 'react-email-validator';

import {
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Button,
  FormText,
} from "reactstrap";

export const Register = () => {
  const navigate = useNavigate()  
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState(null);
  const [isValidU, setIsValidU] = useState(null);
  const [isValidP, setIsValidP] = useState(null);
  const [isValidE, setIsValidE] = useState(null);
  const [success, setSuccess] = useState(null);
  const [msg,setMsg] = useState("");


  const mutationCheckUsername=useMutation(checkUsername,{
    onSuccess:(data)=>{
      console.log('szerver oldalrol',data.data.rowCount,data.data.username)
      if(data.data.rowCount ==  0)
       setIsValidU(true)
      else
      setIsValidU(false)
    
    
    
    
      }
   
    

      
  })





  const handleCheckUsername = ()=>{
    if(username)
      mutationCheckUsername.mutate({username:username})
    else
    setIsValidU(false)
  }


  const handleCheckEmail = ()=>{
    if(validate(email))
      mutationCheckEmail.mutate({email:email})
    else
    console.log("kliens oldali ellenőrzés")
    setIsValidE(false)
  }


  const mutationCheckEmail=useMutation(checkEmail,{
    onSuccess:(data)=>{
      console.log('szerver oldalrol',data.data.rowCount,data.data.email)
      if(data.data.rowCount ==  0)
       setIsValidE(true)
      else
      setIsValidE(false)
    
    console.log(isValidE+"test")
    
    
      }
    })


    const handleCheckPassword=()=>{
      password.length<6 ? setIsValidP(false) : setIsValidP(true)
    }


    const mutationRegister=useMutation(register,{
      onSuccess:(data)=>{
        console.log('szerver oldalrol',data.data)
        if(data.data?.id){
          setSuccess(true)
          setUsername('')
          setpassword('')
          setEmail('')
          setIsValidP(null)
          setIsValidE(null)
        setIsValidU(null)       
       }else
           setSuccess(false) 
        setMsg(data.data.msg)
      
      
      }
        
    })





  return (
    <Form className="login border p-3 shadow mt-1 rounded">
      <h3>Sign up form</h3>
      <FormGroup>
        <Label for="username">Felhasználónév:</Label>

        <Input
          autoFocus
          className={
            isValidU == null ? "" : (isValidU ? "is-valid" : "is-invalid")
          }
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onBlur={handleCheckUsername}
          onKeyPress={(e)=>e.key=="Enter"? document.getElementById("email").focus() : ''}
        />

        <FormFeedback>Már létező Felhasználónév!</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email-cím:</Label>
        <Input
          type="email" value={email} id="email"
          className={
            isValidE == null ? "" : (isValidE ? "is-valid" : "is-invalid")
          }
          
          
          onBlur={handleCheckEmail}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={(e)=>e.key=="Enter"? document.getElementById("password").focus() : ''}
        />
        <FormFeedback>Létező Email cím! / Hibás Email cím</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password">Jelszó:</Label>
        <Input
          type="password" value={password} id="password"
          className={
            isValidP == null ? "" : (isValidP ? "is-valid" : "is-invalid")
          }
          onBlur={handleCheckPassword}
         
          onChange={(e) => setpassword(e.target.value)}
           onKeyPress={(e)=>e.key=="Enter"? document.getElementById("password").focus() : ''}
        />
        <FormFeedback >Helytelen jelszó!</FormFeedback>
        <FormText>A jelszó minimális hossza 6karakter</FormText>
      </FormGroup>
      <div>
        <Input type="button" className="btn btn-dark" disabled={!isValidP || !isValidU || !isValidE} 
        onClick={()=>mutationRegister.mutate({username:username,email:email,password:password})}
         value="Register" >
        </Input>
      </div>
      <div className="msg">{msg}</div>
      
      {success && <div className="btn btn-outline-dark"
      onClick={()=>navigate('/login')}
      >Jelentkezz be !</div>}
    </Form>
  );
};
