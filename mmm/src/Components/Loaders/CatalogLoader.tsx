import ContentLoader from "react-content-loader"


const CatalogLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={100}
      height={15}
      viewBox="0 0 100 20"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="3" ry="3" width="100" height="20" />
    </ContentLoader>
  )
}

export default CatalogLoader