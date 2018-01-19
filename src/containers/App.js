import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

 export default class App extends Component {
  render () {
  	const style = {
  		margin: 12
  	}
  	
    return (
      <div>
          <h1>Blaze Warehouse </h1>
          <RaisedButton label="Default" style={style}/>
          <RaisedButton label="Primary" primary={true} style={style} />
          <RaisedButton label="Secondary" secondary={true} style={style} />
      </div>
    )
  }
}
// export default connect(state => state)(App);
