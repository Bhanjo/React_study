import React from 'react';
import qs from 'qs';

const About = ({location}) => {
    const query = qs.parse(location.search, {
        // 문자열 맨 앞 '?' 문자 생략
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === 'true';

    return(
        <div>
            <h1>소개</h1>
            <p>리액트 라우터 기초를 실습하는 프로젝트입니다</p>
            {showDetail && <p>detail 값을 true로 설정했습니다</p>}
        </div>
    );
};

export default About;