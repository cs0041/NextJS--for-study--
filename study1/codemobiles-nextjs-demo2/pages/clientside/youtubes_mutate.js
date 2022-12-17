import React from "react";
import useSWR from "swr";
import axios from "axios";

export default function Youtubes() {
  //   const fetcher = (key) => fetch(key).then((res) => res.json());
  const fetcher = (...args) => axios(...args).then((res) => res.data);

  const url = "/api/delay/youtubes";
  const { data, error, mutate } = useSWR(url, fetcher);

  return (
    <div>
      <h1>Client-Side Youtubes Mutate</h1>
      <button
        onClick={() => {
          // request to update server
          mutate({
            ...data,
            youtubes: [...data.youtubes, { title: "xxxx", subtitle: "yyy" }],
          });
        }}
      >
        Mutate
      </button>
      <ul>
        {data &&
          data.youtubes.map((movie, index) => {
            return (
              <li key={`${index}`}>
                <img
                  src={movie.youtube_image}
                  height={20}
                  style={{ marginRight: 16 }}
                />
                {`${index + 1}. ${movie.title} : ${movie.subtitle}`}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
