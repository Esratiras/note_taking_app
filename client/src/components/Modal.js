import React, { useState } from 'react';
import {Button, Input, Modal} from 'antd';
const { TextArea } = Input;

const Popup = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onChange = e => {
        console.log(e);
    };
    return (
        <>
            <button type="primary" className="plus" onClick={showModal}>
                +
            </button>
            <Modal title="Basic Modal" visible={isModalVisible} onCancel={handleCancel}>
                <div className="form-content">
                    <Input placeholder="Please input your note title" allowClear onChange={onChange} />
                    <br />
                    <br />
                    <TextArea placeholder="Please input your note content" maxLength={100} autoSize={{ minRows: 9, maxRows: 9 }} allowClear onChange={onChange} />
                    <br />
                    <br />
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </div>
            </Modal>
        </>
    );
};

export default Popup;