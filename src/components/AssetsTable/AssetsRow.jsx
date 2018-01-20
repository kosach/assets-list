import React from 'react';
import PropTypes from 'prop-types';
const AssetsRow = ({ asset }) => {
  return (
    <tr>
      <td>{ asset.id }</td>
      <td>{ asset.assetName }</td>
      <td>{ asset.price }</td>
      <td>{ asset.lastUpdate }</td>
      <td>{ asset.type }</td>
    </tr>
);
}

AssetsRow.propTypes = {
  asset: PropTypes.shape({
    id: PropTypes.number.isRequired,
    assetName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    lastUpdate: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
}

export default AssetsRow;
  