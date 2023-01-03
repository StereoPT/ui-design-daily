import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

type InfoPropTypes = {
  name: string,
  hobby: string,
  location: string
}

const Info = ({ name, hobby, location }: InfoPropTypes) => {
  return (
    <div className='pt-2 pb-1 flex-1'>
      <div className="text-lg font-bold italic">{ name }</div>
      <div className='ml-2 text-xs text-[#8a8a8a]'>- { hobby }</div>
      <div className='mt-1 text-xs text-[#8a8a8a]'>
        <FontAwesomeIcon className="mr-1" icon={faLocationDot} />
        { location }
      </div>
    </div>
  );
}

export default Info;