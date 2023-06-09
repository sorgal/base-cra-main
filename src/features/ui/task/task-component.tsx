import React, {FC, memo, useState} from "react";
import {deleteTasksForDashboardTC, updateTasksForDashboardTC} from "../../model/dashboard/dashboard-thunk";
import {useAppDispatch} from "../../../shared/hooks/hooks";
import {ITaskProps} from "./task-types";
import {EditableSpan} from "../../../shared";
import {IconButton, Space, Checkbox} from '@shturval/takelage-ui';
// import {Checkbox} from 'antd'
// import {CheckboxChangeEvent} from "antd/es/checkbox";

export const TaskComponent: FC<ITaskProps> = memo(({
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

    const handleCompletedChange = (value: boolean) => {
        setTaskStatus(value)
        onUpdateTask(title)
    }

    return (
        <Space size={'small'}>
            <Checkbox value={taskStatus} onChange={handleCompletedChange} name={id}/>
            <EditableSpan onUpdateValue={onUpdateTask}>{title}</EditableSpan>
            {/*<input type="checkbox" checked={taskStatus} onChange={handleCompletedChange}/>*/}
            <IconButton onClick={handleDeleteTask} iconName={'delete'} variant={'link'} title={'Delete Task'} />
        </Space>
    )
})