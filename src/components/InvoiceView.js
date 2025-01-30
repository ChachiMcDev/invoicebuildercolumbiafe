import React from "react";
import { useParams } from 'react-router-dom';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';



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


const MyDocument = () => {
    const { id } = useParams();
    console.log("id: ", id);
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
    console.log("id: ", id);

    return (

        <PDFViewer>
            <MyDocument />
        </PDFViewer>

    );

};

export default InvoiceView;