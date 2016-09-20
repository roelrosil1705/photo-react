import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./pages/Layout";
import Frame from "./pages/A_frame";
import Camera from "./pages/B_camera";
import Sharing from "./pages/C_sharing";
import Shared from "./pages/D_shared";

const app = document.getElementById('root');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Frame}></IndexRoute>
        <Route path="camera" component={Camera}/>
        <Route path="sharing" component={Sharing}/>
        <Route path="shared" component={Shared}/>
      </Route>
    </Router>,
app);
