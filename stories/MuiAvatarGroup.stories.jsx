import React from 'react';
import './style.css'

import { MuiAvatarGroup } from '../src/components/MuiAvatarGroup/MuiAvatarGroup';

export default {
  title: 'Components-TP1/MuiAvatarGroup',
  component: MuiAvatarGroup
};

const Template = (args) => <MuiAvatarGroup {...args} />;

var img = [];

for(let i = 1; i <=5; i++)
    img.push(`assets/img/${i}.jpg`);

export const MediumSpace = Template.bind({});
MediumSpace.args = {
  max: 5,
  total: img.length,
  images: img,
  spacing: 'medium'
};

export const SmallSpace = Template.bind({});
SmallSpace.args = {
  max: 4,
  total: img.length,
  images: img,
  spacing: 'small'
};

export const NumberSpace = Template.bind({});
NumberSpace.args = {
  max: 3,
  total: img.length,
  images: img,
  spacing: 2
};