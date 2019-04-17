import React, { useState } from 'react';
import { PageHeader, Input, Table, Button, Icon, } from 'antd';
import Highlighter from 'react-highlight-words';
import SharedModal from '../../shared/components//SharedModal';
import GFrom from '../../shared/components/GForm';
const JrflType = () => {
    const [searchText, setSearchText] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const modalHandler = () => {
        setModalIsOpen(previous => !previous);
    }

    const saveHandler = async () => {

    }

    let searchInput = '';
    const data = [{
        key: '2',
        name: 'Joe Black',
        address: 'London No. 1 Lake Park',
    }, {
        key: '3',
        name: 'Jim Green',
        address: 'Sidney No. 1 Lake Park',
    }, {
        key: '4',
        name: 'Jim Red',
        address: 'London No. 2 Lake Park',
    }];
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys, selectedKeys, confirm, clearFilters,
        }) => (
                <div style={{ padding: 8 }}>
                    <Input
                        ref={node => { searchInput = node; }}
                        placeholder={`Search ${dataIndex}`}
                        value={selectedKeys[0]}
                        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                        onPressEnter={() => handleSearch(selectedKeys, confirm)}
                        style={{ width: 188, marginBottom: 8, display: 'block' }}
                    />
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm)}
                        icon="search"
                        size="small"
                        style={{ width: 90, marginRight: 8 }}
                    >
                        Search
        </Button>
                    <Button
                        onClick={() => handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
        </Button>
                </div>
            ),
        filterIcon: filtered => <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.select());
            }
        },
        render: (text) => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    })

    const handleSearch = (selectedKeys, confirm) => {
        confirm();
        setSearchText('');
    }

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    }
    const columns = [{
        title: '#',
        dataIndex: 'index',
        key: 'index',
        width: '20px'
    }, {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sadad: 'asdasd',
        ...getColumnSearchProps('name'),
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        ...getColumnSearchProps('address'),
    }];
    return (
        <React.Fragment>
            <SharedModal title="Εισαγωγή Τύπου"
                visible={modalIsOpen} onCancel={modalHandler} onSave={saveHandler}><GFrom />
            </SharedModal>
            <PageHeader
                onBack={() => window.history.back()}
                title="JRFL Types"
                subTitle="Search the type your are looking for"
                extra={[
                    <Button key="3">Ανανέωση</Button>,
                    <Button key="1" type="primary" onClick={modalHandler}> Νέο </Button>
                ]} >
            </PageHeader>
            <Table columns={columns} dataSource={data} />
        </React.Fragment>
    );
};

export default JrflType;