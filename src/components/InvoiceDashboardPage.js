import React from "react";
import InvoiceList from "./InvoiceList";
import { useSelector } from 'react-redux';
import InvoiceListFilters from "./InvoiceListFilters";


const InvoiceDashboardPage = () => {
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
