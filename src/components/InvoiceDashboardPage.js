import React from "react";
import InvoiceList from "./InvoiceList";
import { connect, useSelector, useDispatch } from 'react-redux';
import filtersSlice from '../slicereducers/filterSlice';
import InvoiceListFilters from "./InvoiceListFilters";


const InvoiceDashboardPage = () => {
  const { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } = filtersSlice.actions
  const filters = useSelector((state) => state.filters);
  console.log("filters: ", filters);
  return (
    <div>
      <InvoiceListFilters />
      <InvoiceList />
    </div>
  );
};

export default InvoiceDashboardPage;
