type SkillPropTypes = {
  name: string,
  value: number
}

const Skill = ({ name, value }: SkillPropTypes) => {
  return (
    <div className='flex text-sm items-center mb-1'>
      <div className='flex-1 text-right mr-2'>{ name }</div>
      <input className="accent-black h-1" type="range" value={value} readOnly />
    </div>
  );
}

export default Skill;