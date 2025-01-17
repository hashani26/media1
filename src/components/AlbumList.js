import React from "react";
import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  function handleAddAlbum() {
    addAlbum(user);
  }

  let content;
  if (isLoading) {
    content = <>loading albums...</>;
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
      <div>Albums for {user.name}</div>
      <Button onClick={handleAddAlbum}>Add Album</Button>
      {content}
    </div>
  );
}

export default AlbumList;
