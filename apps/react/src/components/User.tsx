import IUser from "@maxmind/core/types/User";
import UserStyles from "@maxmind/core/ui/User";
import * as React from "react";
import RemoveUserButton from "./RemoveUserButton";

const User: React.FC<IUser> = ({
  firstName,
  lastName,
  photo,
  uuid,
}) => (
  <div className={UserStyles()}>
    <img src={photo} />
    <h1>{firstName} {lastName}</h1>
    <RemoveUserButton uuid={uuid} />
  </div>
);

export default User;
