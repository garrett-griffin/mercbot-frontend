import { useState, useEffect } from 'react';
import AxiosInstance from '@/common/api/client';
import { Town } from '@/types/models'
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Col,
    Row,
} from 'react-bootstrap'

import { PageSize, Table } from '@/components'

const columns = [
    {
        Header: 'Name',
        accessor: 'name',
        defaultCanSort: true,
    },
    {
        Header: 'Region',
        accessor: 'region',
        defaultCanSort: true,
    },
    {
        Header: 'Capital',
        accessor: 'capital',
        defaultCanSort: true,
    }
]

const Towns = () => {
    const axiosInstance = AxiosInstance();
    const [towns, setTowns] = useState<Town[]>([]);
    const [isTownsLoaded, setIsTownsLoaded] = useState(false);

    useEffect(() => {
        if(!isTownsLoaded) {
            axiosInstance.get('/gameData/towns/getAll')
                .then(response => {
                    setTowns(response.data);
                    setIsTownsLoaded(true);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [isTownsLoaded]);

    const sizePerPageList: PageSize[] = [
        {
            text: '5',
            value: 5,
        },
        {
            text: '10',
            value: 10,
        },
        {
            text: '25',
            value: 25,
        },
        {
            text: 'All',
            value: towns.length,
        },
    ]

    return (
        <Row>
            <Col xs="12">
                <Card>
                    <CardHeader>
                        <Row className="align-items-center">
                            <Col>
                                <CardTitle>Mercatorio Towns</CardTitle>
                            </Col>
                        </Row>
                    </CardHeader>
                    <CardBody>
                        <Table<Town>
                            columns={columns}
                            data={towns}
                            pageSize={25}
                            sizePerPageList={sizePerPageList}
                            isSortable={true}
                            pagination={true}
                        />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
}
export default Towns;