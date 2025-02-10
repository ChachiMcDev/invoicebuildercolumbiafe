import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from 'numeral';



const InvoiceListItem = ({ _id, invoiceNumber, companyName, products, description, createdAt }) => {
    const invoiceTotal = products.reduce((accumulator, obj) => accumulator + obj.itemPrice, 0);
    const totalProducts = products.length;
    return (
        <div>
            <Link className="list-item" to={`/view/${_id}`}>

                <div>
                    <h3 className="list-item__title">Invoice Number: {invoiceNumber}</h3>
                    <span className="list-item__sub-title">Order Date: April, 20th 2025</span>
                </div>
                <h3 className="list-item__data">Invoice Total: {numeral(invoiceTotal / 100).format('$0,0.00')}</h3>
            </Link>



        </div>
    )
};


export default InvoiceListItem;
