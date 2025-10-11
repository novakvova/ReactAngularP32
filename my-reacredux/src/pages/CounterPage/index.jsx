import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "../../features/counter/counterSlice";

const CounterPage = () => {

    const counter = useSelector(state => state.counter);
    //Використовується для вкилики action - змінна state - глобально
    //активує певні дії у Redux - тобто він казує яка діє має відбутися
    const dispatch = useDispatch();

    // console.log("Global counter", counter);

    return (
        <>
            <h1>Counter Hello {counter.value}</h1>

            <button onClick={() => dispatch(increment())}>
                Збільшити
            </button>

            <button onClick={() => dispatch(decrement())}>
                Зменити
            </button>

        </>
    )
}

export default CounterPage;