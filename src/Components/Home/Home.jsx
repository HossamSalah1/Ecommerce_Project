import React, { useContext } from 'react'
import Style from './Home.module.css'
import { CounterContext } from '../../Context/counterContext'
import FeatureProducts from '../FeatureProducts/FeatureProducts'
import CatogerySlider from '../CatogerySlider/CatogerySlider'
import MainSlider from '../MainSlider/MainSlider'
import UseNetwork from '../../Hooks/useNetwork'

function Home() {
    let x = UseNetwork()
    let { ChangeCount } = useContext(CounterContext)
    return <>
        {x}
        <MainSlider></MainSlider>
        <CatogerySlider></CatogerySlider>
        <FeatureProducts></FeatureProducts>
        <button className='btn btn-danger' onClick={() => ChangeCount()}>changeCount</button>
    </>
}

export default Home
