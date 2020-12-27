import Head from "next/head";
import styles from "../styles/resume.module.css";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <h1>Resume</h1>
      <div className={styles.resume_container}>
        <object
          data="/Monark_Basak_Resume.pdf"
          type="application/pdf"
          height={1150}
          width={900}
        >
          <param name="view" value="Fit" />
        </object>
      </div>
    </>
  );
}
