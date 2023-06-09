import React, {ChangeEvent, FC, useState} from 'react'
import {ICreateButtonProps} from "./create-button-types";
import {TextField, Space, Button} from '@shturval/takelage-ui';

export const CreateButtonComponent: FC<ICreateButtonProps> = ({onCreateValue, placeholder}) => {
    const [title, setTitle] = useState('')

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const handleCreate = () => {
        onCreateValue(title)
        setTitle('')
    }

    return (
        <Space size={'small'}>
            <TextField type="text" value={title} onChange={handleTitleChange} componentSize={'small'} placeholder={placeholder}/>
            <Button onClick={handleCreate} title={`Add`} size={'large'} iconName={'plus'} varian={'outline'} />
        </Space>
    )
}