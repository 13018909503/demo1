import { connect } from 'react-redux';
import Cart from '../component/Cart/index';
import * as appActions from '../actions';

const mapStateToProps = state => {
  return {
    carts: state.counter.carts
  };
};

export default connect(
  mapStateToProps,
  { ...appActions }
)(Cart);
