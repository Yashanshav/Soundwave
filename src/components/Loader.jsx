import {loader} from '../assets';

const Loader = ({title}) => (
  <div className="w-full flex flex-col justify-center items-center">

    <img src={loader} alt="loader" className='h-32 w-32 object-contain'></img>
    <h1 className='font-bold text-2xl mt-2 text-white'>{title || "Loading..."}</h1>

  </div>
);

export default Loader;
