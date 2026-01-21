export interface IconProps {
  className?: string;
  size?: 18 | 14 | 12;
}

export const FlexibleIcon = ({ className, size = 18 }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 18 18"
      className={className}
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 9.75C1 8.78379 1.78379 8 2.75 8H9C9.41421 8 9.75 8.33579 9.75 8.75V13.25C9.75 13.6642 9.41421 14 9 14H2.75C1.78379 14 1 13.2162 1 12.25V9.75Z"
        fill="#00E6E6"
        fillOpacity="0.4"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 9.75C17 8.78379 16.2162 8 15.25 8H9C8.58579 8 8.25 8.33579 8.25 8.75V13.25C8.25 13.6642 8.58579 14 9 14H15.25C16.2162 14 17 13.2162 17 12.25V9.75Z"
        fill="#00E6E6"
        fillOpacity="0.2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 1C7.28379 1 6.5 1.78379 6.5 2.75V4.25C6.5 4.43167 6.56594 4.60716 6.68557 4.74388L8.25 6.5318V16.25C8.25 16.6642 8.58579 17 9 17C9.41421 17 9.75 16.6642 9.75 16.25V6.5318L11.3144 4.74388C11.4341 4.60716 11.5 4.43167 11.5 4.25V2.75C11.5 1.78379 10.7162 1 9.75 1H8.25Z"
        fill="#00E6E6"
      />
    </svg>
  );
};
