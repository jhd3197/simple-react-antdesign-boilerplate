import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

function About() {
  return (
    <div>
      <Title level={2}>About Us</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Paragraph>
      <Paragraph>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </Paragraph>
      <Paragraph>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </Paragraph>
    </div>
  );
}

export default About;