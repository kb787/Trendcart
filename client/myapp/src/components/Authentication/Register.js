import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {Link} from 'react-router-dom' ;
import axios from 'axios' ;
import {message} from 'antd' ;

const Register = () => 
{

    const [userName,setUserName] = useState('') ;
    const [userEmail,setUserEmail] = useState('') ;
    const [userPassword,setUserPassword] = useState('') ;

    var nav = useNavigate() ;

    const handlePostRegister = async(e) =>
    {
        e.preventDefault() ;
        try
        {
          var registerResponse = await axios.post("http://localhost:3500/v2/api/users/postRegister",
           {
             userName:userName ,
             userEmail:userEmail ,
             userPassword:userPassword
           }
           ) ;

          console.log(registerResponse) ;
          if(registerResponse.data && registerResponse.data.success)
          {
              nav("/Homepage") ;
              message.success(" You have been successfully registered ") ;
          }
        }
        
        catch(error)
        {
          console.log(error) ;
          message.error(" Server side occured ") ;  
        }
    }    

    return (
      <div className = "mainContainer">
      <p className = "formHeading">Sign Up</p>
      <p className = "formSubHeading">Enter your details here</p>
      <input className = "formInputs" type = 'text' value = {userName} placeholder = "Enter your full name" onChange = {(e) => setUserName(e.target.value)} />
      <br/>
      <input className = "formInputs" type = 'email' value = {userEmail} placeholder = "Enter your email address" onChange = {(e) => setUserEmail(e.target.value)} />
      <br/>
      <input className = "formInputs" type = 'password' value = {userPassword} placeholder = "Enter your password" onChange = {(e) => setUserPassword(e.target.value)} />
      <br/> 
      <br/>        
      <button className = "loginButton" onClick={handlePostRegister}>Register</button>
      <p><Link to = "/Login" className = "pageLinking">Already having an account ? SignIn Here</Link></p>   
</div> 

    )
}

export default Register ;