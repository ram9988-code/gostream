import React from 'react'
import { BrowseContainer } from '../Container/browse';
import {useContent} from '../hook';
import selectionFilter from'../utils/selection-map'

export default function Browse(){
   const {series} =useContent('series');
   const {films} =useContent('films');
   
   const slides=selectionFilter({series,films});
//    console.log(slides)
    return (
        <BrowseContainer slides={slides}/>
    )
}