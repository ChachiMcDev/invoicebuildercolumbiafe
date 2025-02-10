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
    )
};

export default InvoiceList;