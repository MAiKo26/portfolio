interface Props {
  className: string;
  width: number;
  height: number;
}
export const LinkedinIcon = ({className, width, height}: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-linkedin"
  >
    <path
      d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      stroke="currentColor"
      className={className}
    />
    <rect
      width="4"
      height="12"
      x="2"
      y="9"
      stroke="currentColor"
      className={className}
    />
    <circle cx="4" cy="4" r="2" stroke="currentColor" className={className} />
  </svg>
);

export default LinkedinIcon;
