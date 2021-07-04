import React, { Component } from 'react';

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.data.id,
            title:this.props.data.title,
            desc:this.props.data.desc
        }
        this.inputForHandler = this.inputForHandler.bind(this);
    }
    inputForHandler(e) {
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
            <article>
                <h2>Update</h2> {/* props이용 */}
                {/* submit 이벤트 */}
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault(); //prev를 통해 기본 동작인 페이지 이동을 막음
                        this.props.onSubmit(
                            this.state.id,
                            this.state.title,
                            this.state.desc
                        );
                    }.bind(this)}
                >
                    <input type="hidden" name="id" value={this.state.id}></input>
                    <p>
                        <input 
                        type="text"
                        name="title"
                        placeholder="제목"
                        value={this.state.title}
                        onChange={this.inputForHandler}
                        ></input>
                    </p>
                    <p><textarea
                    onChange={this.inputForHandler}
                    type="text" name="desc" placeholder="내용" value={this.state.desc}></textarea></p>
                    <p><input type="submit"></input></p>
                </form>
            </article>
        );
    }
}
export default UpdateContent;