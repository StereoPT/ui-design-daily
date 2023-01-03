import { faImage, faHeart, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import PictureGallery from './PictureGallery';
import AboutMe from './AboutMe';
import Skill from './Skill';
import Stat from './Stat';
import Follow from './Follow';
import Info from './Info';

export type PictureInfo = {
  path: string,
  rows: string,
  cols: string
}

const pictures: PictureInfo[] = [
  { path: '/images/motoBike.jpg',   rows: 'row-span-6', cols: 'col-span-4' },
  { path: '/images/bug.jpg',        rows: 'row-span-4', cols: 'col-span-5' },
  { path: '/images/womanFace.jpg',  rows: 'row-span-5', cols: 'col-span-3' },
  { path: '/images/womanHair.jpg',  rows: 'row-span-5', cols: 'col-span-3' },
  { path: '/images/coffe.jpg',      rows: 'row-span-8', cols: 'col-span-2' },
  { path: '/images/manClouds.jpg',  rows: 'row-span-7', cols: 'col-span-3' },
  { path: '/images/flowers.jpg',     rows: 'row-span-6', cols: 'col-span-4' },
  { path: '/images/child.jpg',      rows: 'row-span-3', cols: 'col-span-3' }
];

const Profile = () => {
  return (
    <div className="flex flex-col px-8 pb-6 bg-white drop-shadow-md">
      <div className='flex justify-between mb-4'>
        <div className='mr-8 mt-[-1rem]'>
          <img src="/images/profile.jpg" className="w-[200px] h-[250px] object-cover" alt="Profile Picture of a Woman" />
        </div>
        <div className='flex flex-col flex-1'>
          <div className='flex justify-evenly border-b-2'>
            <Info name='Joan Doe' hobby='Photography' location='Timisoara, RO' />
            <div className='flex justify-evenly border-l-2 border-r-2 items-center text-center px-2'>
              <Stat amount={127} icon={ faImage }/>
              <Stat amount={354} icon={ faHeart }/>
              <Stat amount={470} icon={ faCircleUser }/>
            </div>
            <div className='flex justify-center items-center px-8'>
              <Follow />
            </div>
          </div>
          <div className='flex justify-between mt-4'>
            <AboutMe>
              Dolor sit amet, utamur effciantur ius cu, ludus eligendi adipisci
              ex usu, per ne putent regione philosophia. Saperet civibus
              quaerendum usu ex, ut alii habeo utroque qui.
              <br />
              <br />
              Et inermis quaestio elaboraret pro. Habeo corrumpit assueverit
              per at. Justo quando ad has, solet definitiones ad mel.
            </AboutMe>
            <div>
              <div className='font-bold ml-4'>Skills</div>
              <div>
                <Skill name="Equipment" value={80} />
                <Skill name="Editing" value={60} />
                <Skill name="Marketing" value={40} />
                <Skill name="Retouching" value={95} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PictureGallery pictures={pictures} />
    </div>
  );
}

export default Profile;