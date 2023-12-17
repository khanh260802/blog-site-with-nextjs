import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'
const Category = ({params}) => { 
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>{params.category}</h1>

      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1> 
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
          <Button url='#' text='See more'/>
        </div>
        <div className={styles.imgContainer}>
          <Image alt='' src='https://images.pexels.com/photos/312839/pexels-photo-312839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1> 
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
          <Button url='#' text='See more'/>
        </div>
        <div className={styles.imgContainer}>
          <Image alt='' src='https://images.pexels.com/photos/19154047/pexels-photo-19154047/free-photo-of-anh-sang-d-ng-binh-minh-phong-c-nh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Creative Portfolio</h1> 
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet fugiat tenetur?</p>
          <Button url='#' text='See more'/>
        </div>
        <div className={styles.imgContainer}>
          <Image alt='' src='https://images.pexels.com/photos/9023983/pexels-photo-9023983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  )
}

export default Category
