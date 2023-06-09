import {IDashboard, ITask} from "../../entities/types/types";

type TItem = ITask | IDashboard

export const sortByOrder = (a: TItem, b: TItem) => b.order - a.order