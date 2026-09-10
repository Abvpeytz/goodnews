type LogoProps = {
  src?: string;
  alt?: string;
};

export default function Logo({ src, alt = "Logo" }: LogoProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width={25}
        height={25}
        className='h-6 w-6 object-contain'
      />
    );
  }

  return (
    <svg
      width='25'
      height='25'
      viewBox='0 0 25 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-label={alt}
    >
      <mask
        id='mask0_71_17'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='25'
        height='25'
      >
        <path
          d='M12.5 0.5C19.1274 0.5 24.5 5.87258 24.5 12.5C24.5 19.1274 19.1274 24.5 12.5 24.5C5.87258 24.5 0.5 19.1274 0.5 12.5C0.5 5.87258 5.87258 0.5 12.5 0.5Z'
          fill='white'
          stroke='black'
        />
      </mask>

      <g mask='url(#mask0_71_17)'>
        <path
          d='M0 7.5C0 7.5 8.66939 5.29945 12 5.5C15.5781 5.71545 16.4792 10.3863 20 11C23.5208 11.6137 29.5 10.5 29.5 10.5L25 25.5H0V7.5Z'
          fill='black'
        />

        <path
          d='M-3.64414 12.3559C-3.64414 12.3559 3.90973 9.69519 8.5 10.5C12.5021 11.2017 14.0336 14.1187 18 15C21.8057 15.8456 27.7913 15.7933 27.7913 15.7933'
          stroke='white'
        />

        <path
          d='M-5.94235 15.9219C-5.94235 15.9219 2.94377 14.0333 8 15C11.7827 15.7232 13.6981 18.3862 17.5 19C20.9281 19.5535 25.4931 19.3592 25.4931 19.3592'
          stroke='white'
        />

        <path
          d='M-5.09745 19.8316C-5.09745 19.8316 2.02574 18.0258 6.5 19C9.15056 19.5771 11.8568 21.3902 14.5 22C19.5001 23.1536 26.3379 23.269 26.3379 23.269'
          stroke='white'
        />

        <circle cx='12.5' cy='12.5' r='12' stroke='black' />
      </g>
    </svg>
  );
}
