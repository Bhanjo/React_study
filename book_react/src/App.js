import CounterContainer from './container/CounterContainer';
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