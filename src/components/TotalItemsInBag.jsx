import closeIcon from '../assets/x.svg'
import heartIcon from '../assets/heart.svg'
import { getTotalItemsInBag } from '../utils';

const TotalItemsInBag = ({ cart }) => {
    return (
        <nav className=' bg-white w-full flex justify-between items-center py-2.5 px-4 shadow-md sticky top-0'>
            <div className='flex items-center gap-2'>
            <img src={closeIcon} alt="close" />
            <div className='flex flex-col justify-start'>
                <span className=' text-xs font-light text-gray-500'>Step 1 of 3</span>
                <span className=' text-sm font-semibold'>Bag ({getTotalItemsInBag(cart)} products)</span>
            </div>
            </div>
            <img src={heartIcon} alt="wishlist" />
        </nav>
    )
}

export default TotalItemsInBag;
