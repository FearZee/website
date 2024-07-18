import classNames from "classnames";
import { C2AButton } from "./C2AButton";

interface CallToActionSectionProps {
  text: string;
  ct2Text: string;
}

export const CallToActionSection = ({
  text,
  ct2Text,
}: CallToActionSectionProps) => {
  return (
    <section
      className={classNames(
        "section",
        "flex flex-col align-middle justify-center items-center gap-12"
      )}
    >
      <h2 className={classNames("h2", "text-center")}>{text}</h2>
      <C2AButton className="w-[16rem]" href="/contact">
        {ct2Text}
      </C2AButton>
    </section>
  );
};
