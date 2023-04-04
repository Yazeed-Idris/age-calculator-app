export const ArrowDivider = () => {
    return <div className='relative w-full my-12'>
        <div className='flex justify-center items-center'>
            <div className='w-full h-[0.1rem] bg-Light-Grey'></div>
            <div  className='absolute  text-White fill-White bg-Purple rounded-full px-3 py-4 lg:px-5 lg:py-6 lg:right-0'>

            <object type='image/svg+xml' className='w-10 h-8 lg:w-14 lg:h-12 object-fill' data="/age-calculator-app/icons/icon-arrow.svg"></object>
            </div>
        </div>
    </div>
}
