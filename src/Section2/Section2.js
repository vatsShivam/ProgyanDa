import { Card } from 'react-bootstrap';
import "./Section2.css";
function Section2() {
    return(
   <div className="section2_wrapper">
      <div>
        <h5 className="section2_header">Instagram</h5>
        <div className="underline"></div>
      </div>
      <div>
          <img src="video.png" alt="hii"  className="section2_image"/>
      </div>
      <div>
      <img src="social.jpeg"style={{width:"100px",height:"50px",paddingRight:"20px",paddingTop:"10px"}}/>
      </div>
   </div>
    )
}

export default Section2;
