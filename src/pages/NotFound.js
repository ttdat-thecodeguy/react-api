import React, { Component } from 'react';

class NotFound extends Component {
    render() {
        return (
            <div classNameName="container">
                <div className="alert alert-primary alert-dismissible fade show" role="alert">
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <strong>Không tìm thấy trang</strong>
                </div>
            </div>
        );
    }
}

export default NotFound;