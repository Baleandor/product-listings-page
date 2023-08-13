import StarRating from "./StarRating"

type CategoryItemType = {
    id: string,
    color: string,
    price: number,
    image: string,
    description: string,
    name: string,
    rating: number
}





export default function CategoryItem({ categoryItem }: CategoryItemType) {
    console.log(categoryItem)
    return (
        <div className="border rounded-xl border-green-400 p-1 mb-2 flex items-center w-[700px]" key={categoryItem.id}>
            <div>
                <div className="p-1"><img className="w-60 h-52 rounded-lg" src={categoryItem.image}></img></div>
            </div>
            <div className="p-2">
                <div className="p-1"><span>Name: {categoryItem.name}</span></div>
                <div className="p-1"><p>Description: {categoryItem.description}</p></div>
                <div className="p-1"><span>Price: ${categoryItem.price}</span></div>
                <div className="p-1">
                    <StarRating rating={categoryItem.rating} />
                </div>
                <div className="p-1">
                    <button className="p-1 border rounded-xl border-red-600">Add to Cart</button>
                </div>
            </div>

        </div>
    )
}