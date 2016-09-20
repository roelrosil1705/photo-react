/**
 * Created by ROEL on 9/13/2016.
 */
import React from 'react';
import  {Link} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class C_sharing extends React.Component {
    render(){
        return(
            <MuiThemeProvider>
                <Link to="shared" class="btn btn-lg btn-danger"><RaisedButton>Shared</RaisedButton></Link>
            </MuiThemeProvider>
        );
    }
}