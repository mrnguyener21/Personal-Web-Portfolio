import React from 'react'
// import rowOne from './rowOne'

import style from './Skill.module.scss'

import bootStrap from '../../../image/bootStrap.png'
import css from '../../../image/css.png'
import git from '../../../image/git.png'
import gitHub from '../../../image/gitHub.png'
import html from '../../../image/html.png'
import javaScript from '../../../image/javaScript.png'
import materialUi from '../../../image/materialUi.png'
import npm from '../../../image/npm.png'
import react from '../../../image/react.png'
import sass from '../../../image/sass.png'

const Skill = (image, description) => {

    const rowOne = [
        {image:html , description:'HTML 5'},
        {image:css , description:'CSS'},
        {image:javaScript , description:'JAVASCRIPT(ES5/3S6)'},
        {image:bootStrap , description:'BOOTSTRAP'},
        {image:sass , description:'SASS'},
    ]

    const rowTwo= [
        {image:react , description:'REACT'},
        {image:materialUi , description:'MATERIAL-UI'},
        {image:npm , description:'NPM'},
        {image:git , description:'GIT'},
        {image:gitHub , description:'GITHUB'},
    ]

    return (
        <div className={style.container}>
            <h3 className={style.title}> TECHNICAL SKILLS/TOOLS</h3>
            <div className={style.rowOne}>
                <div className={style.skill}>
                    <img className={style.image} src={rowOne.map(({image})=> image)}/>
                    <h3 className={style.description}>{rowOne.map(({description})=>description)}</h3> 
                </div>  
            </div>
            <div className={style.rowOne}>
                <div className={style.skill}>
                    <img className={style.image} src={rowTwo.map(({image})=> image)}/>
                    <h3 className={style.description}>{rowTwo.map(({description})=>description)}</h3> 
                </div>  
            </div>
        </div>
    )
}

export default Skill;
