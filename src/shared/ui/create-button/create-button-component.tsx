import React, {ChangeEvent, FC, useState} from 'react'
import {ICreateButtonProps} from "./create-button-types";

export const CreateButtonComponent: FC<ICreateButtonProps> = ({entityName, onCreateValue}) => {
    const [title, setTitle] = useState('')

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const handleCreate = () => {
        onCreateValue(title)
        setTitle('')
    }

    return (
        <>
            <input type="text" value={title} onChange={handleTitleChange}/>
            <button onClick={handleCreate}>Add {entityName}</button>
        </>
    )
}