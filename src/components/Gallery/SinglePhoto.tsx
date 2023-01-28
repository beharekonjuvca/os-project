import React from "react";
interface Props {
  thumbnail: string;
  title: string;
}
export const SinglePhoto = (props: Props) => {
  return (
    <div className="flex w-[1340px] my-2 mx-6 p-4 rounded-xl flex-col items-start justify-center border-2 border-solid border-[#E5E7EA] shadow-md">
      <img className="w-[100px]" src={props.thumbnail} alt="no pic" />
      <p>{props.title}</p>
    </div>
  );
};
