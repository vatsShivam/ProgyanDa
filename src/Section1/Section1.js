import { Card } from "react-bootstrap";
import "./Section1.css";
function Section1() {
  return (
    <Card style={{ border: "none", padding: "20px" }}>
      <div class="d-flex flex-row justify-content-center align-items-center">
        <div class="p-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQ1-r1ErStyOBsxHAWDOKUFfZ2cjr9JXk7g&usqp=CAU"
            alt="hii"
            className="profile_pic"
          />
        </div>
        <div class="p-2">
          <h3 className="user_name">Bruno Steban</h3>
          <h4 className="user_address">Dublin,Ireland</h4>
        </div>
        <div class="p-2" style={{marginTop:"-15px",marginLeft:"20px"}}>
            <div  className="link">
                <a href="instagram.com/xyz" style={{fontSize:"20px"}}>instagram.com/xyz</a>
            </div>
            <div className="link">
                <a href="instagram.com/xyz"style={{fontSize:"20px"}}>facebook.com/xyz</a>
            </div>
        </div>
      </div>
    </Card>
  );
}

export default Section1;
