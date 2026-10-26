import React from 'react'

const ClientComponentForContextReceiving = () => {
  const {setDetailsId} = useContext(CategoryAndDetailsContext);
  return (
    <div></div>
  )
}

export default ClientComponentForContextReceiving