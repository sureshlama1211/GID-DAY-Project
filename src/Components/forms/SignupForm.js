import React, { useState } from 'react';
import useToken from '../../auth/useToken';
import { Link } from 'react-router-dom';


import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  Switch,
} from 'antd';




export default function SignupForm() {
 
  return (
    <div>
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
      className='mt-10'
      
    >
      
      <Form.Item label="FirstName">
        <Input />
      </Form.Item>
      <Form.Item label="LastName">
        <Input />
      </Form.Item>
      <Form.Item label="Gender">
        <Select>
          <Select.Option value="1">Male</Select.Option>
          <Select.Option value="2">FeMale</Select.Option>
          <Select.Option value="3">Others</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Genre">
        <Select>
          <Select.Option value="1">Hip Hop</Select.Option>
          <Select.Option value="2">LokDohori</Select.Option>
          <Select.Option value="3">Folk</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="skill">
        <Select>
          <Select.Option value="1">Begineer</Select.Option>
          <Select.Option value="2">Intermediate</Select.Option>
          <Select.Option value="3">Professional</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Date of Birth">
        <DatePicker />
      </Form.Item>
    </Form>
    <Link to='/login'>
    <button  className='ml-[10%] border-2 border-black rounded-xl hover:bg-orange-400'>logout</button>
    </Link>
    </div>
  );
};


