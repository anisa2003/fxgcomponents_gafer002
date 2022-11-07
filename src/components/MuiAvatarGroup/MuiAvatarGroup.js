import { Avatar, AvatarGroup} from '@mui/material';
import PropTypes from 'prop-types';

export const MuiAvatarGroup = ({max, total, images, spacing}) => {
  
  const imageslist = [];

  for(let [i, url] of images.entries()) {
    imageslist.push(<Avatar key={i} src={url} />)
  }

  return (
    <>
      <AvatarGroup max={max} total={total} spacing={spacing}>
        {imageslist}
      </AvatarGroup>
    </>
  );
}

MuiAvatarGroup.propTypes = {
  max: PropTypes.number,
  total: PropTypes.number,
  images: PropTypes.array,
  spacing: PropTypes.oneOfType([PropTypes.oneOf(['medium', 'small']), PropTypes.number])
};






