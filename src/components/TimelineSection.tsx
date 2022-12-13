import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline, Row, Col } from 'antd';
import AdventureSVG from '../adventure.svg'

export const TimelineSection = (): JSX.Element => (
  <Row justify="center">
    <Col span={8}>
      <div className='timeline_image'>
        <img style={{width: '100%'}} src={AdventureSVG}/>
      </div>

    </Col>
    <Col span={8}>
        <Timeline className="timeline" mode="left" style={{marginTop: '64px', marginRight: '30%'}}>

        <Timeline.Item label="August 2017">Worked as an IT Technician Trainee </Timeline.Item>

        <Timeline.Item label="November 2022" color="green">Graduated from the Bachelor of Computer Science @ RMIT</Timeline.Item>

        <Timeline.Item label="July 2021" color="blue">
          Internship @ National Australia Bank
        </Timeline.Item>

        <Timeline.Item label="May 2022" color="red">Associate Engineer @ National Australia Bank</Timeline.Item>

        <Timeline.Item color="grey" label="Present"/>

      </Timeline>
    </Col>
  </Row>
  
);
