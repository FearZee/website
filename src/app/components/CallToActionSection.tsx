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
    <section className="flex flex-col align-middle justify-center items-center gap-12 mt-20">
      <h2 className="text-5xl text-center font-bold leading-normal">{text}</h2>
      <C2AButton className="w-[16rem]">{ct2Text}</C2AButton>
    </section>
  );
};
