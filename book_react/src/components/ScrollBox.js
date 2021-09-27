import { useRef } from "react";

const ScrollBox = () => {
    const boxRef = useRef();

    const style = {
        border: '1px solid black',
        height: '300px',
        width: '300px',
        overflow: 'auto',
        position: 'relative',
    };

    const innerStyle = {
        width: '100%',
        height: '650px',
        background: 'linear-gradient(white,black)',
    };

    const scrollToBottom = () => {
        boxRef.current.scrollTop =  boxRef.current.scrollHeight -  boxRef.current.clientHeight;
    }

    return(
        <>
        <div
            style={style}
            ref={boxRef}
        >
            <div style={innerStyle} />
        </div>
        <button onClick={scrollToBottom}>이동</button>
        </>
    );
}
export default ScrollBox;