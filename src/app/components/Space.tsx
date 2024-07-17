interface SpaceProps {
  h: number;
}

export const Space = ({ h }: SpaceProps) => {
  return <div style={{ height: `${h}rem` }}></div>;
};
