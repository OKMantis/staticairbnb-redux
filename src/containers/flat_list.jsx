import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
// Above is needed to make mapDispatchToProps function work
import { connect } from 'react-redux';
// Is to connect mapDispatchToProps function to the component
import { setFlats } from '../actions';
// Above is importing the setFlats action so it can be
// used by mapDispatchToProps function.

import Flat from '../components/flat';

class FlatList extends Component {

  componentWillMount() {
    this.props.setFlats(); // 1. Triggers action setFlats (see ../actions/index.js)
  }
  // Above when the component mounts. I will call
  // this.props.setFlats() and it will trigger the
  // action in Redux. The action will fetch the flats
  // from the API. Then the reducer will receive this
  // action and update the Redux store.

  render() {
    return(
      <div className="flat_list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name} />)}
      </div>
      );
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { setFlats: setFlats },
 dispatch
 );
}
// Above this function is made to wire the action setFlats
// to the props of the flat-list component.

function mapStateToProps(state) {
 return {
 flats: state.flats
 };
}
// Above we're mapping the Redux state from the external
// store to actual props in the component.

// 4. Thanks to the wiring of the Redux state to props
  //  we say that ok the state.flats can go directly into
  // React props and this way we have now access to
  // this.props.flats (see line 26).

export default connect(mapStateToProps, mapDispatchToProps)
(FlatList);
// This will connect the component with mapDispatchToProps
// and mapStateToProps.
