import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
    return(
        // 템플릿 리터럴을 통해 클래스 이름을 두 개 이상 지정함
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            안녕하세요 저는 <span className="something">CSS Moudle!!</span>
        </div>
    );
};

export default CSSModule;