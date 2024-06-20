import { FC } from "react";

interface IndicatorProps {
  type: "checkbox" | "char";
  status: boolean;
}

export const Indicator: FC<IndicatorProps> = ({ type, status }) => {
  return (
    <>
      {type === "checkbox" ? (
        <input type="checkbox" checked={status} readOnly />
      ) : (
        <span>{status ? "v  " : ">  "}</span>
      )}
    </>
  );
};
