import GalleryStyles from "./styles";
import List from "./components/list";
import Search from "./components/search";

const Gallery = () => (
  <GalleryStyles.Container>
    <Search />
    <List />
  </GalleryStyles.Container>
);

export default Gallery;
