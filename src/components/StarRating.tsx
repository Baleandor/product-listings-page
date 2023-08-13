import { Rating } from 'react-simple-star-rating'
type StarRatingProps = {
    rating: number
}

export default function StarRating({ rating }: StarRatingProps) {

    return (
        <Rating initialValue={rating} readonly size={27} SVGstyle={{ display: 'inline' }} />
    )
}