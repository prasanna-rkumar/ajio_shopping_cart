import { memo } from "react";
import { getRupeesString } from "../utils";

const CartItem = memo(({item, setCart}) => {

    const decrement = () => {
        setCart((prev) => {
            if (item.quantity > 1) {
                return prev.map((value) => 
                    value.id === item.id
                        ? { ...value, quantity: item.quantity - 1 }
                        : { ...value }
                ) 
            }
            return prev.filter((value) => value.id !== item.id);
        })
    }

    const increment = () => {
        setCart((prev) => {
            return prev.map((value) => 
                value.id === item.id
                    ? { ...value, quantity: item.quantity + 1 }
                    : { ...value }
            )
        })
    }

    const removeItem = () => {
        setCart(prev => prev.filter((value) => value.id !== item.id))
    }

    return (
        <div className="m-3 p-2 bg-white rounded-md shadow flex flex-col gap-2 font-normal text-gray-500 text-sm">
            <div className="flex flex-row justify-start items-stretch gap-2">
                <img style={{ maxWidth: 120 }} className=" object-cover rounded-md" src={item.img} />
                <div className="grow flex flex-col items-start gap-2">
                    <div className="flex flex-col">
                        <span className=" font-medium text-gray-600">{item.name}</span>
                        <span className=" text-xs font-light">{item.description}</span>
                    </div>
                    <div className=" my-1 flex border rounded">
                        <button onClick={decrement} className=" px-2 cursor-pointer">
                            -
                        </button>
                        <span className=" border-l border-r px-2">{item.quantity}</span>
                        <button onClick={increment} className="px-2 cursor-pointer">
                            +
                        </button>
                    </div>
                    <div className="flex mt-1 gap-1 text-xs font-light">
                        <span className=" text-black font-medium">{getRupeesString(item.offerPrice * item.quantity)}</span>
                        {
                            item.offer > 0 && (
                                <>
                                    <span className="line-through">{getRupeesString(item.mrp * item.quantity)}</span>
                                    <span>({item.offer}%)</span>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
            <div onClick={removeItem} className="text-right border-t pt-2 text-xs font-medium text-cyan-500 cursor-pointer">
                Remove
            </div>
        </div>
    )
}, (prevProps, nextProps) => {
    if (prevProps.item.quantity === nextProps.item.quantity) {
        return true;
    }
    return false;
})

export default CartItem;
