import React, { useEffect } from "react";
import { fetchUsers, addUsers } from "../store";
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Skeleton from "./Skeleton"

function UsersList() {
  const dispatch = useDispatch();

  const { data, isLoading, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleClick = (e) => {
    dispatch(addUsers());
  };

  if (isLoading) return <Skeleton times={4} className={"h-10 w-full"}/>;
  if (error) return <>{error.message}</>;

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="flex justify-end m-2">
        <Button className="rounded-md border-2 p-2" onClick={handleClick}>
          Add User
        </Button>
      </div>
      {renderedUsers}
    </div>
  );
}

export default UsersList;
