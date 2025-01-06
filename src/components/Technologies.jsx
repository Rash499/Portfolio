import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiArchlinux } from "react-icons/si";
import { TbBrandCSharp } from 'react-icons/tb'
import { SiMongodb } from 'react-icons/si'
import { DiCss3 } from 'react-icons/di'
import { FaJava, FaNodeJs, FaPhp, FaPython, } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si'
import { SiMysql } from "react-icons/si";
import { SiGnubash, SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { SiCplusplus, SiTailwindcss, SiExpress, SiScala } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
    initial: {y:-10},
    animate: {
        y: [10,-10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <motion.div
    whileInView={{opacity:1, y:0}}
    initial={{opacity: 0, y:-100}}
    transition={{duaration: 1.5}}
     className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl'>Technologies</h2>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity: 0, x:-100}}
        transition={{duaration: 1.5}}
        className='flex flex-wrap item-center justify-center gap-4'>
            <motion.div
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl text-red-700'/>
            </motion.div>

            <motion.div
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGitAlt className='text-7xl text-orange-700'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiDotnet className='text-7xl'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPhp className='text-7xl text-indigo-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaPython className='text-7xl text-blue-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandCSharp className='text-7xl text-purple-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiCss3 className='text-7xl text-blue-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className='text-7xl text-blue-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiGnubash className='text-7xl'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiJavascript className='text-7xl text-yellow-300'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FcLinux className='text-7xl text-cyan-400'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(1.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCplusplus className='text-7xl text-blue-600'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiExpress className='text-7xl text-gray-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiTailwindcss className='text-7xl text-teal-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiScala className='text-7xl text-red-500'/>
            </motion.div>

            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiArchlinux className='text-7xl text-blue-500'/>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Technologies