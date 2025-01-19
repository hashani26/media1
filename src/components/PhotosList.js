import React from "react";
import Button from "./Button";
import { useAddPhotosMutation, useFetchPhotosQuery } from "../store";
import Skeleton from "./Skeleton";

function PhotosList({ album }) {
  const [addPhoto, result] = useAddPhotosMutation();
  const { data, isFetching, error } = useFetchPhotosQuery(album);
  console.log("🚀 ~ PhotosList ~ data:", data);

  function handleClick() {
    console.log("clicked-------------");
    addPhoto(album);
  }

  let content;
  if (isFetching) {
    content = <Skeleton time={5} />;
  } else if (error) {
    content = <>Error loading photos...</>;
  } else {
    content = (
      <div className="flex flex-row flex-wrap">
        {data.map((photo) => {
          return (
            <img
              className="mr-2 mb-2"
              width={300}
              height={"auto"}
              key={photo.id}
              src={photo.url}
            />
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h3 className="text-lg font-bold">Photos for album name</h3>
        <Button
          //   loading={isCreatingUser}
          className="rounded-md border-2 p-2"
          onClick={handleClick}
        >
          Add Photo
        </Button>
      </div>
      {content}
    </div>
  );
}

export default PhotosList;
