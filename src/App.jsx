import {DatePicker} from "./components/DatePicker.jsx";
import {ArrowDivider} from "./components/ArrowDivider";
import {AgeView} from "./components/AgeView";

function App() {

  return (
    <div className="grid place-items-center h-full bg-Off-White">
        <div className='shadow-lg p-6 lg:p-16 bg-White rounded-3xl rounded-br-[4rem] min-w-0 max-w-[90rem] mx-3'>
            <DatePicker />
            <ArrowDivider />
            <AgeView />
        </div>
    </div>
  )
}

export default App
