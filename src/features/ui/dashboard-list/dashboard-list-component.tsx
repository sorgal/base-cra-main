import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'

import {createDashboardTC, getDashboardListTC, updateDashboardTC, deleteDashboardTC} from "../../model/dashboard/dashboard-thunk";
import {useAppDispatch, useAppSelector} from '../../../shared/hooks/hooks'
import {getDashboardList} from "../../model/dashboard/dashboard-selectors";
import {Dashboard} from "../../index";
import {CreateButton} from "../../../shared";

export const DashboardListComponent = () => {

    const dispatch = useAppDispatch()
    const [title, setTitle] = useState('')

    const dashboardList = useAppSelector(getDashboardList)

    useEffect(() => {
        dispatch(getDashboardListTC())
    }, [])

    const handleCreateDashboard = () => {
        dispatch(createDashboardTC(title))
        setTitle('')
    }

    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        setTitle(value)
    }

    const dashboardListUI = dashboardList.map((dashboard) =>
        <Dashboard key={dashboard.id} id={dashboard.id} title={dashboard.title} addedDate={dashboard.addedDate}/>
    )

    return(
        <div>
            <h2>Dashboard</h2>
            <div>
                <input type="text" value={title} onChange={handleChangeTitle}/>
                <CreateButton onCreateValue={handleCreateDashboard} />
            </div>
            <div>
                {dashboardListUI}
            </div>
        </div>
    )
}