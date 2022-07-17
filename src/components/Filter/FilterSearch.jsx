import React from 'react'
import { useState } from 'react'
import { PageList } from './PageList';

export const FilterSearch = ({
    item
}) => {

    const [stateText, setStateText] = useState("");

    const onChangeText = (event) => {
        return setStateText(event.target.value);
    }

    return (
        <div className="filter-list">
            <input 
                type="text" 
                placeholder="find something.."
                value={stateText}
                onChange={onChangeText}
            />
            <PageList
                item={item}
                search={stateText}
            />
        </div>
    )
}
