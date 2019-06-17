import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import api from '../../../services/api'

const UnitMissionContainer = props => {

    const { id } = props.match.params
    const { children, history } = props
    const [mission, setMission] = useState({})


    async function onSave() {
        if (mission.id) {
            await api.put(`/api/admin/users/${id}`, mission)
        } else {
            await api.post(`/api/admin/users`, mission)
        }
    }

    function onBack() {
        history.push('/home')
    }

    function onCancel() {
        onBack()
    }

    async function onDelete() {
        await api.delete(`/api/admin/users/${id}`)
        history.push('/admin/users')
    }
    return React.Children.map(children, child =>
        React.cloneElement(child, {
            mission,
            onBack,
            onCancel,
            onSave,
            onDelete
        })
    )
};

export default withRouter(UnitMissionContainer);