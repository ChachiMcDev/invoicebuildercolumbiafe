import React from "react";
import { useParams } from 'react-router-dom';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import { useGetInvoiceByIdQuery } from "../api/getInvoices";


// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4'
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});


const invoicePDF = () => {
    const { id } = useParams();
    console.log("id: ", id);
    console.log("what in the holly hell")
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Viewing Invoie: {id}</Text>
                </View>
                <View style={styles.section}>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>
    );

};


const InvoiceView = () => {
    const { id } = useParams();
    const { data, error, isLoading } = useGetInvoiceByIdQuery(id);
    // console.log("invoice data: ", data);
    if (isLoading) {
        return <div>Loading...</div>
    } else if (error) {
        return <div>Error: {error.message}</div>
    } else if (data) {
        const { invoiceNumber, companyName, products, description, createdAt } = data;
        return (

            <div>
                your invice id is: {id}
                <div>Invoice Number: {invoiceNumber}</div>
                <div>Company Name: {companyName}</div>
                {products.map((invProduct, iny) => (
                    <div key={iny}>
                        {console.log(invProduct)}
                    </div>
                ))}
                <div className="w-full h-[750px]">
                    <PDFViewer width="100%" height="100%">
                        <invoicePDF />
                    </PDFViewer>
                </div>
            </div>

        );
    }




};

export default InvoiceView;