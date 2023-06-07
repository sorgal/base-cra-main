import React, {FC, useState} from "react";
import {deleteTasksForDashboardTC, updateTasksForDashboardTC} from "../../model/dashboard/dashboard-thunk";
import {useAppDispatch} from "../../../shared/hooks/hooks";
import {ITaskProps} from "./task-types";
import {EditableSpan} from "../../../shared";

export const TaskComponent: FC<ITaskProps> = ({
                                                id,
                                                title,
                                                dashboardId,
                                                status
                                              }) => {
    const dispatch = useAppDispatch()
    const [taskStatus, setTaskStatus] = useState(!!status)


    const handleDeleteTask = () => {
        dispatch(deleteTasksForDashboardTC(dashboardId, id))
    }

    const onUpdateTask = (value: string) => {
        dispatch(updateTasksForDashboardTC(dashboardId, id, value, !taskStatus))
    }

    const handleCompletedChange = () => {
        setTaskStatus(!taskStatus)
        onUpdateTask(title)
    }

    return (
        <div>
            <EditableSpan onUpdateValue={onUpdateTask}>{title}</EditableSpan>
            <input type="checkbox" checked={taskStatus} onChange={handleCompletedChange}/>
            <button onClick={handleDeleteTask}>Delete Task</button>
        </div>
    )
}