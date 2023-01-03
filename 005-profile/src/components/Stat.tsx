import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type StatPropTypes = {
  icon: FontAwesomeIconProps['icon'],
  amount: number
}

const Stat = ({ icon, amount }: StatPropTypes) => {
  return (
    <div className='py-1 px-3'>
      <FontAwesomeIcon className="mr-1" icon={ icon } />
      <div className='font-bold'>{ amount }</div>
    </div>
  );
}

export default Stat;