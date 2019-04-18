import React, { useState } from 'react';
import { Modal } from 'antd';

const SharedModal = props => {
    const [confirmLoading, setConfirmLoading] = useState(false);

    const handleOk = () => {
        setConfirmLoading(true);
        // props.onSave();
        setTimeout(() => {
            setConfirmLoading(false);
            props.onCancel();
        }, 1000);     
    }

    return (
        <Modal
            title={props.title}
            visible={props.visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={props.onCancel} >
            {props.children}
        </Modal>
    );
};

export default SharedModal;