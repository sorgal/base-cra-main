import React, {FC, useEffect} from "react";
import {sortByOrder} from "../../../shared/lib/sort-by-order";
import {
    createTasksForDashboardTC,
    getTasksForDashboardTC
} from "../../model/dashboard/dashboard-thunk";
import {useAppDispatch, useAppSelector} from "../../../shared/hooks/hooks";
import {getTaskList} from "../../model/dashboard/dashboard-selectors";
import {ITaskListProps} from "./task-list-types";
import {Task} from "../../index";
import {CreateButton} from "../../../shared";

export const TaskListComponent: FC<ITaskListProps> = ({ id }) => {
    const dispatch = useAppDispatch()

    const allTasksList = useAppSelector(getTaskList)
    const taskList = allTasksList[id] ?? []
    const taskListUi = [...taskList]
        .sort(sortByOrder)
        .map((task) => <Task id={task.id}
                             title={task.title}
                             dashboardId={id}
                             key={task.id}
                             status={task.status}
        />)

    useEffect(() => {
        dispatch(getTasksForDashboardTC(id))
    }, [])

    const onTaskCreate = (title: string) => {
        dispatch(createTasksForDashboardTC(id, title))
    }

    return (
        <div>
            <CreateButton entityName={'Task'} onCreateValue={onTaskCreate} />
            {taskListUi}
        </div>
    )
}