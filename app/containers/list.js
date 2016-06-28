
import React from 'react';
import {connect} from 'react-redux';
import {incList} from '../actions/';
import List from '../components/list';

let mapStateToProps = (state) => {
  return {data: state.list};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incList: () => {
      dispatch(incList())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
