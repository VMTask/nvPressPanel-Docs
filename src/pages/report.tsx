import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
const { TextArea } = Input;
const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

const App: React.FC = () => (
    <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        id="report"
    >
        <Form.Item
            rules={[{ required: true }]}
        >
            <>
                <TextArea rows={4} placeholder="写下您的建议" maxLength={6} />
            </>
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                提交
            </Button>
        </Form.Item>
    </Form>
);

export default App;
