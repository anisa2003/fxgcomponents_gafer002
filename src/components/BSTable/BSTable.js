import Table from 'react-bootstrap/Table';
import PropTypes from 'prop-types';

export const BSTable = ({headers, content, striped, bordered, hover, variant}) => {
  
    const thList = [];
    const trList = [];

    for(let [i, th] of headers.entries()) {
        thList.push(<th key={i}>{th}</th>)
    }

    for(let [i, tds] of content.entries()) {
        let tdList = [];
        for(let [j, td] of tds.entries()) {
            tdList.push(<td key={j}>{td}</td>)
        }
        trList.push(<tr key={i}>{tdList}</tr>)
    }

  return (
    <>
      <Table striped={striped} bordered={bordered} hover={hover} variant={variant}>
        <thead>
            <tr>{thList}</tr>
        </thead>
        <tbody>
            {trList}
        </tbody>
      </Table>
    </>
  );
}

BSTable.propTypes = {
  headers: PropTypes.array,
  content: PropTypes.array,
  striped: PropTypes.bool,
  bordered: PropTypes.bool,
  hover: PropTypes.bool,
  variant: PropTypes.oneOf(["dark"])
};






