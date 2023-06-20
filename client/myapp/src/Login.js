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
       <div className = "Register">
    <form classname="registerForm" onSubmit={handlePostLogin}>
    <div>
    <h3 className = "registerHeading">Verify your credentials</h3>    
    </div>
    <br/>
    <div>
      <input type="email" className="formInput" id="exampleInputEmail1" placeholder = "Enter your email" value = {userEmail} onChange = {(e) => setUserEmail(e.target.value) } />
    </div>
    <br/>
    <div>
      <input type="password" className="formInput" id="exampleInputPassword1" placeholder = "Enter your password" value = {userPassword} onChange = {(e) => setUserPassword(e.target.value)} />
    </div>
    <br/>
    <button type="submit" className="registerButton">
    Login
    </button>
    <p>
    <Link to ="/Register" className="loginLinking">Create new account - Register !!!</Link></p>
    <br/>
  </form>
       </div> 
    )
}

export default Login ;