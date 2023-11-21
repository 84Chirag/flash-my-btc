import React from 'react'

const Alert = (props) => {
    return (
        <>
            {/* <div className={`alert alert-${props.type} alert-dismissible fade show`} role="alert" style={{ position: 'absolute', top: '115px', right: '15px' }}> */}
            <div className={`alert alert-${props.type} text-center `} role="alert" style={{ position: 'absolute', top: '115px', right: '15px' }}>
                <strong>{props.msg}</strong>
                {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>
        </>
    )
}

export default Alert