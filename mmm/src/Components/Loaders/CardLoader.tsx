import ContentLoader from "react-content-loader"

const CardLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={270}
      height={350}
      viewBox="0 0 270 350"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="6" ry="6" width="270" height="250" />
      <rect x="0" y="268" rx="0" ry="0" width="170" height="15" />
      <rect x="0" y="297" rx="0" ry="0" width="40" height="15" />
      <rect x="0" y="325" rx="0" ry="0" width="130" height="15" />
    </ContentLoader>
  )
}

export default CardLoader