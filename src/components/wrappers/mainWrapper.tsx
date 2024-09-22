import React, { DOMElement, useEffect, useState } from 'react'

const MainWrapper = ({
    children,
    foo,
}: {
    children: React.ReactElement
    foo: (dispatch: React.Dispatch<React.SetStateAction<number>>) => void
}) => {
    const [state, setState] = useState(0)

    useEffect(() => {
        foo(setState)
    }, [])

    return <div>{children}</div>
}

export default MainWrapper
