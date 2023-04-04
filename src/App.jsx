import {DatePicker} from "./components/DatePicker.jsx";
import {ArrowDivider} from "./components/ArrowDivider";
import {AgeView} from "./components/AgeView";
import {useState} from "react";

function App() {
    const [years, setYears] = useState('- -');
    const [newYears, setNewYears] = useState('- -');
    const [months, setMonths] = useState('- -');
    const [newMonths, setNewMonths] = useState('- -');
    const [days, setDays] = useState('- -');
    const [newDays, setNewDays] = useState('- -');

    function calculateYearsMonthsDays(day, month, year) {
        const today = new Date();
        const birthDate = new Date(year, month - 1, day);
        const passedTime = today.getTime() - birthDate.getTime();
        const years = Math.floor(passedTime / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((passedTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((passedTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        setYears(newYears)
        setMonths(newMonths)
        setDays(newDays)
        setNewYears(years);
        setNewMonths(months);
        setNewDays(days);

    }

  return (
    <div className="grid place-items-center h-full bg-Off-White">
        <div className='shadow-lg p-6 lg:p-16 bg-White rounded-3xl rounded-br-[4rem] min-w-0 max-w-[90rem] mx-3'>
            <DatePicker calculateYearsMonthsDays={calculateYearsMonthsDays} />
            <ArrowDivider />
            <AgeView years={years} newYears={newYears} months={months} newMonths={newMonths} days={days} newDays={newDays} />
        </div>
    </div>
  )
}

export default App
