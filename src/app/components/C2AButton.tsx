import classNames from "classnames";
import Link from "next/link";

interface C2AButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  onClick?: () => void;
}

export const C2AButton = ({
  children,
  href,
  className,
  ...props
}: C2AButtonProps) => {
  return (
    <a
      href={href || ""}
      className={classNames(
        className,
        "rounded-[1rem] font-medium bg-[#E6B947] p-3 text-lg hover:bg-[#e1a72e] block text-center"
      )}
      {...props}
    >
      {children}
    </a>
  );
};
