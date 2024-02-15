import { useEffect } from "react"


const Loading = (props) => {

    const { loading,setLoading } = props

    useEffect(() => {
        if (loading) {
            setTimeout(() => setLoading(false), 700)
        }
    }, [loading])

    return (
        <>
            {loading ?
                <>
                    <div className="loading-container">
                    </div>
                    <div className="loading-spinner">
                        <img style={{ width: '32px', height: '32px' }} src="./src/assets/loader.svg" alt=""></img>
                    </div>
                </> : <></>}
        </>
    )
}

export default Loading