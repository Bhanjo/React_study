import React, { useEffect, useState} from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    // useEffect: 컴포넌트 렌더링될 때마다 특정 작업 수행
    useEffect(() => {
        console.log('렌더링 완료');
        console.log(name);
        return () => {
            console.log('클린업');
            console.log(name);
        }
    }, [name]);
    // []를 넣으면 마운트 시에만 불러옴, [값]을 넣으면 해당 값이 업데이트 될 때 작업 수행

    const onChangeName = e => {
        setName(e.target.value);
    };
    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름 :</b>{name}
                </div>
                <div>
                    <b>닉네임: </b>{nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;