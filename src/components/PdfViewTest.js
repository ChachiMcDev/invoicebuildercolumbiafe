import React from "react";
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

const PdfViewTest = () => {
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
                  <Text>Viewing Invoie:12345689</Text>
                </View>
                <View style={styles.section}>
                  <Text>Section #2</Text>
                </View>
              </View>
            </Page>
          </Document>
        </PDFViewer>
      </div>
    </div>
  );
};

export default PdfViewTest;

//TEST WHEN CREATING MULTIPLE PAGES //////
// const [numPages, setNumPages] = useState(null);
// .
// .
// .
// <Document
//     file={data}
//     onLoadSuccess={({ numPages }) => setNumPages(numPages)}
// >
//     {Array.apply(null, Array(numPages))
//         .map((x, i) => i + 1)
//         .map(page => <Page pageNumber={page} />)}
// </Document>

{
  /* <Document title="Invoice# goes here">
    <Page size="A4" style={styles.page}>
        <View style={styles.section}>
            <Text>Viewing Invoie:12345689</Text>
        </View>
        <View style={styles.section}>
            <Text>Section #2</Text>
        </View>
    </Page>
</Document> */
}
