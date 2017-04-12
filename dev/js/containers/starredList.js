import React from 'react';
import axios from 'axios';
import {starredRepo} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

 class StarredList extends React.Component{

   componentWillMount(){
        console.log("Inside componentDidMount()");
        {this.props.starredRepo()}
    }
    /*drag(ev){
        console.log(ev.target.id);
        ev.dataTransfer.setData("text",ev.target.id);
    }
    drop(ev){
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
    allowDrop(ev){
        ev.preventDefault();
    }*/

    showList(){
        return this.props.starList.map((obj) => {
            return (
                <tr key={obj.id} id={obj.id} draggable="true">
                    <td className="align">{obj.id}</td>
                    <td className="align">{obj.name}</td>
                    <td className="align">{obj.stargazers_count}</td>
                </tr>
            );
        });
    }

    render(){
        if(!this.props.starList){
            return (
               <div><img src="gears.gif"/></div>
            )
        }
        return (
            <div>
                <div className="left-div">
                    <h3>
                        <table>
                            <thead>
                                <tr>
                                    <th className="align">ID:</th>
                                    <th className="align">Repo Name:</th>
                                    <th className="align">Stargazers Count:</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showList()}
                            </tbody>
                        </table>
                    </h3>
                </div>
                <div className="right-div">
                    <div id="inner"></div>
                </div>

            </div>

        )
    }
}
function matchDispatchToProps(dispatch){
        console.log("blabla");
        return bindActionCreators({starredRepo: starredRepo}, dispatch);
    }
function mapStateToProps(state) {
    console.log(state.starList);
    return {
        starList: state.starList
    };
}
export default connect(mapStateToProps, matchDispatchToProps)(StarredList);