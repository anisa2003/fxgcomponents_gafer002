import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const BSAlert = ({variant, heading, alertBody, icon}) => {

  return (
    <>
      <Alert variant="{variant}">
          <Alert.Heading> 
            <div className="row">
              <div className="col-auto"><i className={`bi bi-${icon}-circle`} style={{fontSize:'40px'}}></i></div>
              <div className="col my-auto">{heading}</div>
            </div> 
          </Alert.Heading>
          <hr />
          <p>
            {alertBody}
          </p>
      </Alert>
    </>
  );
}

BSAlert.propTypes = {
  variant: PropTypes.oneOf(['danger', 'success', 'warning']),
  heading: PropTypes.string,
  alertBody: PropTypes.string,
  icon: PropTypes.oneOf(['dash', 'check', 'exclamation'])
};
