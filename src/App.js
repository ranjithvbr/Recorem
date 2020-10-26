import React from "react";
import { Layout, Menu ,Dropdown , message } from 'antd';
import {
    UserOutlined,
    BellOutlined,
    EnvironmentOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    DownOutlined
} from '@ant-design/icons';
import './App.scss';
import 'antd/dist/antd.css';
import InsideContent from "./InsideContent"
import MetaCard from "./MetaCard";
import ListCard from "./ListCard";

const {Content, Sider } = Layout;

const onClick = ({ key }) => {
    message.info(`Click on item ${key}`);
  };

const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd memu item</Menu.Item>
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

class App extends React.Component {
    render() {
        return ( 
        <div>
            <div className = "barContainer" >
                <div className = "companyLogo" > Recorem </div> 
                <div className = "currentLocation" >
                    <div>
                        <EnvironmentOutlined className = "currentLocationIcon" /> Hong Kong
                    </div> 
                    <div className = "userLogo" >
                        <BellOutlined className="userLogoIcon" />
                        <div className = "userContainer" >
                            <UserOutlined className = "bellIcon" /> 
                            <Dropdown overlay = { menu } >
                                <a className = "ant-dropdown-link"
                                onClick = { e => e.preventDefault() } >
                                <span>Hello Jackie.!</span> < DownOutlined />
                                </a> 
                            </Dropdown> 
                        </div> 
                    </div> 
                </div> 
            </div> 
            <Layout >
                <Sider width = { 200 } className = "site-layout-background" >
                    <Menu mode = "inline" className = "site-layout-background" defaultSelectedKeys = { ['1'] } >
                        <Menu.Item key = "1" icon = { < UserOutlined /> } >nav 1 </Menu.Item> 
                        <Menu.Item key = "2" icon = { < VideoCameraOutlined /> } >nav 2 </Menu.Item> 
                        <Menu.Item key = "3" icon = { < UploadOutlined /> } > nav 3 </Menu.Item> 
                    </Menu> 
                </Sider> 
                <Layout >
                    <Content className = "site-layout-background"
                    style = {
                        {
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }
                    } >
                        <InsideContent />
                        <div className="ListOfContent">
                            <div className="recommendedText">
                                <div className="OngoingText">Recommended</div>
                                <div>View More</div>
                            </div>
                        <div className="metacardAlign">
                        <MetaCard event={"Live Event"} IMG={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOd256TcC6vcaQ99TYzoP0pBbch9_Q-bbrmw&usqp=CAU"}/> 
                        <MetaCard event={"Virtual Event"} IMG={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQxsoLDmXFywRjuEnwqPEnqsidsS2hVb29ew&usqp=CAU"}/> 
                        <MetaCard event={"Offline"} IMG={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQOfZTBonIzjh4NYownnss1G9rAJP2xh8EOmA&usqp=CAU"}/> 
                        <MetaCard event={"Virtual Event"} IMG={"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSlO6p0zZcSQSNRXiaMsmfPHZb8nCSdgiXnNQ&usqp=CAU"} /> 
                        </div>

                        <ListCard />
                        </div>

                    </Content> 
                </Layout> 
            </Layout> 
            </div>
        )
    }
}

export default App;