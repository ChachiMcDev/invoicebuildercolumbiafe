import React from "react";
import { useSelector } from "react-redux";
import InvoiceListItem from "./InvoiceListItem";
import { useGetInvoicesQuery } from "../api/getInvoices";
import getVisibleInvoices from "../selectors/invoices";

const InvoiceList = () => {
  const filts = useSelector((state) => state.filters);
  const { data, error, isLoading } = useGetInvoicesQuery(`/api/test`);

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className="content-container">
          <div className="list-body">
            {getVisibleInvoices(data, filts).map((invoice, iny) => (
              <div key={iny}>
                <InvoiceListItem {...invoice} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InvoiceList;
