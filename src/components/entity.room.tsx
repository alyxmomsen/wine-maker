import React, { useEffect, useMemo, useState } from 'react'

const Room = ({ fn }: { fn: (cb: (value: string) => void) => void }) => {
    const [title, setTitle] = useState<string>('')
    useMemo(() => fn((value: string) => setTitle(value)), [fn])
    useEffect(() => {
        console.log('set health')
    }, [title])

    return <div>Room: {title}</div>
}

export default Room
