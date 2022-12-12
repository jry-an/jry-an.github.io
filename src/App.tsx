import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Content } = Layout;
import './App.css';
import {TimelineSection} from './components/TimelineSection'
import {Navigation} from './components/Navigation';
import { IntroSection } from './components/IntroSection';

function App() {
  return (
    <Layout hasSider className="App">
      <Navigation/>
      <Content>
        <IntroSection />
        <TimelineSection/>
        <a href="https://www.vecteezy.com/free-vector/developer">Developer Vectors by Vecteezy</a>
      </Content>
    </Layout>
  );
}

export default App;
