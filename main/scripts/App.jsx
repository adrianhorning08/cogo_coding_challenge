import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Main from './main';

const App = () => (
    <div>
      <Route exact path ="/" component={Main} />
    </div>
);

export default App;
