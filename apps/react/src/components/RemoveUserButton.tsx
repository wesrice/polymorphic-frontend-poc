import RemoveUserButtonStyles from "@maxmind/core/ui/RemoveUserButton";
import { removeUser } from "@maxmind/core/state/ducks/user.duck";
import IUser from "@maxmind/core/types/User";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

interface IRemoveUserButton {
  uuid: string;
}

const RemoveUserButton: React.FC<IRemoveUserButton> = ({ uuid }) => {
  const dispatch = useDispatch();
  const users: IUser[] = useSelector((state: any) => state.userReducer.users);

  return (
    <button
      className={RemoveUserButtonStyles()}
      disabled={users.length <= 0}
      onClick={() => dispatch(removeUser(uuid))}
    >
      Remove User
    </button>
  )
};

export default RemoveUserButton;
