import React from "react";
import { useFetchAlbumsQuery } from "../store";
import ExpandablePanel from "./ExpandablePanel";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user.id);
  console.log(
    "🚀 ~ AlbumList ~ data, error, isLoading:",
    data,
    error,
    isLoading
  );

  let content;
  if (isLoading) {
    content = <>loading albums...</>;
  } else if (error) {
    content = <>error loading albums...</>;
  } else {
    content = data.map((album) => {
      return (
        <ExpandablePanel key={album.id} header={<div>Albums for {user.name}</div>}>
          {album.name}
        </ExpandablePanel>
      );
    });
  }
  return <div>{content}</div>;
}

export default AlbumList;
