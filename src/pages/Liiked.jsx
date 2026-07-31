import hills from '../assets/pexels-elias-obernosterer-2519830-10510523.jpg';
import marcoPozzi from '../assets/pexels-marco-pozzi-2156102230-34038189.jpg';
// import matreding1 from '../assets/pexels-matreding-34111858 (1).jpg';
import matreding2 from '../assets/pexels-matreding-34111858.jpg';
import nati from '../assets/pexels-nati-87264186-28483662.jpg';
import prolificPeople from '../assets/pexels-prolificpeople-33711190.jpg';
import sebastian from '../assets/pexels-sebastiaan9977-1097456.jpg';
import therato from '../assets/pexels-therato-1933239.jpg';
import tobiAndChris from '../assets/pexels-tobiandchris-27837644.jpg';
import vince from '../assets/pexels-vince-28962828.jpg';
import { useState } from "react";
import { MasouryImage } from '../components/masoury/masouryimage';
import { Heart } from 'lucide-react';
import { ButtonTwo } from '../components/buttons/ButtonTwo';
import { ImageGrid } from '../components/masoury/ImageGrid';
import { NoLikedCard } from '../components/Cards/NoLikedCard';
import { useSelector } from 'react-redux';
const images = [
  {
    id: 1,
    name: 'Hills',
    image: hills,
  },
  {
    id: 2,
    name: 'Marco Pozzi',
    image: marcoPozzi,
  },
  {
    id: 4,
    name: 'Matreding 2',
    image: matreding2,
  },
  {
    id: 5,
    name: 'Nati',
    image: nati,
  },
  {
    id: 6,
    name: 'Prolific People',
    image: prolificPeople,
  },
  {
    id: 7,
    name: 'Sebastian',
    image: sebastian,
  },
  {
    id: 8,
    name: 'Therato',
    image: therato,
  },
  {
    id: 9,
    name: 'Tobi and Chris',
    image: tobiAndChris,
  },
  {
    id: 10,
    name: 'Vince',
    image: vince,
  },
];


export function Liked(){
    const likedCount=useSelector((state)=>{ return state.liked.likedCount; })
    console.log(likedCount); 
    return <>
    <div className="mt-25 md:mt-30 px-3 md:px-10 ">
        <h6 className="text-orange-600 font-semibold">Your collection</h6>
        <h3 className="text-4xl liked py-1">Liked Images</h3>
        <h6 className="text-gray-600">{likedCount} Liked Images</h6>
        <div className="flex justify-center items-center ">
    </div>
    {likedCount>0?<ImageGrid images={[]}/>:<NoLikedCard/>}
    </div>
    
    </>
}