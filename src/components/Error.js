import { useRouteError } from "react-router";


const Error=()=>{

    const err=useRouteError();
    console.log(err)
return (
    <div className="Errorpage">
        <h1>Oops</h1>
        <h2> Something Went Wrong</h2>
        <h2>{err.status}:{err.statusText}</h2>
    </div>
)
}
export default Error;