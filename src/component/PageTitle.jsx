import { Helmet } from "react-helmet";

function PageTitle({ title }) {
  return (
    <Helmet>
      <title>{title} - Tech Valley College</title>
    </Helmet>
  );
}

export default PageTitle;