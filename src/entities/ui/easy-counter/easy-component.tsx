import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {addCount, subCount, multipleEasyCount} from '../../../shared/ui/counter-slice'

export const EasyComponent = (() => {
    const dispatch = useDispatch()
    const count = useSelector((state: RootState) => state.counter.easy_count )

    const handleAddCounter = () => {
        dispatch(addCount())
    }

    const handleSubCounter = () => {
        dispatch(subCount())
    }

    const handleSetToZero = () => {
        dispatch(multipleEasyCount(0))
    }

    return (
        <div>
            <h3>Counter</h3>
            <div>Easy Count: {count}</div>
            <button onClick={handleAddCounter}>Add</button>
            <button onClick={handleSubCounter}>Sub</button>
            <button onClick={handleSetToZero}>Set to 0</button>
        </div>
    )
})