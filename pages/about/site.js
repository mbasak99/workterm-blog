import Head from "next/head";

export default function AboutSite() {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>About This Site</title>
      </Head>
      <h1>About This Site</h1>
      <div>
        <h2>Technologies Used</h2>
        <ul>
          <li>React</li>
          <li>Next.js (React framework with server-side rendering)</li>
          <li>Ant Design (UI)</li>
          <li>Vercel (Hosting)</li>
          <li>Framer Motion (Animations)</li>
        </ul>
      </div>
      <div>
        <h2>Why Was This Site Made?</h2>
        <p>
          This site was made to help reflect on the work experience we gain
          throughout our co-op program. It also functions as a way to track our
          progress when looking back. Another reason why I wanted to create this
          site as opposed to using WordPress or some other site builder is
          because I wanted to experiment with some technologies I had heard
          about, specifically Next.js and Framer Motion.
        </p>
      </div>
    </>
  );
}
