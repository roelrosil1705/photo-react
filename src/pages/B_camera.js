/**
 * Created by ROEL on 9/13/2016.
 */
import React from 'react';
import  {Link} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class B_camera extends React.Component {
    render(){
        return(
            <MuiThemeProvider>
                <Link to="sharing" class="btn btn-lg btn-danger"><RaisedButton>Sharing</RaisedButton></Link>
            </MuiThemeProvider>
        );
    }
}