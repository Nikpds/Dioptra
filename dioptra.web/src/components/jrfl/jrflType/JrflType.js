import React from 'react';
import { Table, Divider, Tag, Icon, Button } from 'antd';
import { now } from 'moment';

// Table ColumnsAll
const columnsAll = [{
    title: 'Ονομασία Τύπου',
    dataIndex: 'nameOfType',
    visible: true,
    key: 'nameOfType',
    
}, {
    title: 'Καταχώριση από',
    dataIndex: 'insertFrom',
    visible: true,
    key: 'insertFrom',
}, {
    title: 'Μονάδα Καταχώρησης',
    dataIndex: 'insertUnit',
    visible: true,
    key: 'insertUnit',
}, {
    title: 'Χρόνος Καταχώρησης',
    dataIndex: 'timeInsert',
    visible: true,
    dataIndex: 'timeInsert',
    key: 'address',
}, {
    title: 'Ενέργειες',
    dataIndex: 'actions',
    visible: true,
    key: 'actions',
    render: (text, record) => (
        <span>
            <Button type="primary">Primary</Button>
            <Button type="danger">Danger</Button>
        </span>
    )
}];
// Data of Table
const data = [];
for (let i = 1; i <= 10; i++) {
    data.push({
        key: i,
        nameOfType: `nameOfType ${i}`,
        insertFrom: `insertFrom ${i}`,
        insertUnit: `insertUnit ${i}`,
        timeInsert: `${new Date()}`
    });
}

const JrflType = () => {
    return (
        <div >
            <h1>JrflType</h1>
            <h2>Τύποι JRFL</h2>
            <Button type="primary"><Icon type="plus" />Προσθήκη</Button>
            <Button type="primary"><Icon type="filter" />Επαναφορά Πλέγματος</Button>
            <Table columns={columnsAll} dataSource={data} />
        </div>
    );
};

export default JrflType;