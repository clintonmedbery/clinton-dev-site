type GradientCardProps = {
  innerColor?: string;
  children: React.ReactNode | undefined;
};

export const GradientCard = ({
  innerColor = "bg-ox-blue",
  children
}: GradientCardProps) => {
  return (
    <div className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
      <div className={`${innerColor} p-4`}>{children}</div>
    </div>
  );
};
