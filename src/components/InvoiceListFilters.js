import React from "react";
import { useSelector, useDispatch } from "react-redux";
import filtersSlice from "../slicereducers/filterSlice";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import dayjs from "dayjs";

const ExpenseListFilters = () => {
    const { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } =
        filtersSlice.actions;
    const filters = useSelector((state) => state.filters);

    const dispatch = useDispatch();

    const selectionRange = {
        startDate: dayjs(filters.startDate),
        endDate: dayjs(filters.endDate),
        key: "selection",
    };

    const onDateChange = (ranges) => {
        dispatch(setStartDate(dayjs(ranges.selection.startDate).valueOf()));
        dispatch(setEndDate(dayjs(ranges.selection.endDate).valueOf()));
    };

    return (
        <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input
                        name="search"
                        placeholder="Search Invoices"
                        type="text"
                        className="text-input"
                        value={filters.text}
                        onChange={(e) => {
                            dispatch(setTextFilter(e.target.value));
                        }}
                    />
                </div>
                <div className="input-group__item">
                    <select
                        name="sort"
                        className="select"
                        value={filters.sortBy}
                        onChange={(e) => {
                            if (e.target.value === "date") {
                                dispatch(sortByDate());
                            } else if (e.target.value === "amount") {
                                dispatch(sortByAmount());
                            }
                        }}
                    >
                        <option name="dateselect" value="date">
                            Date
                        </option>
                        <option name="amountselect" value="amount">
                            Amount
                        </option>
                    </select>
                </div>
                <div name="datpicker" className="input-group__item">
                    <DateRangePicker ranges={[selectionRange]} onChange={onDateChange} />
                </div>
            </div>
        </div>
    );
};

export default ExpenseListFilters;
