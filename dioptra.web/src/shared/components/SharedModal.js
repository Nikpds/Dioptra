import React, { useState } from 'react';
import { Modal } from 'antd';

const SharedModal = props => {

    return (
        <Modal
            title={props.title}
            visible={props.visible}
            okText={props.okText ? props.okText : 'OK'}
            cancelText={props.cancelText ? props.cancelText : 'Cancel'}
            onOk={props.onOk}
            confirmLoading={props.loading}
            onCancel={props.onCancel} >
            {props.children}
        </Modal>
    );
};

export default SharedModal;