import React from 'react';
import './style.css'

import { AntTimeline } from '../src/components/AntTimeline/AntTimeline';

export default {
  title: 'Components-TP1/AntTimeline',
  component: AntTimeline
};

const Template = (args) => <AntTimeline {...args} />;

var items = [];

items.push({date: '2022-11-01', text:'Create a services'});
items.push({date: '2022-11-03', text: 'Solve initial network problems'});
items.push({date: '2022-11-07', text: 'Technical testing'});
items.push({date: '2022-11-11', text: 'Technical testing Network problems being solved'});

export const Left = Template.bind({});
Left.args = {
  mode: 'left',
  items: items

};

export const Right = Template.bind({});
Right.args = {
  mode: 'right',
  items: items
};

export const Alternate = Template.bind({});
Alternate.args = {
  mode: 'alternate',
  items: items
};