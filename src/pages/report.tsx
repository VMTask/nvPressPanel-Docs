import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { notification, Space } from 'antd';
const { TextArea } = Input;
type NotificationType = 'success' | 'info' | 'warning' | 'error';
import axios from "axios";


const App: React.FC = () => {
  const [api, contextHolder] = notification.useNotification();
  const onFinish = (values: any,type: NotificationType) => {
    console.log('Success:', values["value"]);
    axios.post("https://UnripeAdmiredVariety.vmtask.repl.co/api/report_bugs", { text: values["value"] }, { withCredentials: true }).then(res => {
      api[type]({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      });
    })
  };
  const onFinishFailed = (errorInfo: any,type: NotificationType) => {
    console.log('Failed:', errorInfo);
    const [messageApi, contextHolder] = message.useMessage();
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: "auto", minWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="反馈内容"
          name="value"
          rules={[{ required: true, message: '请输入内容' }]}
        >
          <TextArea rows={4} placeholder="内容" maxLength={6} />
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </>
  )
};


export default App;