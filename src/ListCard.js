import React from "react";
import { Card } from 'antd';
import "./list.scss";
import { CalendarOutlined, DesktopOutlined } from '@ant-design/icons';


class ListCard extends React.Component{
    render(){
        return(
            <div className="listMaster">
                <div className="listContainer">
                    <div className="OngoingText">Upcoming</div>
                    <div>View More</div>
                </div>
                <div className="setDateMargin">Aug 30,2020</div>
                <hr />
                <Card>
                    <b>Future of Js meetup</b>
                    <div className="upcomingEvent"><CalendarOutlined />&nbsp;&nbsp;&nbsp; Aug 27,2020 at 10:30 AM - 2:00 PM &nbsp;&nbsp;&nbsp;<DesktopOutlined />&nbsp;&nbsp; Online Event</div>
                </Card>
                <Card>
                    <p>UX Designer Conference</p>
                </Card>
                <div className="setDateMargin">sep 20,2020</div>
                <hr />
                <Card>
                    <b>UX Designer Conference</b>
                    <div className="upcomingEvent"><CalendarOutlined />&nbsp;&nbsp;&nbsp; Aug 27,2020 at 10:30 AM - 2:00 PM &nbsp;&nbsp;&nbsp;<DesktopOutlined />&nbsp;&nbsp; Online Event</div>
                </Card>
            </div>
        )
    }
}

export default ListCard;