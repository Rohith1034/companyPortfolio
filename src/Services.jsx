import React from "react";
import Card from "./Card";
function Services() {
    return <section id="services">
        <div className="card-container">
            <Card img="https://www.pngitem.com/pimgs/m/11-115522_website-design-and-development-melbourne-website-design-icon.png" details="Web Design" content="Web design is the art and science of creating visually appealing and user-friendly websites. It encompasses a wide range of skills and disciplines, including graphic design, user interface design, user experience design, and front-end ."/>
            <Card img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCumFlEky2TwoOPy3T3Hp59U_WFpXhdw23Fw&usqp=CAU" details="App design" content="App design is the process of creating intuitive and engaging user interfaces for mobile applications. It involves careful consideration of layout, navigation, visual elements, and user interactions to provide a seamless and enjoyable user experience. "/>
            <Card img="https://img.freepik.com/premium-vector/ui-ux-design-concept-with-people-scene-flat-cartoon-design-woman-illustrator-working-with-layout-interface-drawing-creates-elements-buttons-vector-illustration-visual-story-web_9209-9553.jpg" details="Graphic design" content="Graphic design is the art of visually communicating ideas and messages through the use of typography, imagery, and layout. It plays a crucial role in creating visually appealing marketing materials, branding, and digital content"/>
        </div>
    </section>;
}

export default Services;