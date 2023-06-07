import React, {useEffect} from 'react'

import {createDashboardTC, getDashboardListTC} from "../../model/dashboard/dashboard-thunk";
import {useAppDispatch, useAppSelector} from '../../../shared/hooks/hooks'
import {getDashboardList} from "../../model/dashboard/dashboard-selectors";
import {Dashboard} from "../../index";
import {CreateButton} from "../../../shared";

export const DashboardListComponent = () => {

    const dispatch = useAppDispatch()

    const dashboardList = useAppSelector(getDashboardList)

    useEffect(() => {
        dispatch(getDashboardListTC())
    }, [])

    const handleCreateDashboard = (title: string) => {
        dispatch(createDashboardTC(title))
    }

    const dashboardListUI = dashboardList.map((dashboard) =>
        <Dashboard key={dashboard.id} id={dashboard.id} title={dashboard.title} addedDate={dashboard.addedDate}/>
    )

    return(
        <div>
            <h2>Dashboard</h2>
            <div>
                <CreateButton entityName={'Dashboard'} onCreateValue={handleCreateDashboard} />
            </div>
            <div>
                {dashboardListUI}
            </div>
        </div>
    )
}