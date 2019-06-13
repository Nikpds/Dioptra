import React from 'react';
import UserDetails from '../UserDetails'
const UserContainer = () => {

    const user = {
        userId: 1,
        userName: 'Chris',
        userSName: 'Dimpoulos',
        userRole: 'admin',
        userisActive: true,
        userNeotes: {
            mobTel: '6983501234',
            tel: '2101234567',
            office: 'ΓΕΕΘΑ/Α15'        
        }
    }

    const insertrUserHandler = () =>{
        console.log('insertrUserHandler clicked');
    }
    const updaterUserHandler = () =>{
        console.log('updaterUserHandler clicked');
    }
    const deleteUserHandler = () =>{
        console.log('deleteUserHandler clicked');
    }
    return (
        <div>
            <UserDetails
                insert={props =>insertrUserHandler(props)}
                update={props => updaterUserHandler(props)}
                delete={id => deleteUserHandler(id)}
                user={user}
            />
        </div>
    );
};

export default UserContainer;