import React from "react";
import InvoiceList from "./InvoiceList";
import InvoiceListFilters from "./InvoiceListFilters";


const InvoiceDashboardPage = () => {
  return (
    <div>
      <InvoiceListFilters />
      <InvoiceList />
    </div>
  );
};

export default InvoiceDashboardPage;
