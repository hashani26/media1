import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import Skeleton from "./Skeleton";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  function handleAddAlbum() {
    addAlbum(user);
  }

  let content;
  if (isLoading) {
    content = <Skeleton times={4} className={"h-10 w-full"} />;
  } else if (error) {
    content = <>error loading albums...</>;
  } else {
    content = data.map((album) => {
      return (
        <ExpandablePanel key={album.id} header={<>{album.name}</>}>
          List of photos...
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          Add Album
        </Button>
      </div>
      {content}
    </div>
  );
}

export default AlbumList;
