import React from 'react';
import './style.css'

import { AntInputSite } from '../src/components/AntInputSite/AntInputSite';

export default {
  title: 'Components-TP1/AntInputSite',
  component: AntInputSite
};

const Template = (args) => <AntInputSite {...args} />;

const placeholder = "Your site web";
const beforeArray = ['http', 'https'];
const afterArray = ['com', 'org', 'net'];
const beforeString = 'http';
const afterString = 'com';

export const SimpleInput = Template.bind({});
SimpleInput.args = {
  placeholder: placeholder,
  before: "",
  after: ""
};

export const SelectInput = Template.bind({});
SelectInput.args = {
  placeholder: placeholder,
  before: beforeArray,
  after: afterArray
};

export const StringInput = Template.bind({});
StringInput.args = {
  placeholder: placeholder,
  before: beforeString,
  after: afterString
};