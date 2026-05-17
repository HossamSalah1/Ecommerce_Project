import React, { useEffect } from 'react'
import Style from './Categories.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from '../../Redux/Counter/CounterSlice'
import { getBrands } from '../../Redux/brand/BrandSlice'
import { Triangle } from 'react-loader-spinner'

function Categories() {

    const { counter } = useSelector((state) => state.counter)
    const { loading, isError, brandData } = useSelector((state) => state.brand)
    console.log("ffffffffffffff",brandData);


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getBrands())

    }, [])
    return <>
        {/* <h1>Categories</h1>
        <h2>counter {counter}</h2>
        <button className='btn btn-info' onClick={() => dispatch(increase())}> Increase</button> */}

        {loading ? <div className="d-flex justify-content-center align-items-center vh-100">
            <Triangle
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""

            />
        </div> : 
            <div className="row">
                {brandData.map((ele) =>
                    <div key={ele.id} className="col-md-2">
                        <div className="product px-2 py-3 cursor-pointer">
                                <img src={ele.image} className='w-100' alt="" />
                                <h3 className='text-main'>{ele.name}</h3>
                                
                        </div>

                    </div>
                )}
            </div>

        }


        
    </>
}

export default Categories
