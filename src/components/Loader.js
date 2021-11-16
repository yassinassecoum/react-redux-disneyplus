import React from "react";
import ContentLoader from "react-content-loader";

export const Loader = (props) => {
  return (
    <ContentLoader
      speed={0.8}
      width="100%"
      height="100%"
      style={{ transform: "translate(-0px, -64px)", marginTop: "4rem" }}
      viewBox="0 0 958 520"
      backgroundColor="#b7b3b3"
      foregroundColor="#090b13"
      title="Fetching Data"
    >
      <rect x="0" y="29" rx="3" ry="3" width="958" height="49" />
      <rect x="0" y="93" rx="3" ry="3" width="150" height="130" />
      <rect x="160" y="93" rx="3" ry="3" width="638" height="130" />
      <rect x="810" y="93" rx="3" ry="3" width="150" height="130" />
      <rect x="0" y="250" rx="3" ry="3" width="170" height="120" />
      <rect x="200" y="250" rx="3" ry="3" width="170" height="120" />
      <rect x="400" y="250" rx="3" ry="3" width="170" height="120" />
      <rect x="600" y="250" rx="3" ry="3" width="170" height="120" />
      <rect x="800" y="250" rx="3" ry="3" width="170" height="120" />
      <rect x="0" y="400" rx="3" ry="3" width="170" height="120" />
      <rect x="200" y="400" rx="3" ry="3" width="170" height="120" />
      <rect x="400" y="400" rx="3" ry="3" width="170" height="120" />
      <rect x="600" y="400" rx="3" ry="3" width="170" height="120" />
      <rect x="800" y="400" rx="3" ry="3" width="170" height="120" />
    </ContentLoader>
  );
};
