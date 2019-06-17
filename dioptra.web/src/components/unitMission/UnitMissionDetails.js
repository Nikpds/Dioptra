import React from 'react';
import { strings } from '../../contexts/LocalizationProvider'
import { Form, Input, Card } from 'antd'
import ActionHeader from '../shared/ActionHeader'
import UnitMissionContainer from '../containers/unitMission/UnitMissionContainer'

const UnitMissionDetails = ({ onBack, onSave, onDelete, mission, onCancel }) => {
    return (
        <div>
            <ActionHeader
                onBack={onBack}
                title="Νεος Αποστολή Μονάδας"
                actions={[
                    { onClick: onCancel, name: strings.mission.cancel, type: 'default' },
                    {
                        onClick: onDelete,
                        name: strings.mission.delete,
                        type: 'danger',
                        show: !mission.id
                    },
                    { onClick: onSave, name: strings.mission.save }
                ]}
            />
            <Card style={{ margin: 20 }} className="has-shadow">
                <Form labelCol={{ xs: { span: 8 } }} wrapperCol={{ xs: { span: 8 } }}>
                    <Form.Item label={strings.mission.name}>
                        <Input value="" onChange={() => null} />
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};
const UnitMissionForm = () => (
    <UnitMissionContainer>
      <UnitMissionDetails />
    </UnitMissionContainer>
  )
export default UnitMissionForm;