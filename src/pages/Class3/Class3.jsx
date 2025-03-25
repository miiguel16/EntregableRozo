import React, { useState } from "react";
import { ItemTitle } from "../../components/ItemTitles/ItemTitle";

export const Class3 = () => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-3 bg-gray-500 p-4">
      <ItemTitle className="text-2xl font-bold text-black my-4" content={`Likes: ${likes}`} />
      <ItemTitle className="text-2xl font-bold text-black my-4" content={`Dislikes: ${dislikes}`} />

      {["Like 👍", "Dislike 👎"].map((text, index) => (
        <button
          key={text}
          className="p-4 bg-black text-white rounded-lg"
          onClick={() => (index === 0 ? setLikes((prev) => prev + 1) : setDislikes((prev) => prev + 1))}
        >
          {text}
        </button>
      ))}
    </div>
  );
};
