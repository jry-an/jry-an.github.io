import React from 'react';
import { GithubOutlined, LinkedinOutlined,MailOutlined } from '@ant-design/icons';
import SoftEng from '../soft-eng.svg'
import { Col, Row, Typography} from 'antd';

const { Title } = Typography;

export const IntroSection = (): JSX.Element => (
    <Row className="intro">
        <Col span={12} className="introHeading">
            <Title>Jack Ryan</Title>
            <Title type="secondary" level={3}>Full-stack Software Developer</Title>
            <div className="iconContainer">
            <a className="svgAnchor" href="https://github.com/jry-an" target="_blank">
                <GithubOutlined className="introIcons" />
            </a>
        
            <a className="svgAnchor" href="https://www.linkedin.com/in/jryan0" target="_blank">
                <LinkedinOutlined className="introIcons" />
            </a>
            </div>
            
        </Col>
        <Col span={12}>
            <div className="mainAvatar">
                <img style={{width: '100%'}} src={SoftEng}/>
            </div>
        </Col>
    </Row>
    );
