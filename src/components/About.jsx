import React from 'react';
import Header from './shared/Header';

const About = () => {
    const Discription = (props) => {
        return ( 
            <div id="discription">
                <p>
                <h2>{props.title}: </h2>
                {props.explain}</p>
            </div>
         );
    }

    return (
        <div id="AboutPage">
            <Header title="About"/>
            <p> This website is designed to allow a user to easily and accessibly navigate through a list of hockey players. The list would have implemented filtering which will allow the user to find their desired hockey player. Another option for all users is sorting, this allows the user to see which player has the most goals easily with just one click of a button. The different categories within the table would be as followed, names, games palyed, goals, assists, and finally total points </p>
            <Discription title="Names" explain="This will show you the name of the hockey player."/>
            <Discription title="Games Played" explain="This will show you how many games the hockey player has played."/>
            <Discription title="Gaols" explain="This will show the user how many times the hockey player scored."/>
            <Discription title="Assists" explain="This will show you how many times the player passed to a teammate when the teammate scored."/>
            <Discription title="Points" explain="This will show the user how many goals and assists they have combined."/>
        </div>
    );
}
 
export default About;