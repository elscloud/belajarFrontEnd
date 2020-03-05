import React from 'react'

const Hello = () => {
      //Using JSX
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello Vishwas</h1>
    //     </div>
    // )
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h3',null,'Hello Vishwash')
    )

}

export default Hello