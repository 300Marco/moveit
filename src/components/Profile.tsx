import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const {level} =useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/35637320?s=400&u=671778b48213ca7364c6e5e848c4e7fd954effb2&v=4" alt="Marco Santana"/>
            <div>
                <strong>Marco Santana</strong>
                <p>
                    <img src="icons/level.svg" alt="level"></img>
                    Level {level}
                </p>
            </div>
        </div>
    );
}