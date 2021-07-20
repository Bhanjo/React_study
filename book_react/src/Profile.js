import React from 'react';

const data = {
    velopert: {
        name: '배한조',
        description: '리액트를 배우는 학생'
    },
    gildong: {
        name: '홍길동',
        description: '고전 문학의 주인공'
    },
};

const Profile = ({match}) => {
    const { username } = match.params;
    const profile = data[username];

    if(!profile) {
        return <div>존재하지 않는 사용자입니다</div>
    }
    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    );
};

export default Profile;