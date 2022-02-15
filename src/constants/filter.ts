import { ITEM_STATUS_ACTIVE, ITEM__STATUS_COMPLETED } from "./item";
import { FilterType } from "../typings/Filter";

export const FILTER_ALL = "All";
export const FILTER_ACTIVE = ITEM_STATUS_ACTIVE;
export const FILTER_COMPLETED = ITEM__STATUS_COMPLETED;

export const FITLER_LIST: FilterType[] = [
  FILTER_ALL,
  FILTER_ACTIVE,
  FILTER_COMPLETED,
];
