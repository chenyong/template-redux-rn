
import React from 'react';
import {connect} from 'react-redux';
import {incDetail} from '../actions/';
import Detail from '../components/detail';

let mapStateToProps = (state) => {
  return {data: state.detail};
};

let mapDispatchToProps = (dispatch) => {
  return {
    incDetail: () => {
      dispatch(incDetail())
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);
