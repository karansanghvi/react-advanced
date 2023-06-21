import React from 'react'

function MemoComp({name}) {
    console.log('rendering the component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
