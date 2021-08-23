import CounterContainer from './components/CounterContainer';
import Todos from './components/Todos';

const App = () => {
    return(
        <div>
            <CounterContainer />
            <hr />
            <Todos />
        </div>
    );
};

export default App;