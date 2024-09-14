import React, { useEffect, useMemo, useState } from 'react'

const Entity = ({ fn }: { fn: (cb: (value: number) => void) => void }) => {
    const [health, setHealth] = useState<number>(0)
    useMemo(() => fn((value: number) => setHealth(value)), [fn])

    useEffect(() => {
        // console.log('set health')
    }, [health])

    useEffect(() => {
        console.log('fn updated')
    }, [fn])

    return <div>Entity: {health}</div>
}

export default Entity
