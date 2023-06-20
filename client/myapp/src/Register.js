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
              nav("/Profile") ;
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
    <div className = "Register">
    <form classname="registerForm" onSubmit={handlePostRegister}>
    <div>
    <h3 className = "registerHeading">Enter your registration details</h3>    
    <input type="text" className="formInput" id="exampleInputEmail1"  placeholder="Enter your name" value={userName} onChange={(e) => setUserName(e.target.value)} />
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
      Register
    </button>
    <p>
    <Link to ="/Login" className="loginLinking">Already registered login !!!</Link></p>
    <br/>
  </form>
       </div> 
    )
}

export default Register ;