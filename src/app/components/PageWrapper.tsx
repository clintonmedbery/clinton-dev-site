import { PropsWithChildren } from "react";

export const PageWrapper = (props: PropsWithChildren) => {
  return (
    <main className="min-h-screen p-4 md:p-16 lg:p-24 ">
      <div className="max-w-5xl w-full font-raleway text-lg">
        {props.children}
      </div>
    </main>
  );
};
