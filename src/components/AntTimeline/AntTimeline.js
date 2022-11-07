"use strict"
import { Timeline } from 'antd';
import PropTypes from 'prop-types';

export const AntTimeline = ({mode, items}) => {

    const itemsList = [];

    for(let [i, item] of items.entries()) {
        itemsList.push(<Timeline.Item key={i} label={item.date}>{item.text}</Timeline.Item>);
    }

  return (
    <>
        <Timeline mode={mode}>
           {itemsList}
        </Timeline>
    </>
  );
}

AntTimeline.propTypes = {
  mode: PropTypes.oneOf(['left', 'right', 'alternate']),
  items: PropTypes.array
};






