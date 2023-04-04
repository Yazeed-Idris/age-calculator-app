export const AgeView = ({years = '- -', months = '- -', days = '- -'}) => {
    return (
        <div className='font-Poppins'>
            <h1 className='text-[3.35rem] leading-[3rem] lg:leading-[5.5rem] lg:text-8xl text-Purple font-extrabold italic'>{years} <span className='text-Off-Black'>years</span></h1>
            <h1 className='text-[3.35rem] leading-[3rem] lg:leading-[5.5rem] lg:text-8xl text-Purple font-extrabold italic'>{months} <span className='text-Off-Black'>months</span></h1>
            <h1 className='text-[3.35rem] leading-[3rem] lg:leading-[5.5rem] lg:text-8xl text-Purple font-extrabold italic'>{days} <span className='text-Off-Black'>days</span></h1>
        </div>
    )
}
