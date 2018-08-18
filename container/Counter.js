// AppComponent也是一个组件，容器组件
import { connect } from 'react-redux';
import Counter from '../component/Counter/index';
import * as appActions from '../actions';

const mapStateToProps = state => {
  return {
    counter: state.counter.counter,
    counter1: state.counter.counter1,
    lists: state.counter.lists
  };
};

export default connect(
  mapStateToProps,
  { ...appActions }
)(Counter);
