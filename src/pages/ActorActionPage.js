import React, { Component } from "react";
import CallApi from "./../utils/ApiCaller";
import { Link } from "react-router-dom";
import callApi from "./../utils/ApiCaller";

import { connect } from 'react-redux'
import { actAddActorRequest, actGetActorRequest, actUpdateActorRequest } from '../actions'
class ActorActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtHo: "",
      txtTen: "",
      id: "",
    };
  }
  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  componentDidMount(){
    var { match } = this.props;
    if (match) {
      var id = match.params.id
      // callApi(`actors/${id}`,'GET',null).then(res => {
      //   var { id, first_name, last_name } = res.data
      //   this.setState({
      //     id,
      //     txtHo: first_name,
      //     txtTen: last_name
      //   })
      // })
      this.props.onEditActor(id)

    }
  }

  // static getDerivedStateFromProps(nextProps){
  //   if(nextProps && nextProps.actorEdit){
  //     console.log(nextProps)
  //     this.setState({
  //       id: nextProps.actorEdit.id
  //     })
  //   }
  // }

  componentWillReceiveProps(nextProps){
       if(nextProps && nextProps.actorEdit){
        var { first_name, last_name, id } = nextProps.actorEdit
        console.log(nextProps.actorEdit)
        this.setState({
          id,
          txtHo: first_name,
          txtTen: last_name
        })
      }
  }

  onSave = (e) => {
    e.preventDefault();
    var { id,  txtHo, txtTen } = this.state;
    var { history } = this.props;

    const actor = {
      "id": id,
      "first_name" : txtHo,
      "last_name" : txtTen
    }

    if(id){ 
      //update
      // CallApi(`actors/${id}`, 'PUT', {
      //   first_name: txtHo,
      //   last_name: txtTen,
      // }).then(( _ ) => {
      //   history.goBack();
      // });
        
       this.props.onUpdateActor(actor)
       history.goBack();

    } else{
      this.props.onSaveActor(actor)
      history.goBack();
    }
  };

  render() {
    var { txtHo, txtTen } = this.state
    return (
      <div className="col-md-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label htmlFor="">Họ</label>
            <input
              type="text"
              className="form-control"
              name="txtHo"
              id=""
              aria-describedby="first_name"
              placeholder=""
              value={txtHo}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Tên</label>
            <input
              type="text"
              className="form-control"
              name="txtTen"
              id=""
              aria-describedby="last_name"
              placeholder=""
              value={txtTen}
              onChange={this.onChange}
            />
          </div>
          <Link to="/actor-list" className="btn btn-danger">
            Trở Lại
          </Link>
          <button type="submit" className="btn btn-primary">
            Lưu Thông Tin
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    actorEdit: state.itemEditReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSaveActor : actor => {
      dispatch(actAddActorRequest(actor))
    },
    onEditActor : (id) => {
      dispatch(actGetActorRequest(id))
    },
    onUpdateActor : (actor) => {
      dispatch(actUpdateActorRequest(actor))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActorActionPage);
