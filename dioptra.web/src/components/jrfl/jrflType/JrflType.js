import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Table, Divider, Tag, Icon, Button } from 'antd';
import { now } from 'moment';
import { randomBytes } from 'crypto';
// import Highlighter from 'react-highlight-words';

// Data of Table
const data = [];
const dates = [42, 32, 32, 31, 25, 28, 27, 29, 18, 80, 42];
for (let i = 1; i <= 10; i++) {
    data.push({
        key: i,
        nameOfType: `nameOfType ${i}`,
        insertFrom: `insertFrom ${i}`,
        insertUnit: `insertUnit ${i}`,
        timeInsert: dates[i]
        /* timeInsert: `${new Date()}` */
    });
}


const JrflType = () => {

    const sortandfilter = {
        filteredInfo: null,
        sortedInfo: null
    };
    const [sortandfilterState, setsortandfilterState] = useState(sortandfilter);
    let { sortedInfo, filteredInfo } = sortandfilterState;

    const clearAll = () => {
        console.log('tha ta katharisw ola');
        console.log(sortandfilterState);
        
        setsortandfilterState(
            {
                ...sortandfilterState,
                filteredInfo: null,
                sortedInfo: null
            }
        )
        console.log(sortandfilterState);
        /*setsortandfilterState(
            sortandfilterState.filteredInfo = {},
            sortandfilterState.sortedInfo = {},
        );*/
    };

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        /*setsortandfilterState(
            {
                ...sortandfilterState,
                filteredInfo: filters,
                sortedInfo: sorter,
            })*/
        console.log(sortandfilterState.filteredInfo);
        console.log(sortandfilterState.sortedInfo);
    }

    const setAgeSort = () => {
        console.log('Kanw sort stis monades');
        setsortandfilterState(
            {
                ...sortandfilterState,
                sortedInfo: { order: 'descend', columnKey: 'insertUnit' }
            })
        console.log(sortandfilterState.filteredInfo);
        console.log(sortandfilterState.sortedInfo);
    }

    //const sortedInfo = sortedInfo || {};
    // const filteredInfo = filteredInfo || {};
    // Table ColumnsAll

    const columnsAll = [{
        title: 'Ονομασία Τύπου',
        dataIndex: 'nameOfType',
        visible: true,
        key: 'nameOfType',
        sortDirections: ['descend', 'ascend'],
        sorter: (a, b) => a.nameOfType > b.nameOfType,
        sortDirections: ['descend', 'ascend'],
        //sortOrder: sortedInfo.columnKey === "nameOfType" && sortedInfo.order
        //sortOrder: this.sortandfilter.sortedInfo.columnKey === 'nameOfType' && this.sortandfilter.sortedInfo.order,
    }, {
        title: 'Καταχώριση από',
        dataIndex: 'insertFrom',
        visible: true,
        key: 'insertFrom',
        sorter: (a, b) => a.insertFrom > b.insertFrom,
        sortDirections: ['descend', 'ascend'],
        //sortOrder: sortedInfo.columnKey === 'insertFrom' && sortedInfo.order
        //sortOrder: sortandfilter.sortedInfo.columnKey === 'insertFrom' && sortandfilter.sortedInfo.order,
    }, {
        title: 'Μονάδα Καταχώρησης',
        dataIndex: 'insertUnit',
        visible: true,
        key: 'insertUnit',
        filters: [
            {text: "ΓΕΕΘΑ",value: "ΓΕΕΘΑ"},
            {text: "ΓΕΑ",value: "ΓΕΑ"},
            {text: "insertUnit 1",value: "insertUnit 1"}
        ],
        filteredValue: sortandfilterState.filteredInfo || null,
        onFilter: (value, record) => record.insertUnit.indexOf(value),
        sorter: (a, b) => a.insertUnit > b.insertUnit,
        //sortDirections: ['descend', 'ascend'],
        //sortOrder: sortedInfo.columnKey === 'insertUnit' && sortedInfo.order
    }, {
        title: 'Χρόνος Καταχώρησης',
        dataIndex: 'timeInsert',
        visible: true,
        key: 'timeInsert',
        // defaultSortOrder: 'descend',
        sorter: (a, b) => a.timeInsert - b.timeInsert,
        //sortOrder: sortedInfo.columnKey === 'timeInsert' && sortedInfo.order
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
    // End of Table ColumnsAll

    return (
        <div >
            <h1>JrflType</h1>
            <h2>Τύποι JRFL</h2>
            <Button type="primary"><Icon type="plus" />Προσθήκη - show all</Button>
            <Button type="primary" onClick={setAgeSort}><Icon type="filter" />Επαναφορά Πλέγματος - Monades sort</Button>
            <Button type="primary" onClick={clearAll}>Clear filters and sorters</Button>
            <Table columns={columnsAll} dataSource={data} onChange={handleChange} />
        </div>
    );
};

export default JrflType;