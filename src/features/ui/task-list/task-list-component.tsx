import React, {FC, useEffect, memo, useCallback} from "react";
import {
    createTasksForDashboardTC,
    getTasksForDashboardTC
} from "../../model/dashboard/dashboard-thunk";
import {useAppDispatch, useAppSelector} from "../../../shared/hooks/hooks";
import {getTaskListExt} from "../../model/dashboard/dashboard-selectors";
import {ITaskListProps} from "./task-list-types";
import {Task} from "../../index";
import {CreateButton} from "../../../shared";
import {Space} from '@shturval/takelage-ui';

export const TaskListComponent: FC<ITaskListProps> = memo(({ id }) => {
    const dispatch = useAppDispatch()

    const taskList = useAppSelector((state) => getTaskListExt(state, id))

    const taskListUi = taskList.map((task) => <Space size={'small'} direction={'vertical'} key={task.id}><Task id={task.id}
                             title={task.title}
                             dashboardId={id}
                             status={task.status}
        /></Space>)

    useEffect(() => {
        dispatch(getTasksForDashboardTC(id))
    }, [])

    const onTaskCreate = useCallback((title: string) => {
        dispatch(createTasksForDashboardTC(id, title))
    }, [dispatch, id])

    return (
        <Space size={'middle'} direction={'vertical'}>
            <CreateButton  onCreateValue={onTaskCreate} placeholder={'task title'}  />
            {taskListUi}
        </Space>
    )
})