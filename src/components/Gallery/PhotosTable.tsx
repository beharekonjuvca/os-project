import { Photo } from "@api/Photos/photos";
import { SinglePhoto } from "./SinglePhoto";

interface Props {
  data: Photo[] | undefined;
}
export const PhotosTable = (props: Props) => {
  const PhotoSection = props.data?.map((photo: Photo) => {
    return (
      <SinglePhoto
        key={photo.id}
        thumbnail={photo.thumbnail}
        title={photo.title}
      />
    );
  });
  return (
    <div className="flex flex-col items-start overflow-y-auto scrollbar scrollbar-thumb-[#c2c2c2] scrollbar-track-white scrollbar-w-[10px]  scrollbar-track-rounded-md scrollbar-thumb-rounded-md">
      <h1 className="text-3xl font-bold ml-7 mb-4">Gallery</h1>
      {props.data?.map((photo) => (
        <SinglePhoto key={photo.id} {...photo} />
      ))}
    </div>
  );
};
