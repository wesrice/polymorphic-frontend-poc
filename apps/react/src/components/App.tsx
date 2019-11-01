import PageStyles from '@maxmind/core/ui/Page';
import * as React from "react";
import Users from "./Users";

export default () => (
  <div className={PageStyles()}>
    <Users />
  </div>
);
