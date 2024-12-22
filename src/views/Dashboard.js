import React from 'react';
import { Row, Col, Card, Typography, List } from 'antd';

const { Title } = Typography;

function Dashboard() {
  return (
    <div>
      <Title level={2}>Dashboard 🎯</Title>
      <Row gutter={[16, 16]}>
        <Col span={6}>
          <Card title="📈 Total Users" bordered={false}>
            <Title level={3} style={{ margin: 0 }}>1,234</Title>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="💰 Revenue" bordered={false}>
            <Title level={3} style={{ margin: 0 }}>$56,789</Title>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="🛠️ Projects" bordered={false}>
            <Title level={3} style={{ margin: 0 }}>12</Title>
          </Card>
        </Col>
        <Col span={6}>
          <Card title="🕒 Active" bordered={false}>
            <Title level={3} style={{ margin: 0 }}>5</Title>
          </Card>
        </Col>
      </Row>
      <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
        <Col span={8}>
          <Card title="Card 1 📊" bordered={false}>
            <List>
              <List.Item>Item 1</List.Item>
              <List.Item>Item 2</List.Item>
              <List.Item>Item 3</List.Item>
            </List>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card 2 📊" bordered={false}>
            <List>
              <List.Item>Item A</List.Item>
              <List.Item>Item B</List.Item>
              <List.Item>Item C</List.Item>
            </List>
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card 3 📊" bordered={false}>
            <List>
              <List.Item>Detail X</List.Item>
              <List.Item>Detail Y</List.Item>
              <List.Item>Detail Z</List.Item>
            </List>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;