import React, { useState, useRef } from 'react';
import { PageHeader, Input, Table, Button, Icon, Row, Col } from 'antd';
import Highlighter from 'react-highlight-words';
import SharedModal from '../../shared/components//SharedModal';
import GFrom from '../../shared/components/GForm';
const JrflType = () => {
    const [searchText, setSearchText] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalLoading, setModalLoading] = useState(false);
    const modalForm = useRef(null);

    const modalHandler = () => {
        setModalIsOpen(previous => !previous);
    }

    const onModalCancel = () => {
        setModalLoading(false);
        setModalIsOpen(previous => !previous);
    }

    const onModalOk = async () => {
        console.log(modalForm.current.props);
        modalForm.current.dispatch(new Event('submit'));
    }

    const formSubmit = (data) => {
        setModalLoading(true);
        console.log('The following data will be posted', data);
        // call save method
        setTimeout(() => {
            onModalCancel();
        }, 1000);
    }

    const modalFields = [{ 
        label: 'Τύπος', 
        type: 'text', 
        model: 'type', 
        rules: [{required: true, message: 'To πεδίο είναι υποχρεωτικό'}]
    }];

    let searchInput = '';
    const data = [];
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
    }];
    return (
        <Row type="flex" justify="center" align="middle">
            <Col md={24} xl={20} xxl={16}>
                <SharedModal title="Εισαγωγή Τύπου"
                    visible={modalIsOpen} onCancel={onModalCancel} onOk={onModalOk} loading={modalLoading}>
                    <GFrom formFields={modalFields} ref={modalForm} onSubmit={formSubmit}/>
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
            </Col>
        </Row>
    );
};

export default JrflType;