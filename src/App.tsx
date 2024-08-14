import React from 'react';

// import { H } from 'highlight.run';

import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

// H.init('correct project id', {
//   serviceName: 'frontend-app',
//   disableConsoleRecording: false,
//   inlineStylesheet: false,
//   networkRecording: {
//     enabled: true,
//     recordHeadersAndBody: true,
//     urlBlocklist: [
//       // insert full or partial urls that you don't want to record here
//       // Out of the box, Highlight will not record these URLs (they can be safely removed):
//       'https://www.googleapis.com/identitytoolkit',
//       'https://securetoken.googleapis.com',
//     ],
//   },
// });

function App() {
  const [form] = Form.useForm();

  const handleSubmit = (values: any): void => {
    console.log(handleSubmit, values)
  };
  return (
      // wrong code
      // <div className="App">
      //   <Form className="login-form" onFinish={handleSubmit} form={form}>
      //     <Form.Item
      //         name="login"
      //         rules={[{ required: true, message: "translate('loginRequiredValidator')" }]}
      //     >
      //       <Input
      //           placeholder="login"
      //           prefix={<UserOutlined className="login-form__icon" />}
      //       />
      //     </Form.Item>
      //
      //     <Form.Item
      //         name="password"
      //         rules={[{ required: true, message: "translate('passwordRequiredValidator')" }]}
      //     >
      //       <Input.Password
      //           placeholder="password"
      //           prefix={<LockOutlined className="login-form__icon" />}
      //       />
      //     </Form.Item>
      //     <div>
      //       <Button htmlType="submit" type="primary">
      //         OK
      //       </Button>
      //     </div>
      //   </Form>
      // </div>

      // correct code
      <div className="App">
        <Form className="login-form" onFinish={handleSubmit} form={form}>
            <Input
                placeholder="login"
                prefix={<UserOutlined className="login-form__icon"/>}
            />

            <Input.Password
                placeholder="password"
                prefix={<LockOutlined className="login-form__icon"/>}
            />
          <div>
            <Button htmlType="submit" type="primary">
              OK
            </Button>
          </div>
        </Form>
      </div>
  );
}

export default App;
