import { PictureInfo } from "./Profile";

type PictureGalleryPropTypes = {
  pictures: PictureInfo[]
}

const PictureGallery = ({ pictures }: PictureGalleryPropTypes) => {
  return (
    <div className=''>
      <div className='font-bold'>Pictures</div>
      <div className='grid grid-cols-12 grid-rows-12 gap-2 text-center max-w-[900px] max-h-[460px]'>
        {
          pictures.map((picture, index) => {
            return (
              <div key={index} className={`${picture.cols} ${picture.rows}`}>
                <img className='w-full h-full object-cover' src={picture.path} alt="" />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default PictureGallery;