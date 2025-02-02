import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from 'numeral';



const InvoiceListItem = ({ _id, invoiceNumber, companyName, products, description, createdAt }) => {
    const invoiceTotal = products.reduce((accumulator, obj) => accumulator + obj.itemPrice, 0);
    const totalProducts = products.length;
    return (
        <div>
            <Link to={`/view/${_id}`}>
                <h3>Invoice Name: {invoiceNumber}</h3>
            </Link>
            <p>Company Name: {companyName}</p>
            <p>Invoice Total: {invoiceTotal}</p>
            <p>Invoice Description: {description}</p>
            <p>Order Date: {createdAt}</p>
            <p>Total Products ordered: {totalProducts}</p>

        </div>
    )
};


export default InvoiceListItem;
