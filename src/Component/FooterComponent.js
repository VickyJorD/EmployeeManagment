import React from 'react'

const FooterComponent = () => {
  return (
    <div>
      <footer className='footer'>
        <span>
            All Reserved &copy; {new Date().getFullYear()}
        </span>


      </footer>
    </div>
  )
}

export default FooterComponent
