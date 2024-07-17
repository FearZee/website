import classNames from "classnames";

interface SpaceProps {
  h: number;
}

export const Space = ({ h }: SpaceProps) => {
  const classString = `h-${h} sm:h-${h / 2}`;
  return <div className={"sm:h-24 h-12"}></div>;
};
