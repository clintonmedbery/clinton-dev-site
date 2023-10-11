type GradientBorderProps = {
  innerColor?: string;
  children: React.ReactNode | undefined;
  padding?: string;
  innerPadding?: string;
};

export const GradientBorder = ({
  innerColor = "bg-ox-blue",
  padding = "p-1",
  innerPadding = "p-4",
  children
}: GradientBorderProps) => {
  return (
    <div
      className={`rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 ${padding}`}
    >
      <div className={`${innerColor} ${innerPadding}`}>{children}</div>
    </div>
  );
};
