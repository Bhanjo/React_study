import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return(
        // 템플릿 리터럴을 통해 클래스 이름을 두 개 이상 지정함
        // 아래의 방법 말고도 join을 이용해 작성할 수도 있다
        // className={[styles.wrapper, styles.inverted].join('')}
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요 저는 <span className="something">CSS Moudle!!</span>
        </div>
    );
};

export default CSSModule;