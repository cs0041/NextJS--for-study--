import React from "react";

export default function Movies({ movies, randomData, title }) {
  return (
    <div>
      <h1>{title}</h1>
      <span>{randomData}</span>
      <ul>
        {movies.map((movie, index) => {
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

// This function gets called at run time
export async function getServerSideProps(context) {
  const { pid, title } = context.query;

  // songs, foods, superhero
  const url = `http://codemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=${pid}`;
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      movies: data.youtubes,
      randomData: Math.random().toString(),
      title,
    },
  };
}
