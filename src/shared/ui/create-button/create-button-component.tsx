import React, {FC} from 'react'
import {ICreateButtonProps} from "./create-button-types";

export const CreateButtonComponent: FC<ICreateButtonProps> = ({onCreateValue}) => {
    return (
        <>
            <button onClick={onCreateValue}>Add Task</button>
        </>
    )
}