import React from 'react';
import { List } from 'antd';
const ErrorItem = props => {
    return (
        <List.Item >
            <List.Item.Meta
                title={<span>{props.error.title}</span>}
                description={props.error.description} />
            <div>{props.error.date}</div>
        </List.Item>
    );
};

export default ErrorItem;