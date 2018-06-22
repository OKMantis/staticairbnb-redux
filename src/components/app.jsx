import React, { Component } from 'react';

import FlatList from '../containers/flat_list';
import Map from '../containers/map';

class App extends Component {
  render() {
    return(
      <div className="row">
        <FlatList />
        <Map />
      </div>
    );
  }
}

// FlatList and Map are both containers which
// need to be created inside the containers
// folder.
// className="row" goes together with class="container-fluid"
// inside index.html on line 9.

export default App;
