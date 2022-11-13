import { getRupeesString, getTotalCostOfItems } from "../utils";

const TotalCostOfBag = ({ cart }) => {
    return (
        <div className=' bg-white w-full flex justify-between items-center py-2.5 px-6 shadow-md border-t'>
            <div className='flex flex-col justify-start'>
                <span className='font-semibold'>{getRupeesString(getTotalCostOfItems(cart))}</span>
                <span className=' text-xs font-light text-cyan-500'>View details</span>
            </div>
            <button className="bg-black text-white font-medium rounded-md px-12 py-3">Place order</button>
        </div>
    )
}

export default TotalCostOfBag;
