import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {
    return (
        <div className='home-wrapper'>
            <h1 style={{color: 'white', fontSize: '30px'}}>Select, Build, and Price Your Tesla</h1>
            <div>
            <h2 style={{color: 'white'}}>Model S</h2>
            <Link style={{color: 'white'}}to='/car/0'><img style={{width: '400px'}} src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/tesla-model-s-1563301327.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*' alt='Model S'/></Link>
            </div>
            <div>
            <h2 style={{color: 'white'}}>Model 3</h2>
            <Link style={{color: 'white'}}to='/car/1'><img style={{width: '400px'}} src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTACJGsKV9nRRMIJmBwDP8gD3ZJeRuaY_DhNxKlAT-pDdRMNxr0' alt='Model 3'/></Link>
            </div>
            <div>
            <h2 style={{color: 'white'}}>Model X</h2>
            <Link style={{color: 'white'}}to='/car/2'><img style={{width: '400px'}} src='https://cdn.shopify.com/s/files/1/1724/5219/articles/SIlver-model-x-p90d-mx114-diamond-black-22-inch-forged-wheels-1_2000x.jpg?v=1502145223' alt='Model x'/></Link>
            </div>
            <div>
            <h2 style={{color: 'white'}}>Model Y</h2>
            <Link style={{color: 'white'}}to='/car/3'><img style={{width: '400px'}} src='https://media.ed.edmunds-media.com/tesla/model-y/2020/oem/2020_tesla_model-y_4dr-suv_performance_fq_oem_1_815.jpg' alt='Model Y'/></Link>
            </div>
        </div>
    )
}