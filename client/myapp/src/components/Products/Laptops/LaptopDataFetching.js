import {useState,useEffect} from 'react' ;
import {message} from 'antd' ;

const LaptopDataFetching = () => {
 const [data,setData] = useState([]) ;

 useEffect(() => {
   const handleDataFetching = async() => {
       try {
           let dataFetchResponse =  await fetch("http://localhost:3500/v4/api/getLaptopItems") ;
           if(!dataFetchResponse.ok) {
               message.error('Unable to get data') ;
           }
           else {
               console.log(dataFetchResponse) ;
               let jsonData = await dataFetchResponse.json() ;
               console.log(jsonData) ;
               if(Array.isArray(jsonData))
               {
                 setData(jsonData) ;
               }
               let convertedData = Array.from(jsonData) ;
               setData(convertedData) ;  
           }
       }
       catch(error) {
          console.log(error) ;
       } 
   }
 handleDataFetching()},[])
 return (
     <ul className = "laptopCardCollection">  
       { 
        (data?.map((item) =>  
            <div  key = {item._id}>     
            <div>   
                     <li className = "cardContainerWrapping">
                               <p className = "cardContainerHeading">Category :- {item.productHeading} </p> 
                               <p className = "cardContainerSubHeading">Company :- {item.productCompany} </p>
                               <img src = {item.productImageUrl} className = "cardContainerImageStyling" /> 
                               <p className = "cardContainerPara">Description :- {item.productDescription}</p>
                     </li>        
            </div>
        </div>    
            )

        )  
       }  
     </ul>
 ) 
} 

export default LaptopDataFetching ;