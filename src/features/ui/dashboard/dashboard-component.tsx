import React, {ChangeEvent, FC, useEffect, useState} from 'react'
import {IDashboardProps} from "./dashboard-types";
import {useAppDispatch, useAppSelector} from "../../../shared/hooks/hooks";
import {
    createTasksForDashboardTC,
    deleteDashboardTC, deleteTasksForDashboardTC, getDashboardListTC,
    getTasksForDashboardTC,
    updateDashboardTC
} from "../../model/dashboard/dashboard-thunk";
import {CreateButton, EditableSpan} from "../../../shared";
import {format} from "date-fns";
import {getTaskList} from "../../model/dashboard/dashboard-selectors";

export const DashboardComponent: FC<IDashboardProps> = ({
                                                            id,
                                                            title,
                                                            addedDate
                                                        }) => {

    const dispatch = useAppDispatch()
    const allTasksList = useAppSelector(getTaskList)
    const taskList = allTasksList[id] ?? []
    const [taskTitle, setTaskTitle] = useState('')

    const taskListUi = taskList.map((task) => {
        const handleDeleteTask = () => {
            dispatch(deleteTasksForDashboardTC(id, task.id))
        }

        return (
            <div>
                <span>{task.title}</span>
                <input type="checkbox" checked={task.completed}/>
                <button onClick={handleDeleteTask}>Delete Task</button>
            </div>
        )
    })

    const date = format(new Date(addedDate), 'dd.MM.yy')

    const handleDeleteDashboard = () => {
        dispatch(deleteDashboardTC(id))
    }

    const onUpdateDashboard = (value: string) => {
        dispatch(updateDashboardTC(value, id))
    }

    const handleTaskTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(event.currentTarget.value)
    }

    const handleTaskCreate = () => {
        dispatch(createTasksForDashboardTC(id, taskTitle))
        setTaskTitle('')
    }

    useEffect(() => {
        dispatch(getTasksForDashboardTC(id))
    }, [])

    return (
        <div>
            <h4>
                <EditableSpan onUpdateValue={onUpdateDashboard}>{title}</EditableSpan>
            </h4>
            <div>
                <input type="text" value={taskTitle} onChange={handleTaskTitleChange}/>
                <CreateButton onCreateValue={handleTaskCreate} />
                {taskListUi}
            </div>
            <div>
                {date}
            </div>
            <div>
                <button onClick={handleDeleteDashboard}>Delete</button>
            </div>
        </div>
    )
}