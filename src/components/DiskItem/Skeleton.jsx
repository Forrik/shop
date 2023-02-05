import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={350}
    height={700}
    viewBox="0 0 350 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="75" rx="55" ry="55" width="250" height="225" />
    <rect x="0" y="390" rx="0" ry="0" width="250" height="45" />
    <rect x="0" y="320" rx="0" ry="0" width="115" height="40" />
    <rect x="135" y="320" rx="0" ry="0" width="115" height="40" />
    <rect x="0" y="0" rx="0" ry="0" width="250" height="30" />
    <rect x="0" y="475" rx="20" ry="20" width="90" height="40" />
    <rect x="100" y="475" rx="20" ry="20" width="150" height="40" />
  </ContentLoader>
);

export default Skeleton;
