import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store/store";
import {divCount, addAmount, multipleHardCount, subAmount} from '../../../shared/ui/counter-slice'

export const HardComponent = (() => {
    const dispatch = useDispatch()
    const count = useSelector((state: RootState) => state.counter.hard_count )

    const handleAdd10 = () => {
        dispatch(addAmount(10))
    }

    const handleSub10 = () => {
        dispatch(subAmount(10))
    }

    const handleDouble = () => {
        dispatch(multipleHardCount(2))
    }

    const handleHalf = () => {
        dispatch(divCount(2))
    }

    const handleSetToZero = () => {
        dispatch(multipleHardCount(0))
    }

    return (
        <div>
            <h3>Counter</h3>
            <div>Hard Count: {count}</div>
            <button onClick={handleAdd10}>Add 10</button>
            <button onClick={handleSub10}>Sub 10</button>
            <button onClick={handleDouble}>Multiple to 2</button>
            <button onClick={handleHalf}>Duvude to 2</button>
            <button onClick={handleSetToZero}>Set to 0</button>
        </div>
    )
})