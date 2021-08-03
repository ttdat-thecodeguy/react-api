import React, { Component } from 'react';
import ActorItem from '../components/ActorItem/ActorItem';
import ActorList from '../components/ActorList/ActorList';
import {connect} from 'react-redux'
import callAPI from './../utils/ApiCaller'
import { Link } from 'react-router-dom'
import { actGetListActorsRequest, actDeleteActorRequest } from './../actions'


class ActorListPage extends Component {  
    constructor(props){
        super(props);
        this.onDel = this.onDel.bind(this)
        this.state = {
            actors :[]
        }
    }

    componentDidMount(){
            //    callAPI('actors','GET',null).then(res => {
            //     //    this.setState({
            //     //        actors: res.data
            //     //    })
            //         this.props.getListActors(res.data)
            //    })

            this.props.getListActors();

    }
    
    onDel(id){
        // var { actors } = this.state      
        // callAPI(`actors/${id}`,'DELETE',null).then(
        //     res => {
        //         if(res.status === 200){
        //             actors = actors.filter(actor => actor.id != id)
        //             this.setState({
        //                 actors
        //             })
        //         }
                
        //     }
        // )
        this.props.onDeleteActor(id)
    }



    render() {        
        var {actors} = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div class="form-inline mt-4 mb-4">
                          <label htmlFor=""> Tìm Kiếm Tên: </label>
                          <input type="text"
                                class="form-control" name="seachByName" id="" placeholder="" />
                           <button type="button" class="btn btn-primary">Tìm</button> 
                        </div>
                        <Link to="/actor/add" className="btn btn-primary">Thêm Sản Phẩm</Link>
                        <ActorList>
                            {this.showActor(actors)}
                        </ActorList>

                    </div>
                </div>
            </div>
        );
    }

    showActor = (actors) => {
        var result = null;
        if(actors.length > 0) {
            result = actors.map((actor, idx) => {
                return (
                    <ActorItem 
                        key={idx}
                        actor={actor}
                        index={idx}
                        onDelete = {this.onDel}
                    />
                );
            })
        }
        return result
    }
}

const mapStateToProps = state => {
    return{
        actors : state.actorReducer
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getListActors: () => {
            dispatch(actGetListActorsRequest())
        },
        onDeleteActor: (id)=> {
            dispatch(actDeleteActorRequest(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ActorListPage);