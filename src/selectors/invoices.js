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

      //loop through the products array and check if the item name includes the text
      //we only want one true value so we use the second includes method for single true value
      const itemTextMatch = invoice.products.map((product) => product.itemName.toLowerCase().includes(text.toLowerCase())).includes(true);

      const textMatch = invoice.description
        .toLowerCase()
        .includes(text.toLowerCase()) || itemTextMatch;

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === "amount") {
        //add up the total amount of the products in the products array and compare to each other
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
