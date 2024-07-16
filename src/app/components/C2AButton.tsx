import classNames from "classnames";

interface C2AButtonProps {
  children: React.ReactNode;
  className?: string;
}
//dev
export const C2AButton = ({ children, className }: C2AButtonProps) => {
  return (
    <button
      className={classNames(
        className,
        "rounded-[1rem] font-medium bg-[#E6B947] p-4 text-lg hover:bg-[#e1a72e]"
      )}
    >
      {children}
    </button>
  );
};
