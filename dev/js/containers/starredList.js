import React from 'react';
import axios from 'axios';
import {starredRepo} from '../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Draggable, Droppable } from 'react-drag-and-drop'

 class StarredList extends React.Component{

   componentWillMount(){
        console.log("Inside componentDidMount()");
        {this.props.starredRepo()}
    }

    showList(){
        return this.props.starList.map((obj) => {
            return (
                    <tr key={obj.id} id={obj.id}  >
                        <td className="align">{obj.id}</td>
                        <Draggable type="repos" data={obj.name}>
                        <td className="align">{obj.name}</td>
                        </Draggable>
                        <td className="align">{obj.stargazers_count}</td>
                    </tr>
            );
        });
    }
        onDrop(data){
                console.log("Hiiii "+data.repos);
                if(sessionStorage.dat == null){
                    console.log("NULL")
                    var arr=[];
                    arr.push(data.repos);
                    sessionStorage.dat=JSON.stringify(arr);
                    document.getElementById("repo_List").innerHTML+="<li><h3 class='color-adj'>"+data.repos+"</h3></li>";
                }
                else{
                    arr=JSON.parse(sessionStorage.dat);
                    arr.push(data.repos);
                    sessionStorage.dat=JSON.stringify(arr);
                    document.getElementById("repo_List").innerHTML+="<li><h3 class='color-adj'>"+data.repos+"</h3></li>";
                }
            }

    render(){
        if(!this.props.starList){
            return (
               <div className="align"><img src="gears.gif"/></div>
            )
        }
        return (
            <div>
                <div className="left-div">
                    <h3>
                        <table className="table-shadow">
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
                    <h2 className="align shadow"><u>My Favourite Repos</u></h2>
                    <Droppable types={['repos']} className="drop-div"  onDrop={this.onDrop.bind(this)}>
                        <ul id="repo_List"></ul>
                    </Droppable>
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