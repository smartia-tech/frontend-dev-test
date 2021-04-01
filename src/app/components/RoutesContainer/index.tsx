import * as React from "react";
import Topnav from "../Topnav";
import { RouteContainerBox } from "./styles";

export default function RoutesContainer(props: React.PropsWithChildren<any>) {
  return (
    <RouteContainerBox>
      <Topnav />
      <main className="body">{props.children}</main>
    </RouteContainerBox>
  );
}
