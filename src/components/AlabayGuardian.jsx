import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const AlabayGuardian = () => {

    const guardianImgs = [assets.alabay_guard1, assets.alabay_guard2, assets.alabay_guard3]

    return (
        <div
        style={{backgroundImage: `url(${assets.guard_gradient})`}}
        className='flex flex-col justify-evenly items-start bg-cover bg-center w-screen h-screen custom-scrollbar guardian p-8'>
            
            <div className='flex flex-col justify-center items-start ml-4'>
                <h1
                className='text-white text-8xl'
                style={{fontFamily: 'baron_kuffnerregular'}}
                >Alabay Guardian</h1>
                <span
                style={{fontFamily: 'Bebas Neue', color: '#A4A8FF'}} className='text-5xl'>SHEPHERD OF THE STEPPES</span>
            </div>


            <div className='h-full overflow-auto w-full'>

                <div className='flex flex-col justify-center items-start h-full gap-4'>

                    <p className='w-3/6 ml-4' style={{fontFamily: 'Montserrat', fontWeight: '700', color: 'white', fontSize: '1.5rem'}}>Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors.</p>
                    
                    <div className='flex justify-center items-center py-2 pr-10 pl-2 rounded-r-full rounded-l-full ml-4 my-4' style={{backgroundColor: '#A4A8FF'}}>
                        <img className={'w-8'} src={assets.play} alt="play-icon" />
                        <p className='ml-2' style={{fontFamily: 'Helvetica', fontSize: '1rem', fontWeight: '600'}}>PLAY</p>
                    </div>

                    <h1 className='text-white text-3xl font-bold ml-4' ><span style={{color: '#A4A8FF'}}>GAME</span> PREVIEW</h1>

                    <div className='flex justify-center items-center gap-2 p-4'>

                        {guardianImgs.map((img, index) => {
                            return (
                                <div key={index} className='h-60 flex border rounded-2xl mx-4'>
                                    <img className='object-cover rounded-2xl' src={img} />
                                </div>
                            )
                        })}
                        
                    </div>
                    
                </div>

                <div className='flex flex-col justify-center items-start h-full'>
                    <div className='flex flex-col justify-between items-start mt-[-16px]'>
                        <div
                        className='text-xs flex flex-col justify-center items-start ml-4 gap-8 w-4/6'
                        style={{fontFamily: 'Montserrat', fontWeight: '600', color: 'white', fontSize: '1rem'}}
                        >
                            <h1 style={{fontSize: '2rem', color: '#A4A8FF', fontWeight: '700'}}>FEATURES</h1>
                            <p className='leading-4'>Explore a variety of landscapes, including <span style={{color: '#A4A8FF'}}>mountains</span>, <span style={{color: '#A4A8FF'}}>forests</span>, <span style={{color: '#A4A8FF'}}>deserts</span>, and <span style={{color: '#A4A8FF'}}>ancient ruins</span>.</p>
                            <p className='leading-4'>Use the Alabay's <span style={{color: '#A4A8FF'}}>abilities</span> to solve <span style={{color: '#A4A8FF'}}>puzzles</span> that involve moving objects, activating mechanisms, or finding hidden clues.</p>

                            <p className='leading-4'>Discover relics that tell the story of the Alabay's ancestors, each piece contributing to a larger narrative about the breed's role in ancient history.</p>

                            <p className='leading-4'>Unlock new skills and abilities for the Alabay, enhancing its capacity to explore and solve puzzles.</p>

                            <div className='flex flex-col justify-center items-start gap-1'>
                                <p className='leading-4'>Challenge Modes:</p>
                                <p className='leading-4 ml-2'>- <span style={{color: '#A4A8FF'}}>Time Trials</span>: Compete in special timed challenges where the Alabai must navigate through complex mazes or complete puzzles within a time limit.</p> 
                                <p className='leading-4 ml-2'>- <span style={{color: '#A4A8FF'}}>Exploration Mastery</span>: A mode that rewards players for fully exploring every nook and cranny of the game's world, uncovering all secrets</p>
                            </div>
                        </div>

                        <div className='flex justify-start items-center ml-4 gap-6 mt-4'>
                            
                            <div className='flex justify-center items-center py-1 pr-8 pl-2 bg-white rounded-r-full rounded-l-full mt-4'>
                                <img className={'w-8'} src={assets.play} alt="play-icon" />
                                <p className='ml-2' style={{fontFamily: 'Helvetica', fontSize: '1.5rem', fontWeight: '700'}}>PLAY</p>
                            </div>

                            <NavLink to={'/'}>
                                <div className='flex justify-center items-center py-1 px-10 text-white rounded-l-full rounded-r-full mt-4 border'>
                                    <p style={{fontFamily: 'Helvetica', fontSize: '1.5rem', fontWeight: '700'}}>EXIT</p>
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AlabayGuardian