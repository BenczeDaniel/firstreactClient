import React,{useState,} from "react";
import {useMutation} from 'react-query'
import { checkUsername,login } from "./getData";
import {Form,FormGroup,Input,Label,FormFeedback,Button} from "reactstrap";
import {useNavigate} from 'react-router-dom'


export const Login = ({setLoggedInUser}) => {
    const [username,setUsername] = useState('')
    const [password,setpassword] = useState('')
    const [email,setEmail] = useState(null)
    const [isValidU,setIsValidU] = useState(null)
    const [isValidP,setIsValidP] = useState(null)
    const navigate=useNavigate()

    const mutationCheckUsername=useMutation(checkUsername,{
      onSuccess:(data)=>{
        if(data.data.rowCount ==  0)
         setIsValidU(false)
        else
        setIsValidU(true)
      
      
      
      
        }
     
      

        
    })

    const handleCheckUsername = ()=>{
      if(username)
        mutationCheckUsername.mutate({username:username})
      else
      setIsValidU(false)
    }



    const mutationLogin=useMutation(login,{
      onSuccess:(data)=>{
       // console.log('mutation login:',data.data)
        if(data.data?.error)
        setIsValidP(false)
        else {
        setIsValidP(true)
        const {username,email,avatar,avatar_id,id,role} = data.data
        setLoggedInUser({username:username,email:email,avatar:avatar,avatar_id:avatar_id,id:id,role:role})
        navigate('/')}

        
        
      }
    })

  return (
    <Form className="login border p-3 shadow mt-1">
        <h3>Login form</h3>
      <FormGroup>
        <Label for="username">Felhasználónév:</Label>
        <Input className={isValidU==null ?"" : (isValidU ? "is-valid" : "is-invalid")}
          autoFocus
            value={username} onChange={(e)=>setUsername(e.target.value)}
            onBlur={handleCheckUsername}
            onKeyPress={(e)=>e.key=="Enter"? document.getElementById("password").focus() : ''}
            />
        <FormFeedback>Nem létező Felhasználónév!</FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password">Jelszó:</Label>
        <Input  type="password" className={isValidP==null ?"" : (isValidP ? "is-valid" : "is-invalid")} 
        id="password"
            value={password} onChange={(e)=>setpassword(e.target.value)}
            onKeyPress={(e)=>e.key=="Enter"? document.getElementById("login").focus() : ''}
            
              />
        <FormFeedback >Helytelen jelszó!</FormFeedback>
      </FormGroup>
      <div>
  <Button disabled={!isValidU || !password} color="dark"
  id="login"
  onClick={()=>mutationLogin.mutate({username:username,password:password})}
  >Login
  
  </Button>
  
</div>
    </Form>

  );
};
