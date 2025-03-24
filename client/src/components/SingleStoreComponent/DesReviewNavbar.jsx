import React from "react";
import { Link } from "react-router-dom";
import Description from "./Description";

const DesReviewNavbar = () => {
  return (
    <div>
      <nav>
        <div>
          <ul className="flex items-center justify-center gap-7 text-4xl font-bold py-8">
            <li>
              <Link to={"/description"}>Description</Link>
            </li>
            <li>
              <Link to={"/description"}>Reviews</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Description />
    </div>
  );
};

export default DesReviewNavbar;
