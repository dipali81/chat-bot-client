const ChartIcon = ({ className, ...props }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      <path
        d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.375 23.125C20.75 23.125 21.875 22 21.875 20.625V9.375C21.875 8 20.75 6.875 19.375 6.875C18 6.875 16.875 8 16.875 9.375V20.625C16.875 22 17.9875 23.125 19.375 23.125Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.625 23.125C12 23.125 13.125 22 13.125 20.625V16.25C13.125 14.875 12 13.75 10.625 13.75C9.25 13.75 8.125 14.875 8.125 16.25V20.625C8.125 22 9.2375 23.125 10.625 23.125Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChartIcon;
