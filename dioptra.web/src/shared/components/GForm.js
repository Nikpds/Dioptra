import React from 'react';
import { Form, Input,Button } from 'antd';
import { callFetch } from '../../services/common/HttpService';
const GForm = props => {
    const { getFieldDecorator } = props.form;
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
            console.log('Received', values);
        });
        // callFetch('http://localhost:50971/api/jrfl','POST')
    }



    const fields = props.formFields.map((item, i) => <Form.Item key={i} label={item.label} >
        {getFieldDecorator('password', {
            rules: [{
                required: true, message: 'Please input your password!',
            }],
        })(
            <Input type={item.type} placeholder={item.placeholder} />
        )}
    </Form.Item>)
    return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
            {fields}
            <Button type="primary" htmlType="submit">Register</Button>
        </Form>
    );
};
const WrappedRegistrationForm = Form.create({ name: 'gfrom' })(GForm);
export default WrappedRegistrationForm;