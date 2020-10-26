import React from "react";
import { Card } from 'antd';
import "./Metacard.scss";
import { GlobalOutlined, DesktopOutlined, RadarChartOutlined,MoneyCollectOutlined } from '@ant-design/icons';


const { Meta } = Card;


class MetaCard extends React.Component{
    render(){
        return(
            <Card
                hoverable
                style={{ width: 190,borderRadius:7 }}
        cover={<div><img alt="example" className="cardImg" src={this.props.IMG} />
        <div className={`${this.props.event==="Live Event" && "eventClrRed"} eventText`}>
            {this.props.event}
        {this.props.event==="Live Event" ? <RadarChartOutlined /> : this.props.event==="Virtual Event" ?  <GlobalOutlined />:<DesktopOutlined />}
        </div>
        </div>}
            >
            <div className="Text1">IT Submit 2020 - Online</div>
            <div className="Text2">The quick,brown for jumps</div>
            <div className="vacancyText"><MoneyCollectOutlined /> 1500+ Jobs Opportunities</div>
            <div className="onWardsText">$150 Onwards</div>
            </Card>
        )
    }

}

export default MetaCard;