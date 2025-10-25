import './App.css'
import {useGetCategoriesQuery} from "./services/apiCategory.ts";

function App() {

    const {data: categories, isLoading, isError } = useGetCategoriesQuery();

    console.log("categories list", categories);
    console.log("categories loading", isLoading);
    console.log("categories isError", isError);

  return (
    <>
      <h1>Hello React</h1>
    </>
  )
}

export default App
