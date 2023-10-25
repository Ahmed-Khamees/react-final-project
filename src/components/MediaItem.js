import { Link } from 'react-router-dom'

const MediaItem = ({ media }) => {
    return (
        <>
            <div className="card border-0 ">
                <Link to={`/mediaDetails/${media.id}`}>
                    <img
                        style={{ height: "450px", objectFit: "cover" }}
                        src={
                            media.poster_path
                                ? `https://image.tmdb.org/t/p/w500${media.poster_path}`
                                : `https://tse1.mm.bing.net/th?id=OIP.VJHJCt5QEPXByQn7u_XsOAHaHa&pid=Api&P=0&h=220`
                        }
                        className="card-img-top"
                        alt="..."
                    />
                </Link>
                <div className="card-body text-center ">
                    <h5 className="card-title">{media.original_title || media.original_name}</h5>
                </div>
            </div>
        </>
    );
};

export default MediaItem;