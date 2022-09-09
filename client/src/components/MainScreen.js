import React from 'react'

const MainScreen = ({ children, title }) => {
    return (
        <div className="page">
            {title && (
                <>
                    <h1 className="heading">{title}</h1>
                    <hr />
                </>
            )}
            {children}
        </div>
    )
}

export default MainScreen;
