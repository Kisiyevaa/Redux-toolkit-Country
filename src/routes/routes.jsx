import CountryData from "../components/home/CountryData";
import Home from "../home/Home";

export const routes=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/:id",
        element:<CountryData/>
    }
]