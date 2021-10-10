import { PhotoType } from "../../types";

interface PhotoProps {
  photo: PhotoType;
}

const Photo = ({ photo }: PhotoProps) => {
  return (
    <div key={photo.id}>
      <a
        download
        href={photo.download_url}
        rel="noopener noreferrer"
        target="_blank"
        title="Click to show full resolution"
      >
        <img
          alt={`${photo.author} ${photo.id}`}
          src={photo.download_url}
          height={photo.height / 10}
          width={photo.width / 10}
        />
      </a>
      <div>{photo.author}</div>
    </div>
  );
};

export default Photo;
