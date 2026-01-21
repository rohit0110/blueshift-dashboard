export interface IconProps {
  className?: string;
  size?: 18 | 14 | 12;
}

export const ChevronRightIcon = ({ className, size = 18 }: IconProps) => {
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
        d="M6.50001 16C6.69201 16 6.88401 15.927 7.03001 15.78L13.28 9.52999C13.573 9.23699 13.573 8.76199 13.28 8.46899L7.03001 2.21999C6.73701 1.92699 6.26201 1.92699 5.96901 2.21999C5.67601 2.51299 5.67601 2.98799 5.96901 3.28099L11.689 9.00099L5.96901 14.721C5.67601 15.014 5.67601 15.489 5.96901 15.782C6.11501 15.928 6.30701 16.002 6.49901 16.002L6.50001 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
