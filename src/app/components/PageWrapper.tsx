import { PropsWithChildren } from "react";

export const PageWrapper = (props: PropsWithChildren) => {
  return (
    <main className="min-h-screen p-4 md:p-16 lg:p-24 ">
      <div className="max-w-5xl w-full font-mono text-sm">{props.children}</div>
    </main>
  );
};
