import React from "react";
import { Card,Button,Carousel } from 'antd';
import Content from "./Content.scss";
import { CalendarOutlined,DesktopOutlined,GlobalOutlined } from '@ant-design/icons'; 

const contentStyle = {
    height: '204px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#626298',
    marginBottom:'0px',
  };

class InsideContent extends React.Component{
    render(){
        return(
            <div>

                <h2>Hey,Jackie.!</h2>
                <div  className="bodyContainer">
                <Card style={{ width: "30%" }} className="CardBody">
                    <div className="eventContainer">
                        <div className="OngoingText">Ongoing Event</div>
                        <Button>Join Event</Button>
                    </div>
                    <h3>UX Designer Conference</h3>
                    <div className="timeContent">
                    <CalendarOutlined /> <div>Aug 27,2020 at 10:30 AM - 2:00 PM</div>
                    </div>
                    <div className="onlineContent">
                    <DesktopOutlined /> <div>Online Event</div>
                    </div>
                    <div className="amountAlign">
                    <div>
                        <div>Companies</div><div>150+</div>
                    </div>
                    <div>
                        <div>Jobs</div><div>300+</div>
                    </div>                   
                    <div>
                        <div>Average Pay</div><div>$ 43,000.00</div>
                    </div>
                    </div>
                </Card>

                <div className="antdCarousel">
                <Carousel autoplay>
                    <div>
                    <h3 style={contentStyle}>1</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>2</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>3</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle}>4</h3>
                    </div>
                </Carousel>
                <div>View Details --></div>

                </div>

                <Card style={{ width: "30%"}} className="verticalCard">
                    <div>
                        <div className="verticalEventsAlign">
                            <div className="globeBox">
                        <GlobalOutlined/>
                        </div>
                            <div>
                                <div>Booked Events</div>
                                <div>05</div>
                            </div>
                        </div>

                        <div className="verticalEventsAlign">
                            <div className="globeBox">
                        <GlobalOutlined/>
                        </div>
                            <div>
                                <div>Application Submitted</div>
                                <div>05</div>
                            </div>
                        </div>

                        <div className="verticalEventsAlign">
                            <div className="globeBox">
                        <GlobalOutlined/>
                        </div>
                            <div>
                                <div>Booked Events</div>
                                <div>05</div>
                            </div>
                        </div>

                        <div className="verticalEventsAlign">
                            <div className="globeBox">
                        <GlobalOutlined/>
                        </div>
                            <div>
                                <div>Booked Events</div>
                                <div>05</div>
                            </div>
                        </div>

                        <div className="verticalEventsAlign">
                            <div className="globeBox">
                        <GlobalOutlined/>
                        </div>
                            <div>
                                <div>Booked Events</div>
                                <div>05</div>
                            </div>
                        </div>
                    </div>

                </Card>
                </div>
            </div>
        )
    }
}

export default InsideContent;