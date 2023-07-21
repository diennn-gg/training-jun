import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="page-found">
      <div className="container">
        <div className="page-found__bg">
          <h1 className="text-center page-found__bg-title">404 Page Not Found</h1>
        </div>
        <button className="page-found__bg-link btn-link btn-link--yellow" onClick={()=>navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}

export default NotFound;
