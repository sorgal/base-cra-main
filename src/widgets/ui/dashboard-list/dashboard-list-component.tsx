import React, {useCallback, useEffect} from 'react'

import {createDashboardTC, getDashboardListTC} from "../../../features/model/dashboard/dashboard-thunk";
import {useAppDispatch, useAppSelector} from '../../../shared/hooks/hooks'
import {getDashboardList} from "../../../features/model/dashboard/dashboard-selectors";
import {Dashboard} from "../../../features";
import {CreateButton} from "../../../shared";
import {Space, Title, Panel} from '@shturval/takelage-ui';
import {Col, Row} from 'antd'

import styles from './dashboard-list.module.css'

export const DashboardListComponent = () => {

    const dispatch = useAppDispatch()

    const dashboardList = useAppSelector(getDashboardList)

    useEffect(() => {
        dispatch(getDashboardListTC())
    }, [])

    const handleCreateDashboard = useCallback((title: string) => {
        dispatch(createDashboardTC(title))
    }, [dispatch])

    const dashboardListUI = dashboardList.map((dashboard) =>
        <Col span={6} key={dashboard.id}>
            <Dashboard id={dashboard.id} title={dashboard.title} addedDate={dashboard.addedDate}/>
        </Col>
    )

    return(
        <Space size={'extra'} direction={'vertical'}>
            <Panel className={styles.topPanel}>
                <Title>Create new Dashboard</Title>
                <CreateButton onCreateValue={handleCreateDashboard} placeholder={'dashboaard title'} />
            </Panel>
            <Row gutter={[16, 16]}>
                {dashboardListUI}
            </Row>
        </Space>
    )
}