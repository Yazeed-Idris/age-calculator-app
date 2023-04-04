import {useState} from "react";

export const DatePicker = ({calculateYearsMonthsDays}) => {
   const [dayErrorMessage, setDayErrorMessage] = useState(null);
    const [monthErrorMessage, setMonthErrorMessage] = useState(null);
    const [yearErrorMessage, setYearErrorMessage] = useState(null);
    const [dateErrorMessage, setDateErrorMessage] = useState(null);
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    // function validate
    function checkDay(e) {
       if (e.target.value === '') {
            setDayErrorMessage('This field is required');
            setDay('')
        } else if (parseInt(e.target.value) > 31 || parseInt(e.target.value) < 1 || !Number.isInteger(Number(e.target.value))) {
            setDayErrorMessage('Must be valid day');
            setTimeout(() => {
                setDayErrorMessage(null);
            }
            , 3000)
        } else {
            setDayErrorMessage(null);
            setDay(e.target.value);
            validateDate(e.target.value, month, year);
        }
    }

    function checkMonth(e) {
        if (e.target.value === '') {
            setMonthErrorMessage('This field is required');
            setMonth('')
        } else if (parseInt(e.target.value) > 12 || parseInt(e.target.value) < 1 || !Number.isInteger(Number(e.target.value))) {
            setMonthErrorMessage('Must be valid month');
            setTimeout(() => {
                setMonthErrorMessage(null);
            }
            , 3000)
        } else {
            setMonthErrorMessage(null);
            setMonth(e.target.value);
            validateDate(day, e.target.value, year);
        }
    }

    function checkYear(e) {
        if (e.target.value === '') {
            setYearErrorMessage('This field is required');
            setYear('')
        } else if (parseInt(e.target.value) > new Date().getFullYear() || !Number.isInteger(Number(e.target.value))) {
            setYearErrorMessage('Must be valid year');
            setTimeout(() => {
                setYearErrorMessage(null);
            }
            , 3000)
        } else {
            setYearErrorMessage(null);
            setYear(e.target.value);
            validateDate(day, month, e.target.value);
        }
    }

    function validateDate(day, month, year) {
        if (day === '' || month === '' || year === '') {
           return;
        }
        const date = new Date(year, month - 1, day);
        const getDays = (year, month) => {
            return new Date(year, month, 0).getDate();
        };
        const daysInMonth = getDays(year, month);
        if (daysInMonth < parseInt(day)) {
            setDateErrorMessage('Must be valid date');
            return;
        }
        if (date > new Date()) {
            setDateErrorMessage('Must be valid date');
            return;
        }
        setDateErrorMessage(null);
        calculateYearsMonthsDays(day, month, year);

    }

    return <section id='date-picker-section'
                    className='grid grid-cols-3 gap-3 lg:gap-6 text-Smokey-Grey font-Poppins font-extrabold text-xs tracking-[0.2rem] w-fit lg:mr-56'>
        <div className='flex flex-col'>
        <label htmlFor="dayInput">DAY</label>
            <input
                value={day}
                onChange={checkDay}
                name='dayInput'
                className='min-w-0 w-full max-w-[8rem] focus:outline-none focus:border-Purple mt-2 text-xl lg:text-2xl placeholder-Smokey-Grey
                text-Off-Black py-3 px-4 border border-Light-Grey rounded cursor caret-Purple'
                type="text" pattern='([0-2]\d|3[0-1])' placeholder='DD'/>
            {dayErrorMessage? <ErrorMessage errorMessage={dayErrorMessage}/> : ''}
            {dateErrorMessage? <ErrorMessage errorMessage={dateErrorMessage}/> : ''}
        </div>
        <div className='flex flex-col'>
        <label htmlFor="monthInput">MONTH</label>
            <input
                value={month}
                onChange={checkMonth}
                name='monthInput'
                className='min-w-0 w-full max-w-[8rem] focus:outline-none focus:border-Purple mt-2 text-xl lg:text-2xl placeholder-Smokey-Grey text-Off-Black px-4 py-3 border border-Light-Grey rounded caret-Purple'
                type="text" pattern='(0[1-9]|1[0-2])' placeholder='MM'/>
            {monthErrorMessage? <ErrorMessage errorMessage={monthErrorMessage}/> : ''}
        </div>
        <div className='flex flex-col'>
        <label htmlFor="yearInput">YEAR</label>
            <input
                value={year}
                onChange={checkYear}
                name='yearInput'
                className='min-w-0 w-full max-w-[8rem] focus:outline-none focus:border-Purple mt-2 text-xl lg:text-2xl placeholder-Smokey-Grey text-Off-Black px-4 py-3 border border-Light-Grey rounded caret-Purple'
                type="text" pattern='(1\d{3}|2\d{3})' placeholder='YYYY'/>
            {yearErrorMessage? <ErrorMessage errorMessage={yearErrorMessage}/> : ''}
        </div>
    </section>
}

const ErrorMessage = ({errorMessage}) => {

    return <p className='text-Light-Red text-xs italic font-Poppins font-normal tracking-normal mt-1'>{errorMessage}</p>
}
