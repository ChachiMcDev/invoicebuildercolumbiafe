import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from 'numeral';



const InvoiceListItem = ({ _id, invoiceNumber, companyName, products, description, createdAt, amount }) => {
    const invoiceTotal = products.reduce((accumulator, obj) => accumulator + obj.itemPrice, 0);
    console.log(invoiceTotal);
    return (
        <div>
            <Link to={`/view/${_id}`}>
                <h3>Invoice Name: {invoiceNumber}</h3>
            </Link>
            <p>Company Name: {companyName}</p>
            <p>Invoice Total: {invoiceTotal}</p>
            <p>TO BE CHANGED</p>
            <p>{description}</p>
            <p>{createdAt}</p>
            <p>{amount}</p>

        </div>
    )
};


export default InvoiceListItem;
