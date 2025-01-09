import React, { useEffect } from "react";
import { fetchUsers } from "../store";
import { useDispatch } from "react-redux";

function UsersList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <div>UsersList UsersList</div>;
}

export default UsersList;
