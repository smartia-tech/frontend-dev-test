import * as React from "react";
import dayjs from "dayjs";

import { LaunchContainer } from "./styles";
import { Launch } from "app/api/launches/types";
import P from "app/styles/elements/P";
import { ReactComponent as YesIcon } from "app/assets/img/icons/accept.svg";
import { ReactComponent as NoIcon } from "app/assets/img/icons/cancel.svg";

interface Props extends React.BaseHTMLAttributes<HTMLDivElement> {
  launch: Launch;
}
export const SpaceLaunch: React.FC<Props> = (props) => {
  const { launch, ...rest } = props;

  const allCoresLandedSuccessfullty = launch.cores.every(
    (l) => l.landing_success
  );
  const landingStatement = allCoresLandedSuccessfullty
    ? "All Cores Landed"
    : "All Cores Didn't Land";

  return (
    <LaunchContainer {...rest}>
      <img src={launch.links.patch.small} alt={launch.name} />
      <div className="info">
        <P semiBold className="launch-name">
          {launch.name}
        </P>
        <P medium className="date">
          {dayjs(launch.date_utc).format("ddd, MMM D, YYYY h:mm A")}
        </P>
        <P
          medium
          className="status"
          aria-label={landingStatement}
          title={landingStatement}
        >
          {landingStatement}
          {allCoresLandedSuccessfullty ? (
            <YesIcon title="Yes" aria-label="Yes" />
          ) : (
            <NoIcon title="No" aria-label="No" />
          )}
        </P>
      </div>
    </LaunchContainer>
  );
};

export default SpaceLaunch;
