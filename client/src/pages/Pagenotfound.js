import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  const navigated = useNavigate()
  return (
    <Layout title={"go back- page not found"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <div className="action-link-wrap">

          <Link onClick={(e) => navigated(-1)} className="pnf-btn link-button">Go Back</Link>
          <Link to="/" className="pnf-btn link-button link-back-button">
            Go To HomePage
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
