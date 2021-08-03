import React, { Component } from 'react';

class UserInfoPage extends Component {
    render() {
        return (
            <div class="card">
                <div class="card-header">
                    <h4>Thông tin user</h4>
                </div>
                <div class="card-body">
                    <p class="card-text">Emai: 123@gmail.com</p>
                    <p class="card-text">Tên Đầy Đủ: Hà Nguyên</p>
                </div>
            </div>
        );
    }
}

export default UserInfoPage;