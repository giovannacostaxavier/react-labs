import { useState } from "react";

const useContador =()=>{
    const [views, setViews] = useState(1)

    return {views,setViews}
}

export default useContador