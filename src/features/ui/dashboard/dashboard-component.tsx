import React, {FC, memo} from 'react'
import {IDashboardProps} from "./dashboard-types";
import {useAppDispatch} from "../../../shared/hooks/hooks";
import {
    deleteDashboardTC,
    updateDashboardTC
} from "../../model/dashboard/dashboard-thunk";
import {EditableSpan} from "../../../shared";
import {formatRelative, subDays} from "date-fns";
import {TaskList} from "../../index";
import {IconButton, Title, Space, Panel} from '@shturval/takelage-ui';
import { enGB } from 'date-fns/locale'
import {Divider} from "antd";

export const DashboardComponent: FC<IDashboardProps> = memo(({
                                                                 id,
                                                                 title,
                                                                 addedDate
                                                             }) => {

    const dispatch = useAppDispatch()
    // const date = format(new Date(addedDate), 'dd.MM.yy')
    const date = formatRelative(subDays(new Date(addedDate), 0), new Date(), {
        locale: enGB
    })

    const handleDeleteDashboard = () => {
        dispatch(deleteDashboardTC(id))
    }

    const onUpdateDashboard = (value: string) => {
        dispatch(updateDashboardTC(value, id))
    }

    return (
        <Panel>
            <Title>
                <Space align={'center'} size={'small'}>
                    <IconButton onClick={handleDeleteDashboard} title={'Delete'} iconName={'delete'} variant={'link'} />
                    <EditableSpan onUpdateValue={onUpdateDashboard}>{title}</EditableSpan>
                </Space>
            </Title>
            <TaskList id={id} />
            <Divider />
            <div>
                {date}
            </div>
            <div>
            </div>
        </Panel>
    )
})