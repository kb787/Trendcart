import {useState} from 'react' ;
import {useNavigate} from 'react-router-dom' ;
import axios from 'axios' ;
import {message} from 'antd' ;

const Profile = () => 
{
   const [firstName, setFirstName] = useState('') ;
   const [lastName, setLastName] = useState('') ;
   const [email,setEmail] = useState('') ;
   const [age,setAge] = useState('') ;
   const [city,setCity] = useState('') ;
   const [country,setCountry] = useState('') ;
   const [state,setState] = useState('') ;
   const [address,setAddress] = useState('') ;
   const [contactNo,setContactNo] = useState('') ;

    var nav = useNavigate() ;

    const handlePostProfile = async(e) =>
    {
        e.preventDefault() ;
        try
        {
          var profileResponse = await axios.post("http://localhost:3500/v1/api/profiles/postProfile",
           {
              firstName:firstName ,
              lastName:lastName ,
              email:email ,
              age:age ,
              city:city ,
              country:country ,
              state:state ,
              address:address ,
              contactNo:contactNo
           }
           ) ;

          console.log(profileResponse) ;
          if(profileResponse.data && profileResponse.data.success)
          {
              nav("/") ;
              message.success(" Successfully booked ") ;
          }
        }
        
        catch(error)
        {
          console.log(error) ;
          message.error(" Server side occured ") ;  
        }
    }    

    return (
    <div className = "Profile">
    <form classname="registerForm" onSubmit={handlePostProfile}>
    <div>
    <h3 className = "registerHeading">Enter your profile details</h3>    
    <input type="text" className="formInput" id="exampleInputEmail1"  placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
    </div>
    <br/>
    <div>
      <input type="text" className="formInput" id="exampleInputEmail1" placeholder = "Enter your last name" value = {lastName} onChange = {(e) => setLastName(e.target.value) } />
    </div>
    <br/>
    <div>
      <input type="email" className="formInput" id="exampleInputEmail1" placeholder = "Enter your email" value = {email} onChange = {(e) => setEmail(e.target.value) } />
    </div>
    <br/>
    <div>
      <input type="number" className="formInput" id="exampleInputEmail1" placeholder = "Enter your age" value = {age} onChange = {(e) => setAge(e.target.value) } />
    </div>
    <br/>
    <div>
      <input type="text" className="formInput" id="exampleInputEmail1" placeholder = "Enter your city" value = {city} onChange = {(e) => setCity(e.target.value) } />
    </div>
    <br/>
    <div>
      <input type="text" className="formInput" id="exampleInputEmail1" placeholder = "Enter your country" value = {country} onChange = {(e) => setCountry(e.target.value) } />
    </div>
    <br/>
    <div>
      <input type="text" className="formInput" id="exampleInputEmail1" placeholder = "Enter your state" value = {state} onChange = {(e) => setState(e.target.value) } />
    </div>
    <br/>
    <div>
      <input type="text" className="formInput" id="exampleInputEmail1" placeholder = "Enter your address" value = {address} onChange = {(e) => setAddress(e.target.value) } />
    </div>
    <br/>
    <div>
      <input type="text" className="formInput" id="exampleInputEmail1" placeholder = "Enter your contact no" value = {contactNo} onChange = {(e) => setContactNo(e.target.value) } />
    </div>
    <br/>
    <button type="submit" className="registerButton">
      Submit
    </button>
    <br/>
  </form>
       </div> 
    )
}

export default Profile ;