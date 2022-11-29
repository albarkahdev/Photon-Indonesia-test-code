import { CSSProperties, FC } from "react";
import MovieItem, { MovieItemProps } from "../atoms/MovieItem";

const movieListStyles: CSSProperties = {
  backgroundColor: "#ececec",
  height: "100%",
  paddingTop: "1em",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
};

type MovieListProps = {
  movieItemList: Omit<MovieItemProps, "onItemClicked">[];
  selectedMovieId: string;
  onSelectTitle: Function;
};

const MovieList: FC<MovieListProps> = ({
  movieItemList,
  selectedMovieId,
  onSelectTitle,
}) => {
  return (
    <div style={movieListStyles}>
      {movieItemList.map(({ id, title }) => {
        return (
          <MovieItem
            key={id}
            id={id}
            title={title}
            selected={id === selectedMovieId}
            onItemClicked={onSelectTitle}
          />
        );
      })}
    </div>
  );
};

export default MovieList;
