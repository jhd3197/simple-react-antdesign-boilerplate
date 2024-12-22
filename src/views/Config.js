import React, { useState } from 'react';
import { Typography, Form, Input, Button, Slider, DatePicker, Switch, TimePicker, Space } from 'antd';
import { ColorPicker } from 'antd';

const { Title } = Typography;

function Config() {
  const [color, setColor] = useState('#1677ff');

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  const onFinish = (values) => {
    console.log('Config values:', values);
  };

  return (
    <div>
      <Title level={2}>Configuration</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item name="color" label="Color Picker">
          <ColorPicker
            value={color}
            onChange={handleColorChange}
            addonAfter={<div style={{ backgroundColor: color, width: 20, height: 20 }} />}
          />
        </Form.Item>
        <Form.Item name="notificationLevel" label="Notification Level">
          <Slider min={0} max={100} />
        </Form.Item>
        <Form.Item name="date" label="Select Date">
          <DatePicker />
        </Form.Item>
        <Form.Item name="switch" label="Enable Feature">
          <Switch />
        </Form.Item>
        <Form.Item name="time" label="Select Time">
          <TimePicker />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save Config
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Config;