import { RingLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className='
      h-[100vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
      <RingLoader color="#0891B2" />
    </div>
  )
}

export default Loader
