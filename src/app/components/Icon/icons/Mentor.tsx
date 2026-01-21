export interface IconProps {
  className?: string;
  size?: 18 | 14 | 12;
}

export const MentorIcon = ({ className, size = 18 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      className={className}
      fill="none"
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.47918 13.3595C3.04625 11.1877 5.45082 9.99767 8.0103 10C10.5648 10.0023 13.1177 11.012 14.6723 13.3595C14.8248 13.5897 14.8384 13.8852 14.7077 14.1285C14.577 14.3718 14.3232 14.5236 14.047 14.5236L2.10449 14.5236C1.82831 14.5236 1.57447 14.3718 1.44378 14.1285C1.31309 13.8852 1.32669 13.5897 1.47918 13.3595Z"
          fillOpacity="0.4"
        ></path>
        <path
          d="M8 8.5C10.071 8.5 11.75 6.8199 11.75 4.75C11.75 2.6801 10.071 1 8 1C5.929 1 4.25 2.6801 4.25 4.75C4.25 6.8199 5.929 8.5 8 8.5Z"
          fillOpacity="0.4"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.075 11C10.5898 11 10.1223 11.2926 9.92867 11.7543L8.26274 15.5H5.75C5.33579 15.5 5 15.8358 5 16.25C5 16.6642 5.33579 17 5.75 17H8.75H14.925C15.429 17 15.8711 16.6954 16.0675 16.2539L17.6226 12.7622C17.9877 11.9425 17.393 11 16.481 11H11.075Z"
        ></path>
      </g>
    </svg>
  );
};
