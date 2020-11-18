import React from "react"
import ContentLoader from "react-content-loader"


{/*lembrar de colocar os props*/}
const ResultPhotoLoader = () => (


  <ContentLoader 
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#dedede"
    foregroundColor="#ecebeb"
  >
    <rect x="30" y="24" rx="8" ry="8" width="278" height="268" />
  </ContentLoader>
)

export default ResultPhotoLoader
