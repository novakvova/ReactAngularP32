import {useSelector} from "react-redux";

const HomePage = () => {

const {value: counter} = useSelector(state=> state.counter);

    return (
        <>
            <h1>Головна сторінка</h1>
            {counter === 20 && <h2>Це трапилося</h2>}
        </>
    );
}
export default HomePage;