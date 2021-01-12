import { Card } from 'react-bootstrap';
import './Section1.css';
function Section1() {
    return(
   <Card  style={{border:"none"}}>
       <div className="image_wrap">
       <img src="logo192.png" alt="hii" className="profile_pic"/>
       </div>
         <h3 className="user_name">Bruno Steban</h3>
         <h4 className="user_address">Dublin,Ireland</h4>
   </Card>
    )
}

export default Section1;
