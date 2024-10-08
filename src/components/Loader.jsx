import { RotatingLines } from "react-loader-spinner";

function Loader() {
    return (
        <RotatingLines
            
            width="50"
            strokeColor="#1976D2"
            strokeWidth="5"
            animationDuration="0.75"
            
            visible={true}
        />
    )
}

export default Loader;