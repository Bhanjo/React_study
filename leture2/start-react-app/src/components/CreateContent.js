import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2> {/* props이용 */}
                {/* submit 이벤트 */}
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault(); //prev를 통해 기본 동작인 페이지 이동을 막음
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                    }.bind(this)}
                >
                    <p><input type="text" name="title" placeholder="제목"></input></p>
                    <p><textarea type="text" name="desc" placeholder="내용"></textarea></p>
                    <p><input type="submit"></input></p>
                </form>
            </article>
        );
    }
}
export default CreateContent;