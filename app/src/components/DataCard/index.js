import React from 'react';
import { Container, Data, TrashIcon } from './styles';
import * as Localization from 'expo-localization';

import moment from 'moment';

function DataCard({ data, removeAction }) {
  const deviceTimezone = Localization.timezone;

  return (
    <Container>
      <Data>{moment(data.timestamp).tz(deviceTimezone).format('LLL')}</Data>
      <TrashIcon
        onPress={() => {
          if (removeAction) {
            removeAction();
          }
        }}
      />
    </Container>
  );
}

export default DataCard;
