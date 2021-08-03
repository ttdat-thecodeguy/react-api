import React, { Component } from "react";
import { Link } from "react-router-dom";

class ActorItem extends Component {

  onDel(id){
    if(window.confirm('Bạn Có Muốn Xóa Không?')){ //eslint-disabled-line
        this.props.onDelete(id)
    }
  }

  render() {
    var { actor, index } = this.props;
    return (
      <tr>
        <td scope="row">{index + 1}</td>
        <td>{actor.first_name}</td>
        <td>{actor.last_name}</td>
        <td>
          <button 
          type="button" 
          className="btn btn-danger"
          onClick={() => this.onDel(actor.id)}>
            Xóa
          </button>
          <Link 
            to={`/actor/edit/${actor.id}`}
            type="button" 
            className="btn btn-warning"
            >
            Sửa
          </Link>
        </td>

        {/* <td>
                    <span className={`label label-${status}`}>
                        {statusName}
                    </span>
                </td> */}
      </tr>
    );
  }
}

export default ActorItem;
