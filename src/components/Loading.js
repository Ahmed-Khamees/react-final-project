import React from 'react'

export const Loading = ({ children, loading, error }) => {

    if (loading) {
        return <h1 className='mx-auto text-center'>Loading Data...</h1>;
    }
    if (error) {
        return <h1 className='mx-auto text-center text-danger'>{error}</h1>;
    }
    return (
        <>{children}</>
    )
}
