import React, { useContext, useEffect, useMemo, useState } from 'react'
import { MainContext } from '../App'

const Entity = (
    { value }: { value: number }
    // { fn }: { fn: (cb: (value: number) => void) => void }
) => {
    const myapp = useContext(MainContext)

    const [health, setHealth] = useState<number>(0)
    // useMemo(() => fn((value: number) => setHealth(value)), [fn])

    useEffect(() => {
        // console.log('set health')
    }, [health])

    // useEffect(() => {
    //     console.log('fn updated')
    // }, [fn])

    return <div>Entity: {value}</div>
}

export default Entity
