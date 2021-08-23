import { connect } from "react-redux";
import Counter from "./Counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return (<Counter number={number} onIncrease={increase} onDecrease={decrease} />);
};

const mapStateToProps = state => ({
    number: state.counter.number,
});
const mapDispatchToProps = dispatch => ({
    increase: () => {
        console.log('증가');
    },
    decrease: () => {
        console.log('감소');
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);