/**
 * Created by ROEL on 9/13/2016.
 */
import React from 'react';
import  {Link} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class A_frame extends React.Component {
    render(){
        return(
            <div>
                <MuiThemeProvider>
                    <Link to="camera" class="btn btn-lg btn-danger"><RaisedButton>Camera</RaisedButton></Link>
                </MuiThemeProvider>
            </div>
        );
    }
}