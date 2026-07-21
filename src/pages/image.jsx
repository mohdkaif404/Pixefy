import { ArrowLeft, ArrowRightIcon, MoveLeft } from "lucide-react";
import { ButtonTwo } from "../components/buttons/ButtonTwo";
import hills from '../assets/pexels-elias-obernosterer-2519830-10510523.jpg';
import { MasouryImage } from "../components/masoury/masouryimage";


import { Filter, Search,SlidersHorizontal } from 'lucide-react';

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
import { Link } from "react-router";

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

export function Image(){
    return <>
    <div className="bg-blue- my-30 px-3 md:px-20 h-screen">
        <ButtonTwo text="Back" isActive={true}><ArrowLeft className="w-5 aspect-square" strokeWidth={1.2}/></ButtonTwo>
        <div className="image-wrapper flex gap-10 my-6 flex-col md:flex-row">
            <div className="image w-full md:w-[60%] rounded-3xl overflow-hidden"><img src={hills} alt="" className="w-full aspect-square object-cover"/></div>
            <div className="image-info">
                <div className="bg-gray-300 text-[10px] font-semibold text-gray-500 w-fit rounded-full p-1 px-2">STREET</div>
                <div className="image-name py-2 text-4xl">Diago Marin</div>
                <div className="image-description text-gray-500">A handpicked frame from the Pixyfy collection — free to view, save and share</div>
                <div className="button-wrapper"></div>
                <div className="grid grid-cols-2 grid-rows-2 p-2 shadow-(--shadow-thin-1) bg-white rounded-2xl my-5">
                    <div className="p-1"><div className="text-gray-500 text-sm">Dimensions</div><div className="">600 x 500</div></div>
                    <div className="p-1"><div className="text-gray-500 text-sm">Category</div><div className="">Street</div></div>
                    <div className="p-1"><div className="text-gray-500 text-sm">Author</div><div className="">Diago Marin</div></div>
                    <div className="p-1"><div className="text-gray-500 text-sm">License</div><div className="">Pixefy free</div></div>
                </div>
            </div>
        </div>
        <div className="flex justify-between items-center"><h3 className="heading text-2xl md:text-4xl"><span className="text-orange-700">More</span> Like this</h3><Link to={"/"}><span className="text-gray-600 px-1 text-sm">Explore all</span><ArrowRightIcon className="inline text-gray-500 h-3 w-3" strokeWidth={1.5}/></Link></div>
        <MasouryImage images={images} className={"px-0 mx-0"}></MasouryImage>
    </div>
    </>
}