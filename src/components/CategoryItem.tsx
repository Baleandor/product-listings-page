import { useState } from "react"
import StarRating from "./StarRating"


type CategoryItemPropsType = {
    categoryItem: {
        id: string,
        color: string,
        price: number,
        image: string,
        description: string,
        name: string,
        rating: number
    }

}


export default function CategoryItem({ categoryItem }: CategoryItemPropsType) {

    const [addToCartSuccess, setAddToCartSuccess] = useState(false)

    const addToCartAlert = () => {
        setAddToCartSuccess(true)
    }

    const hideAddToCartAlert = () => {
        setAddToCartSuccess(false)
    }

    return (
        <div className="border rounded-xl border-green-400 p-1 mb-2 flex items-center w-[700px]" key={categoryItem.id}>
            <div className="w-60 h-52">
                <div className="p-1"><img className="w-56 h-48 rounded-lg" src={categoryItem.image}></img></div>
            </div>
            <div className="p-2">
                <div className="p-1"><span>Name: {categoryItem.name}</span></div>
                <div className="p-1"><p>Description: {categoryItem.description}</p></div>
                <div className="p-1"><span>Price: ${categoryItem.price}</span></div>
                <div className="p-1">
                    <StarRating rating={categoryItem.rating} />
                </div>
                <div className="p-1">
                    <button className="p-1 border rounded-xl border-red-600" onClick={addToCartAlert}>Add to Cart</button>
                    {
                        addToCartSuccess &&
                        <div className="p-1 flex flex-col absolute bg-lime-900 translate-x-3 rounded-xl">
                            <div className="text-red-600 self-end cursor-pointer" onClick={hideAddToCartAlert}>X</div>
                            <div>Item successfully added to the cart!</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}