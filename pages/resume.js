import Head from "next/head";
import dynamic from "next/dynamic";
import { Button } from "antd";
import styles from "../styles/resume.module.css";

const ClientPDFViewer = dynamic(() => import("./components/pdf_viewer"), {
  ssr: false,
});

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <h1>Resume</h1>
      <div className={styles.resume_container}>
        <ClientPDFViewer url="/Monark_Basak_Resume.pdf" height={1080} />
        <Button
          type="primary"
          href="/Monark_Basak_Resume.pdf"
          target="_blank"
          shape="round"
        >
          View/Download as PDF
        </Button>
      </div>
    </>
  );
}
