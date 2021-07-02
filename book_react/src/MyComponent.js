import React from 'react';
import PropTypes from 'prop-types'; // propTypes를 통한 props검증

const MyComponent = props => {
    // 비구조화 문법
    const { name, children, favNum } = props;

    return<div>
        나의 새롭고 멋진 컴포넌트
        <p>안녕하세요! 제 이름은 {name}입니다!</p>
        <p>자식의 이름은 {children}입니다</p>
        <p>좋아하는 숫자는 {favNum}입니다</p>
    </div>
};

MyComponent.defaultProps = {
    name: '기본이름'
}

// props 타입 선언
MyComponent.propTypes = {
    name: PropTypes.string, //타입결정
    favNum: PropTypes.number.isRequired //타입결정, 반드시 필요한 값 지정
}
export default MyComponent;