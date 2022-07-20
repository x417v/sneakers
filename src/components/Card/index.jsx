import React from 'react';
import styles from './Card.module.scss'

const Card = (props) => {

    const [isAdded, setIsAdded] = React.useState(false)

    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }

    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked"  onClick={props.onFavorite}/>
            </div>
            <img width={133} height={112} src={props.image} alt=""/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} грн.</b>
                </div>
                    <img 
                    className={styles.plus} 
                    src={
                        isAdded 
                        ? "/img/btn-checked.svg"
                        : "/img/btn-plus.svg" 
                    } 
                    alt="Plus" 
                    onClick={onClickPlus}/>
            </div>
        </div>
    );
};


export default Card;