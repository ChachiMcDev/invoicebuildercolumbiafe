import React from 'react';
import { useSelector } from "react-redux";
import InvoiceListItem from './InvoiceListItem';
import { useGetInvoicesQuery } from '../api/getInvoices';
import getVisibleInvoices from '../selectors/invoices';


const InvoiceList = () => {
    const filts = useSelector((state) => state.filters);
    const { data, error, isLoading } = useGetInvoicesQuery(`/api/test`);

    console.log("data: ", data);
    console.log("error: ", error);

    return (
        <>
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>

                    <h1>Invoice List</h1>
                    {getVisibleInvoices(data, filts).map((invoice, iny) => (
                        <div key={iny}>
                            <InvoiceListItem {...invoice} />
                        </div>
                    ))}

                </>
            ) : null}
        </>
    )
};

export default InvoiceList;