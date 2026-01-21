export interface IconProps {
  className?: string;
  size?: 18 | 14 | 12;
}

export const OpenIcon = ({ className, size = 18 }: IconProps) => {
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
        opacity="0.2"
        d="M13.75 2.5H5.25C3.733 2.5 2.5 3.733 2.5 5.25V13.75C2.5 15.267 3.733 16.5 5.25 16.5H13.75C15.267 16.5 16.5 15.267 16.5 13.75V5.25C16.5 3.733 15.267 2.5 13.75 2.5Z"
        fill="currentColor"
      />
      <path
        d="M13 10.25C13 10.664 12.664 11 12.25 11C11.836 11 11.5 10.664 11.5 10.25V8.56104L7.27999 12.781C7.13399 12.927 6.94199 13.001 6.74999 13.001C6.55799 13.001 6.36599 12.928 6.21999 12.781C5.92699 12.488 5.92699 12.013 6.21999 11.72L10.44 7.5H8.751C8.337 7.5 8.001 7.164 8.001 6.75C8.001 6.336 8.337 6 8.751 6H12.251C12.665 6 13.001 6.336 13.001 6.75V10.25H13Z"
        fill="currentColor"
      />
    </svg>
  );
};
