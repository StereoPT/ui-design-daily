import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Follow = () => {
  return (
    <button className='bg-yellow-500 py-1 px-6 text-white cursor-pointer'>
      <FontAwesomeIcon className="mr-1" icon={faUserPlus} />
      Follow
    </button>
  );
}

export default Follow;