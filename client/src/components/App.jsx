import React from 'react';
import ReactDOM from 'react-dom';
import EventEntry from './EventEntry.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div>App component rendered!</div>
        <EventEntry />
      </div>
    )
  }
}

export default App;