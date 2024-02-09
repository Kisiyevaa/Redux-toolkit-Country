import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataCountry } from '../../redux/countrySlice';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';

function CountryData() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { countryData } = useSelector((store) => store.card);
    const navigate=useNavigate()

console.log(countryData);
    useEffect(() => {
        dispatch(getDataCountry(id));
    }, [dispatch, id]);


    if (!countryData || countryData.length === 0) {
      return <Loading/>;
  }

    const firstCountry = countryData[0];

    return (
        <div className='h-[100vh]'>
            <div className='md:flex py-10 text-lg lg:text-3xl lg:leading-[50px]'>
                <div className='md:w-[600px]'>
                <img src={firstCountry.flags?.png} alt="flags" className='w-[90%] m-auto'/>
                </div>
               <div className='px-7 py-10 md:py-0'>
                <h1><span className='font-bold'>Name: </span>{firstCountry.name.common}</h1>
                <p> <span  className='font-bold'>Capital: </span>{firstCountry.capital}</p>
                <p><span  className='font-bold'>Region: </span>{firstCountry.region}</p>
                <p><span  className='font-bold'>Area: </span>{firstCountry.area}</p>
                <p><span  className='font-bold'>Population: </span>{firstCountry.population}</p>
                <p> <span  className='font-bold'>Subregion: </span>{firstCountry.subregion}</p>
                <button className='bg-red-500 px-10 mt-5' onClick={() => navigate(-1)}>Back</button>
               </div>
            </div>
        </div>
    );
}

export default CountryData;
