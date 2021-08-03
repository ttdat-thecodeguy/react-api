import React, { Component } from 'react';

class LoginPage extends Component {
    render() {
        return (
            <form>
                    <div class="form-group">
                        <label htmlFor="">Email</label>
                        <input type="text" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"/>
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" name="" id="" class="form-control" placeholder="" aria-describedby="helpId"/>
                        <small id="helpId" class="text-muted">Không nên để lộ password cho bất cứ ai</small>
                    </div>
                    <button type="button" class="btn btn-primary">Đăng Nhập</button>
            </form>
        );
    }
}
export default LoginPage;