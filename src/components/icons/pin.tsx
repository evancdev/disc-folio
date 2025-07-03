import React from 'react'

const Pin = ({className}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-5 0 24 24"
    style={{ transform: 'rotate(45deg)' }}
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.999 8.919V5.829C1.835 5.417 1 4.306 1 3c0-1.657 1.343-3 3-3h6c1.657 0 3 1.343 3 3 0 1.306-.835 2.417-2 2.829v3.09c.17.176.32.375.444.593l1.714 3c.822 1.439.322 3.272-1.116 4.095a3.5 3.5 0 01-1.447.405H8v6a1 1 0 11-2 0v-6H3.446c-1.656 0-3-1.343-3-3 .001-.523.138-1.036.397-1.49l1.714-3z"
    />
  </svg>
)

export default Pin
