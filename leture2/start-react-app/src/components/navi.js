import React, { Component } from 'react';

// 컴포넌트 목록
class Navigation extends Component {
    render() {
        return (
            <nav><ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ul></nav>
        );
    }
}

// 외부로 넘겨줌
export default Navigation;