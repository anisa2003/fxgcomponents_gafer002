import React from 'react';

import { BSAlert } from '../src/components/BSAlert/BSAlert';

export default {
  title: 'Components-TP1/BSAlert',
  component: BSAlert
};

const Template = (args) => <BSAlert {...args} />;

const heading = "This is an alert's header";
const alertBody = "This is an alert — check it out!";

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  heading: heading,
  alertBody: alertBody,
  icon: 'dash'
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  heading: heading,
  alertBody: alertBody,
  icon: 'check'
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  heading: heading,
  alertBody: alertBody,
  icon: 'exclamation'
};
