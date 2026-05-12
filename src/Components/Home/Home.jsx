import React, { useContext } from 'react'
import Style from './Home.module.css'
import { CounterContext } from '../../Context/counterContext'
import FeatureProducts from '../FeatureProducts/FeatureProducts'
import CatogerySlider from '../CatogerySlider/CatogerySlider'
import MainSlider from '../MainSlider/MainSlider'

function Home() {
    let { ChangeCount } = useContext(CounterContext)
    return <>
        <MainSlider></MainSlider>
        <CatogerySlider></CatogerySlider>
        <FeatureProducts></FeatureProducts>

        <button className='btn btn-danger' onClick={() => ChangeCount()}>changeCount</button>
    </>
}

export default Home
