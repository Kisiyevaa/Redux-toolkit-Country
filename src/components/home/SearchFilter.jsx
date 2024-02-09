import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getCountry } from '../../redux/countrySlice'
import ReactPaginate from 'react-paginate';
import "../../assets/style.scss"
import CountryItem from "./CountryItem"
import Loading from '../Loading/Loading';

function SearchFilter() {
    const arr = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"]
    const [input,setInput]=useState("")
    const[filterData,setFilterData]=useState([])
    const [itemOffset, setItemOffset] = useState(0);
    const dispatch=useDispatch()
    const {countryItem,countryItemStatus}=useSelector((store)=>store.card)
    const {mode}=useSelector((store)=>store.theme)
    
    useEffect(() => {
        dispatch(getCountry());
      }, [dispatch]);
    
      useEffect(() => {
        countryItem.slice().sort((a, b) => a.name.common.localeCompare(b.name.common));
        setFilterData(countryItem);
      }, [countryItem]);

    const filteredData = (e)=>{
     const selectedRegion=e.target.value.toLowerCase()
     if(selectedRegion==="all"){
        setFilterData(countryItem)
     }else{
        const data=countryItem.filter(item=>item.region.toLowerCase()===selectedRegion)
        .filter(item=>item.name.common.toLowerCase().includes(input.toLowerCase()))
        setFilterData(data)
     }
    }
    const itemsPerPage=12
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = filterData.slice().sort((a, b) => a.name.common.localeCompare(b.name.common)).slice().slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filterData.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % filterData.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };

  return (
    <div>
      <div className='px-10 md:px-0 containers m-auto'>
      <div className={`flex justify-between py-5 ${mode ? "sark" :false}`}>
            <div>
             {/* <input className={`border-2 px-1 border-gray-500`} type="text" value={input} placeholder='Search...' 
             onChange={(e)=>setInput(e.target.value)}/> */}
            </div>
            <div>
                <select  onChange={filteredData}>
               {
                arr.map((item)=>{
                    return <option key={item.cca2}>{item}</option>
                })
               }
                </select>
            </div>
        </div>
      </div>
      
        <div className={`flex flex-wrap justify-between gap-y-10 mt-10`}>
      {
      countryItemStatus ?  
      filterData
        && currentItems
        .filter(item => item.name.common.toLowerCase().startsWith(input.toLowerCase()))
        .map((item) => <CountryItem key={item.id} item={item}  />)
      :
      <Loading/>
      
      }
    </div>
    <ReactPaginate
    className='paginate'
     breakLabel="..."
     nextLabel=">"
     onPageChange={handlePageClick}
     pageRangeDisplayed={5}
     pageCount={pageCount}
     previousLabel="<"
     renderOnZeroPageCount={null}
   />
   
    </div>
  )
}

export default SearchFilter;
