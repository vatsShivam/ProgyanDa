import { Card } from 'react-bootstrap';
import "./Section3.css";
function Section3() {
    return(
   <div className="section3_wrapper">
      <div className="box" style={{marginLeft:"10px"}}>
          <img src="social.jpeg"style={{width:"400px"}}/>
          <img src="social.jpeg"style={{width:"400px",paddingTop:"10px"}}/>
         
      </div>
      <div className="box">
      <img src="social.jpeg"style={{width:"400px",height:"400px"}}/>
      </div>
      <div className="box" style={{marginRight:"20px"}}>
      <img src="social.jpeg"style={{width:"400px"}}/>
      <div style={{display:"flex"}}>
      <img src="social.jpeg"style={{width:"250px",paddingTop:"10px"}}/>
      <img src="social.jpeg"style={{width:"150px",paddingTop:"10px",paddingLeft:"10px"}}/>
      </div>
      </div>
   </div>
    )
}

export default Section3;
