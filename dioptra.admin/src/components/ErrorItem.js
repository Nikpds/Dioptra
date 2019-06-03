import React from 'react';
import { List, Typography as T } from 'antd';
const ErrorItem = props => {
    return (
        <List.Item >
            <List.Item.Meta
                title={<T.Text className="mb-0" type="danger">{props.error.title}</T.Text>}
                description={props.error.description} />
            <div>{props.error.date}</div>
        </List.Item>
    );
};

export default ErrorItem;