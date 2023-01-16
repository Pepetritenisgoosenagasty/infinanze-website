import { Image } from '@mantine/core';
import { assetIndex } from 'public/assets';

export const AvatarComponent = () => {
  return (
    <div className='flex flex-wrap items-center justify-center space-x-6'>
     <div className='flex'>
     <Image
        sx={{}}
        src={assetIndex.Image.avatar1}
        alt="Random unsplash image"
      />
      <Image
        sx={{}}
        src={assetIndex.Image.avatar2}
        alt="Random unsplash image"
        className='-ml-6'
      />
      <Image
        sx={{}}
        src={assetIndex.Image.avatar3}
        alt="Random unsplash image"
        className='-ml-6'
      />
      <Image
        sx={{}}
        src={assetIndex.Image.avatar4}
        alt="Random unsplash image"
        className='-ml-6'
      />
     </div>

      <div>
        <h5 className='text-[#fff] text-[18px] font-[600]'>+12</h5>
        <h5 className='text-[#fff] text-[18px] font-[600]'>Feedback</h5>
      </div>
    </div>
  );
}