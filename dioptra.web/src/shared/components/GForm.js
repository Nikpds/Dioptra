import React from 'react';
import { Form, Input, Button } from 'antd';

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
                this.props.onSubmit('values');
            }
        });
    }

    const fields = props.formFields.map((item, i) => <Form.Item key={i} label={item.label} >
        {getFieldDecorator(item.model, {
            initialValue: item.initialValue ? item.initialValue : '',
            rules: item.rules ? item.rules : [],
        })( item.type === 'textarea' ?
            <Input.TextArea placeholder={item.placeholder}/> :
            <Input type={item.type} placeholder={item.placeholder} />
        )}
    </Form.Item>);

    return (
        <Form {...formItemLayout} onSubmit={handleSubmit}>
            {fields}
        </Form>
    );
};
const WrappedRegistrationForm = Form.create({ name: 'gfrom' })(GForm);
export default WrappedRegistrationForm;