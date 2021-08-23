import { connect } from "react-redux";
import { decrease, increase } from "../modules/counter";
import Counter from "./Counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return (<Counter number={number} onIncrease={increase} onDecrease={decrease} />);
};

export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    },
)(CounterContainer);