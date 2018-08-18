// AppComponent也是一个组件，容器组件
import { connect } from 'react-redux';
import Product from '../component/Product/index';
import * as appActions from '../actions';

const mapStateToProps = state => {
 
  return {
    counter: state.counter.counter,
    lists: state.counter.lists
  };
};

export default connect(
  mapStateToProps,
  { ...appActions }
)(Product);
