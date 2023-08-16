import { categoryNameAndDescription } from "../utils/categoryNameAndDescription";

type CategoryNameAndDescriptionType = {
    categoryName: string
}


export default function CategoryNameAndDescription({ categoryName }: CategoryNameAndDescriptionType) {

    
    return (
        <div className="p-1">
            <div className="p-1 flex items-center justify-center">
                <span>
                    {categoryNameAndDescription[categoryName]?.name}
                </span>
            </div>
            <div className="p-1 flex items-center text-center justify-center">
                <span>
                    {categoryNameAndDescription[categoryName]?.description}
                </span>
            </div>
        </div>)
}