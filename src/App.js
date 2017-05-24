import React, {Component} from 'react';
import ContactsContainer from './containers/ContactsContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h1>
              Contacts App
              <span className="pull-right">
                <button className="btn btn-xs btn-success">Add</button>
              </span>
            </h1>

            <div className="row">
              <div className="col-md-12">
                <ContactsContainer/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
