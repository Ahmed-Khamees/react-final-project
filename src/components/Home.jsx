import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { useState } from "react";
import useGetData from "../hooks/useGetData";
import MediaItem from "./MediaItem";
import { Loading } from "./Loading";
import { Link } from "react-router-dom";

const Home = () => {

  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const options = [
    { value: "tv", label: "TV Shows" },
    { value: "movie", label: "Movies" },
    { value: "person", label: "Celebrity" },
  ];

  const handleChange = (media_type) => {
    setSelected(media_type ? media_type : null);
  };

  const inputChanged = (event) => {
    setSearchQuery(event.target.value.trim());
  };

  let { data, loading, error } = useGetData(
    "https://api.themoviedb.org/3/trending/all/day?api_key=14bdd69ce887376edfafb09f23f78fe9"
  );

  return (
    <>
      <div className="container py-5 mx-auto row">
        <div className="col-sm-12 col-md-8 col-lg-10 d-flex">
          <button className=" border-0 bg-transparent me-3 fs-4">
            <Link to={searchQuery ? `/search/${searchQuery}` : ""}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </button>
          <input
            placeholder="Find movies TV Shows documentary and more..."
            type="text"
            className="form-control border-0 outline-0"
            onChange={(event) => inputChanged(event)}
            value={searchQuery}
          />
        </div>
        <div className="col-12 col-md-4 col-lg-2">
          <Select
            options={options}
            value={selected}
            onChange={handleChange}
            className="col-12"
            isClearable={true}
          />
        </div>
      </div>
      <div className="container my-5">
        <h2 className="fw-bold fs-4 pb-5">Latest Movies & TV Shows</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
          <Loading loading={loading} error={error}>
            {data &&
              data.results?.map((media) => {
                if (selected) {
                  if (selected.value == media.media_type) {
                    return (
                      <div className="col" key={media.id}>
                        <MediaItem media={media} />
                      </div>
                    );
                  }
                } else {
                  return (
                    <div className="col" key={media.id}>
                      <MediaItem media={media} />
                    </div>
                  );
                }
              })}
          </Loading>
        </div>
      </div>
    </>
  );
};

export default Home;
