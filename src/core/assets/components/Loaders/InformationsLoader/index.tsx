import React from "react"
import ContentLoader from "react-content-loader"

const InformationsLoader = () => (
  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
  >
    <rect x="452" y="24" rx="8" ry="8" width="846" height="268" />
  </ContentLoader>
)

export default InformationsLoader;
