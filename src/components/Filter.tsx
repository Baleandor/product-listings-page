import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import { Checkbox } from 'antd';
import { Slider } from 'antd';


type FilterPropsType = {
    setCheckboxFilter: (checkboxState: string) => void,
    setPriceSliderFilter: (priceFilter: number[]) => void
}


export default function Filter({ setCheckboxFilter, setPriceSliderFilter }: FilterPropsType) {

    const onCheckboxChange = (e: CheckboxChangeEvent) => {

        if (e.target.checked && e.target.name) {
            setCheckboxFilter(e.target.name)
        } else {
            setCheckboxFilter('')
        }
    }

    const onSliderChange = (e: number[]) => {
        setPriceSliderFilter(e)
    }


    return (
        <div className="p-2 flex flex-col mr-auto w-48 bg-lime-900">
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