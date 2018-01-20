import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Assets } from './../../services';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AssetRow from './AssetsRow';
import * as assetsActions  from '../../actions/assets';
import AssetsHeader from './AssetHeader';
import { mock } from '../../../mock';

class AssetsTable extends Component{
  static propTypes = {
    assets: PropTypes.arrayOf(PropTypes.object),
  }
  render(){
    const { assets } = this.props;
    return(
      <Table responsive>
        <AssetsHeader />
        <tbody>
          {
            assets && assets.map(asset => <AssetRow key={asset.id} asset={asset} />)
          }
        </tbody>
      </Table>
    )
  }
}

const mapStateToProps = (state) => ({
  assets: state.assets,
});

const MappedAssetsTable = connect(mapStateToProps)(AssetsTable);
export default MappedAssetsTable;
