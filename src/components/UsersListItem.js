import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import useThunk from "../hooks/use-thunk";
import { removeUser } from "../store";

function UsersListItem(user) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  function handleDelete() {
    doRemoveUser(user);
  }

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button className={"mr-3"} loading={isLoading} onClick={handleDelete}>
            <GoTrashcan />
          </Button>
          {error && "error removing user"}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
