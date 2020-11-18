import React from "react"
import ContentLoader from "react-content-loader"

const ButtonLoader = () => (
  <ContentLoader 
    speed={2}
    width={200}
    height={50}
    viewBox="0 0 200 50"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
  >
    <rect x="30" y="11" rx="8" ry="8" width="153" height="36" />
  </ContentLoader>
)

export default ButtonLoader