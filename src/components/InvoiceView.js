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
import logo from "../images/columbia_logo_blue.png";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#fff",
    color: "#262626",
    fontFamily: "Helvetica",
    fontSize: "12px",
    padding: "30px 50px",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
  },
  textBold: {
    fontFamily: "Helvetica-Bold",
  },
  spaceY: {
    display: "flex",
    flexDirection: "column",
    gap: "2px",
    marginLeft: 90,
  },
  subheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "flex-end"
  },
  bottomborder: {
    borderBottom: "3px solid #526274",
    padding: 10
  },
  linitems: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "flex-end"
  }

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
    const { invoiceNumber, companyName, products, address, city, state, zip, description, createdAt } = data;

    return (
      <div>
        <div className="w-full h-[750px]">
          <PDFViewer style={{ width: "100vw", height: "100vh" }}>
            <Document title={`Invoice: ${invoiceNumber}`}>
              <Page size="A4" style={styles.page}>

                <View style={styles.header}>
                  <View>
                    <Image src={logo} style={{ width: 400, height: 100, marginLeft: -40 }} />
                  </View>
                  <View style={styles.spaceY}>
                    <Text style={[styles.textBold, { color: "#526274" }]}>Columbia Distributing</Text>
                    <Text style={{ fontSize: 10, color: "#526274" }}>20301 59th Pl S</Text>
                    <Text style={{ fontSize: 10, color: "#526274" }}>Kent, WA 98032</Text>
                  </View>
                </View>
                <View style={[styles.subheader, styles.bottomborder]}>
                  <View>
                    <Text>Invoice No: {invoiceNumber}</Text>
                  </View>
                  <View style={styles.spaceY}>
                    <Text>To:</Text>
                    <Text style={[styles.textBold]}>{companyName}</Text>
                    <Text>{address}.</Text>
                    <Text>{city}, {state} {zip}</Text>
                  </View>
                </View>
                <View style={[styles.linitems, styles.bottomborder, { padding: "0px 0px 20px 0px" }]}>
                  <Text style={{ width: "15%", flexShrink: 0 }}>QTY</Text>
                  <Text style={{ width: "55%", flexShrink: 0 }}>PRODUCT</Text>
                  <Text style={{ width: "15%", flexShrink: 0 }}>PRICE</Text>
                  <Text style={{ width: "15%", flexShrink: 0 }}>TOTAL</Text>
                </View>

                {products.map((item, index) => {
                  return (
                    <View key={index} style={[styles.linitems]}>
                      <Text style={{ width: "15%", flexShrink: 0 }}>{item.quantity}</Text>
                      <Text style={{ width: "55%", flexShrink: 0 }}>{item.itemName}</Text>
                      <Text style={{ width: "15%", flexShrink: 0 }}>{item.itemPrice}</Text>
                      <Text style={{ width: "15%", flexShrink: 0 }}>{item.itemPrice * item.quantity}</Text>
                    </View>
                  );
                })}
                <View style={[styles.linitems, { borderTop: "3px solid #526274", paddingTop: 10, marginBottom: 5 }]}>
                  <Text style={{ width: "15%", flexShrink: 0 }}></Text>
                  <Text style={{ width: "55%", flexShrink: 0 }}></Text>
                  <Text style={{ width: "15%", flexShrink: 0 }}>SubTotal:</Text>
                  <Text style={{ width: "15%", flexShrink: 0 }}>$2,000/fix</Text>
                </View>
                <View style={[styles.linitems, {}]}>
                  <Text style={{ width: "15%", flexShrink: 0 }}></Text>
                  <Text style={{ width: "55%", flexShrink: 0 }}></Text>
                  <Text style={{ width: "15%", flexShrink: 0 }}>Tax + 10%</Text>
                  <Text style={{ width: "15%", flexShrink: 0 }}>$200/fixme</Text>
                </View>
                <View style={[styles.linitems, { marginTop: 20 }]}>
                  <Text style={{ width: "60%", flexShrink: 0 }}></Text>
                  <Text style={[styles.textBold, { width: "40%", flexShrink: 0, backgroundColor: "#526274", color: "#fff", padding: 20, textAlign: "right" }]}>Grand Total:   $8865/fix</Text>
                </View>
                <Text style={{ flexDirection: "row", width: "100%", textAlign: "center" }} render={({ pageNumber, totalPages }) => `Page ${pageNumber} of ${totalPages}`} fixed ></Text>
              </Page>
            </Document>
          </PDFViewer>
        </div>
      </div >
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
