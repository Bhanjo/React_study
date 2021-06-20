import React, { Component } from 'react';

// 컴포넌트 목록
class Navigation extends Component {
    render() {
        let data = this.props.data;
        let lists = [];
        let i =0;
        while(i < data.length) {
            // 여러 값을 넣을 때 key값이 유니크 값이 되어야 하는데 아래처럼 key값을 지정해주면 된다
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>);
            i = i+1;
        }
        return (
            <nav><ul>
                {lists}
            </ul></nav>
        );
    }
}

// 외부로 넘겨줌
export default Navigation;