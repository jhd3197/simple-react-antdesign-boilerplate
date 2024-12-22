import React from 'react';
import { Table, Typography } from 'antd';

const { Title } = Typography;

function TablePage() {
  const dataSource = [
    { key: '1', name: 'Alice', age: 25, address: 'Paris' },
    { key: '2', name: 'Bob', age: 30, address: 'Berlin' },
    // ...more data...
  ];

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
  ];

  return (
    <div>
      <Title level={2}>Table Page</Title>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
}

export default TablePage;