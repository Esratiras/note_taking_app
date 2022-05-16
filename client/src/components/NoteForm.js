import {Form, Input, Button,Upload} from 'antd';
import {InboxOutlined} from "@ant-design/icons";


const normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
        return e;
    }
    return e && e.fileList;
};
const addNewNote = () => {
    console.log("burasııı")

};
const NoteForm = () => {
    const onFinish = (values) => {
        console.log(values);
    };

    return (
        <div className="form-content">
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Note Title"
                    name="NoteTitle"
                    rules={[{ required: true, message: 'Please input your note title!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Note Content"
                    name="NoteContent"
                    rules={[{ required: true, message: 'Please input your note content!' }]}
                >
                    <Input.TextArea showCount maxLength={100} autoSize={{ minRows: 9, maxRows: 9 }} />
                </Form.Item>
                <Form.Item label="Dragger">
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
                        <Upload.Dragger name="files" action="/upload.do">
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={addNewNote}>
                        Add
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default NoteForm;