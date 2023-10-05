export const IconLink = (props: {
  url: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="hover:text-blue-600">
      <a
        href={props.url}
        className="flex items-center space-x-2 rounded-md text-non-photo-blue hover:underline"
      >
        {props.icon}
        <span>{props.children}</span>
      </a>
    </div>
  );
};
