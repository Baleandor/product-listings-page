import { Rate } from 'antd'


type StarRatingProps = {
    rating: number
}

export default function StarRating({ rating }: StarRatingProps) {

    return (
        <Rate defaultValue={rating} disabled/>
    )
}