import React, { Children, useState } from 'react'

export const ElementWrapper = ({
    children,
    isMarked,
}: {
    isMarked: boolean
    children: React.ReactElement
}) => {
    // const [marked, setMarked] = useState(isMarked)

    return (
        <div
            //     onMouseOver={() => setMarked(true)}
            //     onMouseLeave={() => setMarked(false)}
            className={isMarked ? 'marked' : ''}
        >
            {children}
        </div>
    )
}
