import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const InvoiceListItem = ({
  _id,
  invoiceNumber,
  companyName,
  products,
  description,
  createdAt,
}) => {
  const invoiceTotal = products.reduce(
    (accumulator, obj) => accumulator + obj.itemPrice * obj.quantity,
    0
  );

  return (
    <div>
      <Link className="list-item" to={`/view/${_id}`}>
        <div>
          <h3 className="list-item__title">Invoice Number#: {invoiceNumber}</h3>
          <span className="list-item__sub-title">
            <span className="columbiaBlue">Order Date:</span> {moment(createdAt).format("MMMM Do, YYYY")}
          </span>
          <span className="list-item__description">
            <span>
              <span className="boldtext">Description: </span>
              {description}
            </span>
          </span>
        </div>
        <h3 className="list-item__data">
          Total: {numeral(invoiceTotal / 100).format("$0,0.00")}
        </h3>
      </Link>
    </div>
  );
};

export default InvoiceListItem;
