import { PhotoType } from "../../types";

interface PhotoProps {
  photo: PhotoType;
}

const Photo = ({ photo }: PhotoProps) => (
  <div key={photo.id} data-testid={`Photo#Container#${photo.id}`}>
    <a
      data-testid="Photo#OpenUrl"
      href={photo.download_url}
      rel="noopener noreferrer"
      target="_blank"
      title="Click to show full resolution"
    >
      <img
        data-testid="Photo#Img"
        alt={`${photo.author} ${photo.id}`}
        height={photo.height / 10}
        src={photo.download_url}
        width={photo.width / 10}
      />
    </a>
    <div data-testid="Photo#Author">{photo.author}</div>
  </div>
);

export default Photo;
