import React from 'react';

import { BSTable } from '../src/components/BSTable/BSTable';

export default {
  title: 'Components-TP1/BSTable',
  component: BSTable
};

const Template = (args) => <BSTable {...args} />;

var headers = ['First name', 'Last name', 'email'];
var content = [['John', 'Tremblay', 'jtremblay@gmail.com'],
            ['Gilles', 'Duquerroy', 'gduquerroy@cg.com'],
            ['Pierre-Luc', 'Dubé', 'pldube@cg.com'],
            ['Ali', 'Assi', 'aassi@cg.com'],
            ['William', 'Garneau', 'wgarneau@cg.com']
];

export const Striped = Template.bind({});
Striped.args = {
  striped: true,
  headers: headers,
  content: content
};

export const Bordered = Template.bind({});
Bordered.args = {
  bordered: true,
  headers: headers,
  content: content
};

export const Hover = Template.bind({});
Hover.args = {
  hover: true,
  headers: headers,
  content: content
};

export const Dark = Template.bind({});
Dark.args = {
  headers: headers,
  content: content,
  variant: "dark"
};