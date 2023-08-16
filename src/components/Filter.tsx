import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { Checkbox } from 'antd';
import { Slider } from 'antd';
import { Dispatch, SetStateAction } from 'react';


type FilterPropsType = {
    setCheckboxColorFilter: (checkboxState: string) => void,
    setPriceRange: React.Dispatch<React.SetStateAction<number[]>>,
    setFetchPriceRange: Dispatch<SetStateAction<boolean>>
}


export default function Filter({ setCheckboxColorFilter, setPriceRange, setFetchPriceRange }: FilterPropsType) {

    const onCheckboxChange = (e: CheckboxChangeEvent) => {

        if (e.target.checked && e.target.name) {
            setCheckboxColorFilter(e.target.name)
        } else {
            setCheckboxColorFilter('')
        }
    }

    const onSliderChange = (e: number[]) => {
        setPriceRange(e)
        setFetchPriceRange(true)
    }


    return (
        <div className="p-1 flex flex-col self-start  w-48 bg-lime-900">
            <span className="p-1">Filter by:</span>
            <div className="p-1">
                <div className="p-1">Color</div>
                <div>
                    <Checkbox onChange={onCheckboxChange} name='yellow' >Yellow</Checkbox>
                </div>
                <div>
                    <Checkbox onChange={onCheckboxChange} name='red'>Red</Checkbox>
                </div>
            </div>
            <div className='p-1'>
                <div>Price</div>
                <Slider onAfterChange={onSliderChange} range={{ draggableTrack: true }} defaultValue={[20, 50]} />
            </div>
        </div>
    )
}