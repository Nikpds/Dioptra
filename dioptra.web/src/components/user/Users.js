import React from 'react';
import UsersContainer from '../containers/user/UsersContainer'
import { Card } from 'antd'
import { strings } from '../../contexts/LocalizationProvider'
import ActionHeader from '../shared/ActionHeader'
import Table from '../shared/Table'




const UserList = ({ users, onCreate, onEdit, onDelete }) => {
    const headers = [
        {
            title: strings.users.fullname,
            dataIndex: 'fullName',
            key: 'fullname'

        },
        {
            title: strings.users.unit,
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: strings.users.username,
            dataIndex: 'userName',
            key: 'username'
        },
        {
            title: strings.users.email,
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: strings.users.phone,
            dataIndex: 'phone',
            key: 'phone'
        }
    ]
    return (
        <div>
            <ActionHeader
                title={strings.users.headerTitle}
                subtitle={(users.length)}
                actions={[
                    {
                        onClick: onCreate,
                        name: strings.users.create,
                        type: 'primary'
                    }
                ]}
            />
            <Card style={{ margin: 20 }} className="has-shadow" bodyStyle={{padding: 0}}>
                <Table data={users} columns={headers} />
            </Card>
        </div>
    );
};

const Users = () => (
    <UsersContainer>
        <UserList />
    </UsersContainer>
)
export default Users;