import {useSpring, animated} from "react-spring";

export const AgeView = ({
                            years = '- -',
                            months = '- -',
                            days = '- -',
                            newYears = '- -',
                            newMonths = '- -',
                            newDays = '- -'
                        }) => {

    const yearsProps = useSpring({
        val: typeof newYears === "number" ? newYears : 0,
        from: {val: typeof years === 'number' ? years : 0}
    })
    const monthsProps = useSpring({
        val: typeof newMonths === "number" ? newMonths : 0,
        from: {val: typeof months === 'number' ? months : 0}
    })
    const daysProps = useSpring({
        val: typeof newDays === "number" ? newDays : 0,
        from: {val: typeof days === 'number' ? days : 0}
    })

    return (
        <div className='font-Poppins'>
            <h1 className='text-[3.35rem] leading-[3rem] lg:leading-[5.5rem] lg:text-8xl text-Purple font-extrabold italic'>
                {
                    years === newYears?
                        '- -'
                        :
                        <animated.span>{yearsProps.val.interpolate(val => Math.floor(val))}</animated.span>
                }
                <span className='text-Off-Black ml-3'>years</span></h1>
            <h1 className='text-[3.35rem] leading-[3rem] lg:leading-[5.5rem] lg:text-8xl text-Purple font-extrabold italic'>
                {
                    months === newMonths?
                        '- -'
                        :
                        <animated.span>{monthsProps.val.interpolate(val => Math.floor(val))}</animated.span>
                }
                <span className='text-Off-Black ml-3'>months</span></h1>
            <h1 className='text-[3.35rem] leading-[3rem] lg:leading-[5.5rem] lg:text-8xl text-Purple font-extrabold italic'>
                {
                    days === newDays?
                        '- -'
                        :
                        <animated.span>{daysProps.val.interpolate(val => Math.floor(val))}</animated.span>
                }
                <span className='text-Off-Black ml-3'>days</span></h1>
        </div>
    )
}
