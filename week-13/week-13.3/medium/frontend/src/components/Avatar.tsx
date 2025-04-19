export const Avatar = ({
  authorName,
  size,
  textSize = "sm",
}: {
  authorName: string;
  size: number;
  textSize: string;
}) => {
  return (
    <>
      <div
        className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
      >
        <span
          className={`font-medium text-${textSize} text-gray-600 dark:text-gray-300`}
        >
          {authorName.split(" ")[0].charAt(0) +
            authorName.split(" ")[1].charAt(0)}
        </span>
      </div>
    </>
  );
};
