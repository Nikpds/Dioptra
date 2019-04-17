import React from 'react';
import { Form, Input } from 'antd';

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
    const bla = [{ label: 'Title', type: 'text', placeholder: 'Some title' },
    { label: 'Description', type: 'text', placeholder: 'Some Description' }]
    const handleSubmit = () => { }

    const fields = bla.map((item, i) => <Form.Item key={i} label={item.label} >
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
        </Form>
    );
};
const WrappedRegistrationForm = Form.create({ name: 'gfrom' })(GForm);
export default WrappedRegistrationForm;