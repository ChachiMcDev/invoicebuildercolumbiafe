import React from "react";
import { useParams } from "react-router-dom";
import { useGetInvoiceByIdQuery } from "../api/getInvoices";

import {
  Page,
  Image,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import logo from "../images/columbia_logo_white.png";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const InvoiceView = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetInvoiceByIdQuery(id);
  // console.log("invoice data: ", data);
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error: {error.message}</div>;
  } else if (data) {
    const { invoiceNumber, companyName, products, description, createdAt } =
      data;

    return (
      <div>
        <div className="w-full h-[750px]">
          <PDFViewer style={{ width: "100vw", height: "100vh" }}>
            <Document title="Invoice# goes here">
              <Page size="A4" style={styles.page}>
                <View locale="en-US">
                  <Image
                    src={logo}
                    style={{ marginLeft: "50px", width: "500", height: "100" }}
                  />
                  <View style={styles.section}>
                    <Text>Viewing Invoice:{invoiceNumber}</Text>
                  </View>
                  Section #2{" "}
                  {products.map((item, index) => {
                    return (
                      <View key={index} style={styles.section}>
                        <Text>Product Name: {item.itemName}</Text>
                        <Text>Product Price: {item.itemPrice}</Text>
                        <Text>Product Quantity: {item.quantity}</Text>
                      </View>
                    );
                  })}
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </div>
      </div>
    );
  }
};

export default InvoiceView;

// const InvoiceView = () => {
//     const { id } = useParams();
//     const { data, error, isLoading } = useGetInvoiceByIdQuery(id);
//     // console.log("invoice data: ", data);
//     if (isLoading) {
//         return <div>Loading...</div>
//     } else if (error) {
//         return <div>Error: {error.message}</div>
//     } else if (data) {
//         const { invoiceNumber, companyName, products, description, createdAt } = data;
//         return (

//             <div>
//                 your invice id is: {id}
//                 <div>Invoice Number: {invoiceNumber}</div>
//                 <div>Company Name: {companyName}</div>
//                 {products.map((invProduct, iny) => (
//                     <div key={iny}>
//                         {console.log(invProduct)}
//                     </div>
//                 ))}
//                 <div className="w-full h-[750px]">
//                     <PDFViewer width="100%" height="100%">
//                         <invoicePDF />
//                     </PDFViewer>
//                 </div>
//             </div>

//         );
//     }

// };
