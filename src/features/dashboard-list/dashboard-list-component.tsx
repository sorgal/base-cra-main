import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'

import {createDashboardTC, getDashboardListTC, updateDashboardTC, deleteDashboardTC} from "./dashboard-list-thunk";
import {useAppDispatch, useAppSelector} from '../../shared/hooks/hooks'
import {getDashboardList} from "./dashboard-list-selectors";

export const DashboardListComponent = () => {

    const dispatch = useAppDispatch()
    const [title, setTitle] = useState('')
    const [id, setId] = useState('')

    const dashboardList = useAppSelector(getDashboardList)

    useEffect(() => {
        dispatch(getDashboardListTC())
    }, [])

    const handleCreateDashboard = () => {
        dispatch(createDashboardTC(title))
        setTitle('')
    }

    const handleUpdateDashboard = (id: string) => {
        setId(id)
    }

    const handleSendUpdateDashboard = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(updateDashboardTC(event.currentTarget.value, id))
        setId('')
    }

    const handleDeleteDashboard = (id: string) => {
        dispatch(deleteDashboardTC(id))
        setId('')
    }


    const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value
        setTitle(value)
    }

    const dashboardListUI = dashboardList.map((dashboard) => {
        return(
            <div key={dashboard.id}>
                { id === dashboard.id
                    ? <input type="text" defaultValue={dashboard.title} onBlur={handleSendUpdateDashboard}/>
                    : <h4 onClick={() => handleUpdateDashboard(dashboard.id)}>{dashboard.title}</h4>
                }
                <div>
                    {dashboard.addedDate}
                </div>
                <div>
                    <button onClick={() => handleDeleteDashboard(dashboard.id)}>Delete</button>
                </div>
            </div>
        )
    })

    return(
        <div>
            <h2>Dashboard</h2>
            <div>
                <input type="text" value={title} onChange={handleChangeTitle}/>
                <button onClick={handleCreateDashboard}>Add</button>
            </div>
            <div>
                {dashboardListUI}
            </div>
        </div>
    )
}