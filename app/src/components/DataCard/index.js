import React from 'react';
import { Container, Data, TrashIcon } from './styles';
import * as RNLocalize from 'react-native-localize';

import moment from 'moment';

const DataCard = ({ data }) => {
  const deviceTimezone = RNLocalize.getTimeZone();
  return (
    <Container>
      <Data>{moment(data.timestamp).tz(deviceTimezone).format('LLL')}</Data>
      <TrashIcon />
    </Container>
  );
};

export default DataCard;
