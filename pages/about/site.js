import Head from "next/head";

export default function AboutSite() {
  return (
    <>
      <Head>
        <title>About This Site</title>
      </Head>
      <h1>About This Site</h1>
      <div>
        <h2>Technologies used</h2>
        <ul>
          <li>React</li>
          <li>NextJS</li>
          <li>Ant Design</li>
          <li>Vercel</li>
          <li></li>
        </ul>
      </div>
      <div>
        <h2>Why was this site made?</h2>
        <p>
          This site was made to help reflect on the work experience we gain(ed)
          over the course of our co-op program. But also as a way to track our
          own progress when looking back.
        </p>
      </div>
    </>
  );
}
