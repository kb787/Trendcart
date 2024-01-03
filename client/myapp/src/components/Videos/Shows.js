import Video from './Video';
import Header from '../Home/Header';

const Shows = (src) => 
{ 
  return (  
  <div className = "Shows">
    <Header/>  
    <h1 className = "showsHeading">Explore funny shows here...</h1>
    <ul className = "videoCollection"> 
    <li className = "videoCollectionItems">
    <Video src="https://www.youtube.com/embed/mJhLSxYTH4c" />
    </li>
    <li className = "videoCollectionItems">
    <Video src="https://www.youtube.com/embed/nG3ev9q5WVk" />
    </li>
    <li className = "videoCollectionItems">
    <Video src="https://youtube.com/embed/HuQ5LzWcJSo" />
    </li>
    </ul>
    <br/>
    <br/>
    <ul className = "videoCollection"> 
    <li className = "videoCollectionItems">
    <Video src="https://youtube.com/embed/d7vyqem4RwU" />
    </li>
    <li className = "videoCollectionItems">
    <Video src="https://youtube.com/embed/enyCO7HPv18" />
    </li>
    <li className = "videoCollectionItems">
    <Video src="https://youtube.com/embed/z6kcCcCjHgA" />
    </li>
    </ul>
    <br/>
    <br/>
    <ul className = "videoCollection"> 
    <li className = "videoCollectionItems">
    <Video src="https://youtube.com/embed/ARWbsGi-dWU" />
    </li>
    <li className = "videoCollectionItems">
    <Video src="https://youtube.com/embed/61xbuz0_Y6I" />
    </li>
    <li className = "videoCollectionItems">
    <Video src="https://youtube.com/embed/zcGzWjdJVoQ" />
    </li>
    </ul>
    <br/>
    <br/>
    <ul className = "videoCollection"> 
    <li className = "videoCollectionItems">
    <Video src="https://youtube.com/embed/U6zqIrdzQdM" />
    </li>
    <li className = "videoCollectionItems">
    <Video src="https://youtube.com/embed/oPp4htuqDOs" />
    </li>
    <li className = "videoCollectionItems">
    <Video src="https://youtube.com/embed/qHBYSCnAtSc" />
    </li>
    </ul>
  </div>
  )
;
 }

export default Shows