import React from "react";
import { useParams } from 'react-router-dom';


const InvoiceView = () => {
    const { id } = useParams();

    return (
        <div>
            <p>PAGE TO VIEW SINGLE INVOICE/DOWNLOAD SINGLE INVOICE</p>
            viewing invoice number: {id} {console.log("id params: ", id)}
        </div>
    );

};

export default InvoiceView;