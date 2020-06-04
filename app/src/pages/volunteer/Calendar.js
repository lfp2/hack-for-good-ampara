import React, { useState, useEffect } from 'react';
import { ScreenCenter } from '../../assets/styles';
import Calendar from '../../components/Calendar';
export default function CalendarScreen() {
  return (
    <ScreenCenter>
      <Calendar />
    </ScreenCenter>
  );
}
