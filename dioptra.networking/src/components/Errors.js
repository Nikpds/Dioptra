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
                pagination={{
                    pageSize: 6
                }}
                size="small"
                header={<div><T.Paragraph strong className="mb-0">
                    <Icon type="warning" className="mr-2" theme="twoTone" twoToneColor="red" />
                    Σφάλματα Επικοινωνίας  <Badge className="is-right" count={data.length} /></T.Paragraph>
                    <span onClick={ctx.clearErrors} className="mb-0 is-link">καθαρισμός όλων</span></div>}
                bordered
                dataSource={data}
                renderItem={item => (<ErrorItem error={item} />)}></List>
        </Card>
    );
};

export default Errors;