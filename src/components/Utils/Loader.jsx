import { CircleLoader } from "react-spinners";

const Loader = () => {
  return (
    <>
      <CircleLoader 
        color="#36d7b7" 
        cssOverride={{ margin: 'auto'}} 
        loading 
        size={150} 
        speedMultiplier={1} />
    </>
  )
}

export default Loader