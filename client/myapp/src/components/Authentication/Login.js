import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import {Link} from 'react-router-dom' ;
import axios from 'axios' ;
import {message} from 'antd' ;

const Login = () => 
{
    const [userEmail,setUserEmail] = useState('') ;
    const [userPassword,setUserPassword] = useState('') ;

    var nav = useNavigate() ;

    const handlePostLogin = async(e) =>
    {
        e.preventDefault() ;
        try
        {
          var loginResponse = await axios.post("http://localhost:3500/v2/api/users/postLogin",
           {
             userEmail:userEmail ,
             userPassword:userPassword
           }
           ) ;

          console.log(loginResponse) ;
          if(loginResponse.data && loginResponse.data.success)
          {
              nav("/Profile") ;
              message.success(" You have been successfully logged in ") ;
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
      <p className = "formHeading">Sign In</p>
      <p className = "formSubHeading">Verify your credentials here</p>
      <input className = "formInputs" type = 'email' value = {userEmail} placeholder = "Enter your email address" onChange = {(e) => setUserEmail(e.target.value)} />
      <br/>
      <input className = "formInputs" type = 'password' value = {userPassword} placeholder = "Enter your password" onChange = {(e) => setUserPassword(e.target.value)} />
      <br/>         
      <button className = "loginButton" onClick={handlePostLogin}>Login</button>
      <p><Link to = "/Register" className = "pageLinking">Not having an account ? SignUp Here</Link></p>   
</div> 
    )
     
}

export default Login ;