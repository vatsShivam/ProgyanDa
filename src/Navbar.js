import { Navbar } from "react-bootstrap";
import { MoreOutlined, LogoutOutlined ,SettingFilled,DashboardOutlined} from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
const menu = (
  <Menu style={{ minWidth: "150px", marginTop: "5px", padding: "3px" }}>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
        style={{ fontSize: "20px", padding: "10px" }}
      >
       <SettingFilled/> Account Setting
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.tmall.com/"
        style={{ fontSize: "20px",padding:"10px" }}
      >
      < DashboardOutlined/> Dashboard
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
        style={{ fontSize: "20px",padding:"10px"}}
      >
        <LogoutOutlined /> Logout
      </a>
    </Menu.Item>
  </Menu>
);
function Navigation() {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="justify-content-between"
      >
        <Navbar.Brand href="#home" style={{ paddingTop: "20px" }}>
          LYNK
        </Navbar.Brand>
        <div>
          <Dropdown overlay={menu}>
            <a
              href="#dhdjsh"
              className="ant-dropdown-links"
              onClick={(e) => e.preventDefault()}
              style={{
                textDecoration: "none",
                color: "white",
                paddingRight: "30px",
                fontSize: "27px",
              }}
            >
              <MoreOutlined />
            </a>
          </Dropdown>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;
