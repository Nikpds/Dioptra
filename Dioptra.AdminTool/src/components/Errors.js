import React, { useContext } from 'react';
import { List, Card, Typography as T, Icon, Badge } from 'antd';
import ErrorItem from './ErrorItem';
import { ErrorContext } from '../layout/Home';
const Errors = () => {
    const ctx = useContext(ErrorContext);
    const data = ctx.errors;
    return (
        <Card bodyStyle={{ padding: 0 }}>
            <List
                size="small"
                header={<T.Text strong>
                    <Icon type="warning" className="mr-2" theme="twoTone" twoToneColor="red" />
                    Σφάλματα Επικοινωνίας  <Badge className="is-right" count={data.length} /></T.Text>}
                bordered
                dataSource={data}
                renderItem={item => (<ErrorItem error={item} />)}></List >
        </Card>
    );
};

export default Errors;