/**
 * Created by ROEL on 9/13/2016.
 */
import React from 'react';
// import  {Link} from "react-router";

export default class Layout extends React.Component {
    navigate(){
        // console.log(this.props);
        this.props.history.pushStatse(null, "/");
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}