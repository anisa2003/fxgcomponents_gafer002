import { Input, Select, Space } from 'antd';
import PropTypes from 'prop-types';

export const AntInputSite = ({before, after, placeholder}) => {

  let addonBefore, addonAfter;

  if(typeof before == 'string')
    addonBefore = before;
  else if(typeof before == 'object'){
    let beforeItems = [];

    for(let [i, item] of before.entries()) {
      beforeItems.push(<Select.Option key={i} value={item}>{item}</Select.Option>);
    }

    addonBefore = (
      <Select defaultValue={before[0]} className="select-before">
         {beforeItems}
      </Select>
    );
  }

  if(after != "" && typeof after == 'string')
    addonAfter = '.'+ after;
  else if(typeof after == 'object') {
    let afterItems = [];

    for(let [i, item] of after.entries()) {
      afterItems.push(<Select.Option key={i} value={item}>.{item}</Select.Option>);
    }

    addonAfter = (
      <Select defaultValue={after[0]} className="select-before">
         {afterItems}
      </Select>
    );
  }

  return (
    <>
      <Space>
        <Input placeholder={placeholder} addonBefore={addonBefore} addonAfter={addonAfter}/>
      </Space>
    </>
  );
}

AntInputSite.propTypes = {
  before: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  after: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  placeholder: PropTypes.string
};






