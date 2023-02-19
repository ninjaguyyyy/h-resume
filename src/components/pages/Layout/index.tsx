import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow bg-transparent xs:px-0">
        <main className="xs:my-8 xs:px-4">{children}</main>
      </div>
    </div>
  );
}
