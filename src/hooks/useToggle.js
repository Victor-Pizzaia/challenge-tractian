import {useState, useCallback} from 'react';

export function useToggle(value1 = true, value2 = false) {
    const [state, setState] = useState(value1);

    const toggle = useCallback(() => {
        setState(prev => (
            prev === value1 ? value2 : value1
        ))
    })

    return [state, toggle];
}
