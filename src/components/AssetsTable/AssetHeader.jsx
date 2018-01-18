import React, {  Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as assetsActions  from '../../actions/assets';
import orderBy from 'lodash/orderBy';


//TODO Add arrows of direction
//TODO Create dto for manager sorting

class AssetsHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      direction: ['desc', 'asc'],
    }
  }
  sort = (field) =>{
    const { setAssets } = this.props.actions;
    const { assets } = this.props;
    const direction = this.state.direction.reverse();
    setAssets(orderBy(assets, [field], [direction[0]]));
    this.setState({ direction });
  }
  //TODO Get header elements from asset Obj key
  render(){
    return(
      <thead>
        <tr>
          <th onClick={()=>this.sort('id')}>id</th>
          <th onClick={()=>this.sort('assetName')}>assetName</th>
          <th onClick={()=>this.sort('price')}>price</th>
          <th onClick={()=>this.sort('lastUpdate')}>lastUpdate</th>
          <th onClick={()=>this.sort('type')}>type</th>
        </tr>
      </thead>
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

const MappedAssetsHeader= connect(mapStateToProps, mapDispatchToProps)(AssetsHeader);
export default MappedAssetsHeader;
