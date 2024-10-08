import React from 'react';
import Feed from'../components/Feed';

function PageFeed(props) {
    return (
        <div>
            <Feed img="https://www.lifeboxset.com/wp-content/uploads/2021/04/Spider-Man-3-Fan-Art-Old-Peter-Parker-1024x539-1-768x404.jpeg" 
            
            title ="Spiderman se jubila" 
            color= "red"
            detail="Spiderman se jubila, por su edad ya no puede perseguir a los villanos" alt=""> </Feed>

            <Feed img="https://www.lifeboxset.com/wp-content/uploads/2021/04/Spider-Man-3-Fan-Art-Old-Peter-Parker-1024x539-1-768x404.jpeg" 
            
            title ="Spiderman se jubila" 
            color= "blue"
            detail="Spiderman esta por concretar su retiro" alt=""> </Feed>

            <Feed img="https://www.lifeboxset.com/wp-content/uploads/2021/04/Spider-Man-3-Fan-Art-Old-Peter-Parker-1024x539-1-768x404.jpeg" 
            
            title ="Spiderman se jubila" 
            color= "green"
            detail="Spiderman finalmente se jubilo y se retira al caribe" alt=""> </Feed>


        </div>
    );
}


export default PageFeed;