import React from 'react';
import InvoiceListItem from './InvoiceListItem';
import { useGetInvoicesQuery } from '../api/getInvoices';



const InvoiceList = () => {
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
                    {data.map((invoice, iny) => (
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