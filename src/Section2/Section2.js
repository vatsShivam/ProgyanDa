import { Card } from "react-bootstrap";
import { Tabs } from "antd";
import "./Section2.css";
import Section3 from "../Section3/Section3";
import {
  InstagramOutlined,
  FacebookOutlined,
  GlobalOutlined,
  WhatsAppOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const Demo = () => (
  <div className="shivam">
    <Tabs defaultActiveKey="1" onChange={callback}>
      <TabPane
        tab={
          <span>
            <GlobalOutlined />
            Feed
          </span>
        }
        key="1"
      >
        <Section3 />
      </TabPane>
      <TabPane
        tab={
          <span>
            <InstagramOutlined />
            Instagram
          </span>
        }
        key="2"
      >
        Content 2
      </TabPane>

      <TabPane
        tab={
          <span>
            <FacebookOutlined />
            Facebook
          </span>
        }
        key="3"
      >
        Content 3
      </TabPane>
      <TabPane
        tab={
          <span>
            <WhatsAppOutlined />
            Whatsapp
          </span>
        }
        key="4"
      >
        Content 4
      </TabPane>
      <TabPane
        tab={
          <span>
            <LinkedinOutlined />
            Linkdien
          </span>
        }
        key="5"
      >
        Content 5
      </TabPane>
    </Tabs>
  </div>
);
export default Demo;
