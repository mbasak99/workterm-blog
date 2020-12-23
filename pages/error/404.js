import Error from "next/error";

export default function ErrorPage({ statusCode }) {
  return (
    <div className="error">
      <Error statusCode={statusCode} />
    </div>
  );
}
