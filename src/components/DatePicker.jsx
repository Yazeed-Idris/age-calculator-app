export const DatePicker = () => {

    // function validate

    return <section id='date-picker-section'
                    className='flex justify-start text-Smokey-Grey font-Poppins font-bold text-xs tracking-[0.2rem]'>
        <label htmlFor="dayInput" className='flex flex-col grow-0'>DAY
            <input
                        className='focus:outline-none focus:border-Purple max-w-[7rem] mt-2 text-xl placeholder-Smokey-Grey text-Off-Black px-4 py-2 border border-Light-Grey rounded'
                        type="text" pattern='([0-2]\d|3[0-1])' placeholder='DD'/>
        </label>
        <label htmlFor="monthInput" className='ml-3 flex flex-col'>MONTH
            <input
                className='focus:outline-none focus:border-Purple max-w-[7rem] mt-2 text-xl placeholder-Smokey-Grey text-Off-Black px-4 py-2 border border-Light-Grey rounded'
                type="text" pattern='(0[1-9]|1[0-2])' placeholder='MM'/>
        </label>
        <label htmlFor="yearInput" className='ml-3 flex flex-col'>YEAR
            <input
                className='focus:outline-none focus:border-Purple max-w-[7rem] mt-2 text-xl placeholder-Smokey-Grey text-Off-Black px-4 py-2 border border-Light-Grey rounded'
                type="text" pattern='(1\d{3}|2\d{3})' placeholder='YYYY'/>
        </label>
    </section>
}