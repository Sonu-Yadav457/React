import ActualTask from "./components/ActualTask";
import InputField from "./components/InputField";
function App(){
  return(
    <div>
      <h1 className="text-center fw-bold">To do App</h1>
      <InputField/>
      <ActualTask/>
      <ActualTask/>
    </div>
  )
}

export default App;