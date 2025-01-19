import React from "react";
import ExpandablePanel from "./ExpandablePanel";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

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
      <PhotosList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumListItem;
