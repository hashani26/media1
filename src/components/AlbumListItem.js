import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  function handleDeleteAlbum() {
    removeAlbum(album);
    console.log("clicked delete");
  }

  const header = (
    <>
      <Button onClick={handleDeleteAlbum} className="mr-2">
        <GoTrash />
      </Button>
      {album.name}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos...
    </ExpandablePanel>
  );
}

export default AlbumListItem;
