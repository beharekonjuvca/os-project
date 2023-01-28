import { getAllPhotos } from "@api/Photos/photos.client";
import { useQuery } from "react-query";
import { PhotosTable } from "./PhotosTable";

export const Gallery = () => {
  const { data, isLoading, error } = useQuery("photos", getAllPhotos);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>"The request to retrive photos failed"</div>}
      {data && <PhotosTable data={data.data?.photos} />}
    </>
  );
};
