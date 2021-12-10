type Props = {
  children: React.ReactNode;
};

export function Button({ children }: Props) {
  return <button className="button">{children}</button>;
}
