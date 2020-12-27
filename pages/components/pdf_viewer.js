import { Document, Page, pdfjs } from "react-pdf";
import { LoadingOutlined } from "@ant-design/icons";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function PDFViewer({ url, width, height }) {
  return (
    <Document file={url} loading={<LoadingOutlined />}>
      <Page pageNumber={1} height={height} />
    </Document>
  );
}
