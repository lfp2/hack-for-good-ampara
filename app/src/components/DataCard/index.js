import React from "react";
import { Container, Data, TrashIcon } from "./styles";
import * as Localization from "expo-localization";

import moment from "moment";

const DataCard = ({ data }) => {
  const deviceTimezone = Localization.timezone;
  return (
    <Container>
      <Data>{moment(data.timestamp).tz(deviceTimezone).format("LLL")}</Data>
      <TrashIcon />
    </Container>
  );
};

export default DataCard;
