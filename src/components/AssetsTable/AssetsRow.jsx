import React from 'react';
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

export default AssetsRow;
  