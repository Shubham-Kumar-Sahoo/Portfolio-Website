import {AiFillHome} from 'react-icons/ai'
import {BsPersonFill} from 'react-icons/bs'
import {MdHomeRepairService} from 'react-icons/md'
import {AiFillAppstore} from 'react-icons/ai'
import {AiFillMessage} from 'react-icons/ai'
import { GrAchievement } from "react-icons/gr";


const data = [
    { id: 1, link: '#header', icon: <AiFillHome /> },
    { id: 2, link: '#about', icon: <BsPersonFill /> },
    { id: 3, link: '#experience', icon: <MdHomeRepairService /> },
    { id: 4, link: '#portfolio', icon: <AiFillAppstore /> },
    { id: 5, link: '#achievements', icon: <GrAchievement /> },
    { id: 6, link: '#contact', icon: <AiFillMessage /> }
];

export default data;
  