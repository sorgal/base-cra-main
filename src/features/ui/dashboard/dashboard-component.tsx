import React, {FC} from 'react'
import {IDashboardProps} from "./dashboard-types";
import {useAppDispatch} from "../../../shared/hooks/hooks";
import {
    deleteDashboardTC,
    updateDashboardTC
} from "../../model/dashboard/dashboard-thunk";
import {EditableSpan} from "../../../shared";
import {format} from "date-fns";
import {TaskList} from "../../index";

export const DashboardComponent: FC<IDashboardProps> = ({
                                                            id,
                                                            title,
                                                            addedDate
                                                        }) => {

    const dispatch = useAppDispatch()
    const date = format(new Date(addedDate), 'dd.MM.yy')

    const handleDeleteDashboard = () => {
        dispatch(deleteDashboardTC(id))
    }

    const onUpdateDashboard = (value: string) => {
        dispatch(updateDashboardTC(value, id))
    }

    return (
        <div>
            <h4>
                <EditableSpan onUpdateValue={onUpdateDashboard}>{title}</EditableSpan>
            </h4>
            <TaskList id={id} />
            <div>
                {date}
            </div>
            <div>
                <button onClick={handleDeleteDashboard}>Delete</button>
            </div>
        </div>
    )
}