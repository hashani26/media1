import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import useThunk from "../hooks/use-thunk";
import { removeUser } from "../store";
import ExpandablePanel from "./ExpandablePanel";
import { useSelector } from "react-redux";
import { useState } from "react";

function UsersListItem(user) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  function handleDelete() {
    doRemoveUser(user);
  }

  const header = (
    <>
      <Button className={"mr-3"} loading={isLoading} onClick={handleDelete}>
        <GoTrashcan />
      </Button>
      {error && "error removing user"}
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>content</ExpandablePanel>;
}

export default UsersListItem;
