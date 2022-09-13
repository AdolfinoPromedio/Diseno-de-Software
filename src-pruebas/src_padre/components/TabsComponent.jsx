import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
/* import Sonnet from '../../components/Sonnet'; */

export const TabsComponent = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus nisi, dignissim id rutrum et, molestie in eros. Phasellus mattis nulla ac nibh sodales, a vestibulum eros suscipit. Duis id lorem neque. Praesent mollis, augue dapibus volutpat efficitur, enim quam dictum ipsum, ac sagittis felis urna ac nulla. Nullam purus velit, tincidunt non hendrerit sit amet, malesuada nec leo. Donec sit amet sollicitudin orci. Maecenas tristique lorem id arcu ultrices, vitae luctus metus cursus. Ut porttitor urna a justo placerat faucibus. Sed ut neque cursus, accumsan neque sed, placerat est. Vivamus porta sed eros vel sodales. Integer tortor augue, bibendum eu congue vitae, hendrerit id sem. Duis ac nibh blandit, mattis nisl vel, varius neque.
        <br></br>
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="profile" title="Profile">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        {/* <Sonnet /> */}
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        {/* <Sonnet /> */}
      </Tab>
    </Tabs>
  )
};

export default TabsComponent