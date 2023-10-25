import React from 'react'
import { useParams } from 'react-router-dom';
import useGetData from '../hooks/useGetData';
import { Loading } from './Loading'
import '../css/mediaDetails.css';

const MediaDetails = () => {
    const params = useParams();

    const { data: media, loading, error } = useGetData(`https://api.themoviedb.org/3/movie/${params.media_id}?api_key=14bdd69ce887376edfafb09f23f78fe9`);
    console.log(media);

    const date = new Date(media.release_date);

    const runtimeFormat = (mints) => `${mints / 60 ^ 0}h ` + mints % 60 + 'min'

    const genreFormat = (genres) => {
        let formattedString = "";
        if (genres) {
            for (let genre of genres) {
                formattedString += genre.name + ", "
            }

            return formattedString.slice(0, -2);
        }
        return "";
    }

    return (
        <Loading loading={loading} error={error}>
            <div className='position-relative'
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${media.backdrop_path})`,
                    minHeight: "100vh",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                }}>
                <div className="overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center py-5 clearfix">
                    <div className="container mx-auto d-flex flex-column flex-md-row justify-content-center align-items-center text-center text-md-start gap-3 gap-md-5">
                        <img className='rounded' src={'https://image.tmdb.org/t/p/w500/' + media.poster_path} alt="" width="300px" />
                        <div className='text-white d-flex flex-column gap-4'>
                            <h3 className='fw-bold'>{date.getFullYear()}</h3>
                            <h1 className='fw-bolder display-5'>{media.title}</h1>
                            <p>{media.overview}</p>
                            <div className='d-flex gap-5 fw-bold'>
                                <p>{runtimeFormat(media.runtime)}</p>
                                <p>{genreFormat(media?.genres)}</p>
                                <p>{date.toLocaleDateString('en-us', { month: "short", day: 'numeric', year: "numeric" })}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Loading>
    )
}

export default MediaDetails;