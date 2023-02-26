import Error from "next/error";

const Custom404 = () => <Error statusCode={404} title="Custom 404 page" />;

export default Custom404;
