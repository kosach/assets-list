import React, {  Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FormControl } from 'react-bootstrap';
import * as assetsActions  from '../../actions/assets';
import orderBy from 'lodash/orderBy';
import { Assets, filter } from './../../services';

//TODO Add arrows of direction
//TODO Create dto for manager sorting
//TODO Add styles to header text when mouse on
// Render header items with loop

class AssetsHeader extends Component{
  constructor(props){
    super(props);
    this.state = {
      direction: ['desc', 'asc'],
      filterParams:{},
      tempArr:[],
    }
  }

  componentDidMount(){
    this.getAssets();
  }
  getAssets = () =>{
    const { setAssets } = this.props.actions;
    Assets.get().then(data =>{
      this.setState({ tempArr: data });
      setAssets(data);
    });
  }
  sort = (field) =>{
    const { setAssets } = this.props.actions;
    const { assets } = this.props;
    const direction = this.state.direction.reverse();
    setAssets(orderBy(assets, [field], [direction[0]]));
    this.setState({ direction });
  }
  handleChange = (e) => {
    const { name, value } = e.target
    const { setAssets } = this.props.actions;
    const { assets } = this.props;
    const { tempArr, filterParams } = this.state;
    this.setState({ filterParams: Object.assign(filterParams, {[name]: value})});
		setAssets(filter(tempArr, filterParams));
	}
  //TODO Get header elements from asset Obj key
  render(){
    return(
      <thead>
        <tr>
          <th>
          <div onClick={()=>this.sort('id')}>id</div>
            <FormControl
              bsSize="sm"
              type="text"
              name="id"
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </th>
          <th>
            <div onClick={()=>this.sort('assetName')}>assetName</div>
            <FormControl
              bsSize="sm"
              type="text"
              name="assetName"
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </th>
          <th>
          <div onClick={()=>this.sort('price')}>price</div>
            <FormControl
              bsSize="sm"
              type="text"
              name="price"
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </th>
          <th>
          <div onClick={()=>this.sort('lastUpdate')}>lastUpdate</div>
            <FormControl
              bsSize="sm"
              type="text"
              name="lastUpdate"
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </th>
          <th>
            <div onClick={()=>this.sort('type')}>type</div>
            <FormControl
              bsSize="sm"
              type="text"
              name="type"
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </th>
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
