import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div class="page-found">
      <div class="container">
        <div class="page-found__bg">
          <h1 class="text-center page-found__bg-title">404 Page Not Found</h1>
        </div>
        <button className="page-found__bg-link btn-link btn-link--yellow" onClick={()=>navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}

export default NotFound;
