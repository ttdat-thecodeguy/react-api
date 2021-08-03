import React, { Component } from 'react';
import ActorItem from './../ActorItem/ActorItem'
class ActorList extends Component {
    render() {
        return (
                                        <div className="card text-center">
                                          <div className="card-header">
                                            Quản Lí Diễn Viên
                                          </div>
                                          <div className="card-body">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th>STT</th>
                                                            <th>Họ</th>
                                                            <th>Tên</th>
                                                            <th>Hành Động</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {this.props.children}
                                                    </tbody>
                                                </table>
                                          </div>
                                        </div>
        );
    }
}

export default ActorList;