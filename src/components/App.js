import React,{useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import Events from './Events'
import reducer from '../reducers'


console.log({AppContext})

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);



  return (
    <AppContext.Provider value={'Providerrrrrrrrrrrrrrrrrr'}>
    <div className="container-fluid">
        <EventForm state={state} dispatch={dispatch}/>
        <Events state={state} dispatch={dispatch}/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
