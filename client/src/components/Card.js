import { Card, Avatar,Col, Row } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

const CardComp = () => {
    const data = [1,2,3,4,5]
    const navigate = useNavigate();

    const editNote = () => {
        navigate('/edit-note');

    };

    return (
        <div className="card-content">
            <Row gutter={16}>
                {data.length > 0 ? data.map((item,i)=>(
                <Col span={8} style={{paddingBottom:"50px"}}>
                        <Card
                        style={{width: 300}}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <DeleteOutlined key="delete"/>,
                            <EditOutlined key="edit" onClick={editNote}/>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                )) : "Note notes yet"}
            </Row>
        </div>
    )
}
export default CardComp