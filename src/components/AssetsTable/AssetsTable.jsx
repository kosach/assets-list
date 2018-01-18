import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { Assets } from './../../services';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AssetRow from './AssetsRow';
import * as assetsActions  from '../../actions/assets';
import AssetsHeader from './AssetHeader';
import { mock } from '../../../mock';


//TODO add propTypes to components
class AssetsTable extends Component{



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

const mapDispatchToProps = (dispatch) => {
  const actions = {...bindActionCreators(assetsActions, dispatch)};
  return {
    actions,
  };
};

const MappedAssetsTable = connect(mapStateToProps, mapDispatchToProps)(AssetsTable);
export default MappedAssetsTable;
