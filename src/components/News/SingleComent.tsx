import React from "react";
interface Props {
  name: string;
  body: string;
}
export const SingleComent = ({ name, body }: Props) => {
  return (
    <div className="flex w-[1340px] my-2 mx-6 p-4 rounded-xl flex-col items-start justify-center border-2 border-solid border-[#E5E7EA] shadow-md">
      <p className="text-lg font-semibold">@{name}</p>
      <p>{body}</p>
    </div>
  );
};
