import React, { useCallback, useEffect, useState } from "react";
import { fetchUsers, addUsers } from "../store";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Skeleton from "./Skeleton";
import useThunk from "../hooks/use-thunk";

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUsers, isCreatingUser, creatingUsersError] =
    useThunk(addUsers);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    doFetchUsers();
  }, []);

  const handleClick = (e) => {
    doCreateUsers();
  };

  let content;
  if (isLoadingUsers) {
    content = <Skeleton times={4} className={"h-10 w-full"} />;
  } else if (loadingUsersError) {
    content = <>Error occured while fetching users</>;
  } else {
    content = data.map((user) => {
      return (
        <div key={user.id} className="mb-2 border rounded">
          <div className="flex p-2 justify-between items-center cursor-pointer">
            {user.name}
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3 items-center">
        <h1 className="m-2 text-xl">Users</h1>
        <Button
          loading={isCreatingUser}
          className="rounded-md border-2 p-2"
          onClick={handleClick}
        >
          Add User
        </Button>
      </div>
      {content}
    </div>
  );
}

export default UsersList;
