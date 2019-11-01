import AddUserButtonStyles from '@maxmind/core/ui/AddUserButton';
import { addUser } from "@maxmind/core/state/ducks/user.duck";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import IUser from '@maxmind/core/types/User';

const AddUserButton: React.FC = () => {
  const dispatch = useDispatch();
  const users: IUser[] = useSelector((state: any) => state.userReducer.users);

  return (
    <button
      className={AddUserButtonStyles()}
      disabled={users.length >= 5}
      onClick={() => dispatch(addUser())}
    >
      Add User
    </button>
  );
};

export default AddUserButton;
