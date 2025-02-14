import moment from "moment";

const getVisibleInvoices = (invoices, { text, sortBy, startDate, endDate }) => {
  return invoices
    .filter((invoice) => {
      const createdAtMoment = moment(invoice.createdAt);
      const newStart = moment(startDate);
      const newEnd = moment(endDate);
      const startDateMatch = newStart
        ? newStart.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = newEnd
        ? newEnd.isSameOrAfter(createdAtMoment, "day")
        : true;
      const textMatch = invoice.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        return a.products.reduce(
          (accumulator, obj) => accumulator + obj.itemPrice * obj.quantity,
          0
        ) <
          b.products.reduce(
            (accumulator, obj) => accumulator + obj.itemPrice * obj.quantity,
            0
          )
          ? 1
          : -1;
      }
    });
};

export default getVisibleInvoices;
