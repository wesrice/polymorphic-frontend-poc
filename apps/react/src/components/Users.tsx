import IUser from "@maxmind/core/types/User";
import ContainerStyles from '@maxmind/core/ui/Container';
import * as React from "react";
import { useSelector } from "react-redux";
import AddUserButton from "./AddUserButton";
import User from "./User";

const Users: React.FC = () => {
  const users: IUser[] = useSelector((state: any) => state.userReducer.users);

  return (
    <div className={ContainerStyles()}>
      <AddUserButton />
      {users && users.map(user => (
        <User {...user} />
      ))}
    </div>
  );
};

export default Users;
