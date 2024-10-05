import React from 'react';
import './services.css'
import { GiCctvCamera } from "react-icons/gi";
import { IoLogoWindows } from "react-icons/io";
import { FaComputer, FaWebAwesome } from "react-icons/fa6";
import { BsCodeSlash } from "react-icons/bs";
import gold from "./imges/gold.png"
const Services =() => {
    return (
        <>
        <div className="services">
             <section>
 <h1>Services</h1>
 <div class="row">
   <div class="column">
     <div class="card">
       <div class="icon-wrapper">
         <i class="fas fa-hammer"></i>
       </div>
       <h3>Service Heading</h3>
       <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
         consequatur necessitatibus eaque.
       </p>
     </div>
   </div>
   <div class="column">
     <div class="card">
       <div class="icon-wrapper">
         <i class="fas fa-brush"></i>
       </div>
       <h3>Service Heading</h3>
       <p>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
         consequatur necessitatibus eaque.
       </p>
     </div>
   </div>
   <div class="column">
     <div class="card">
       <div class="icon-wrapper">
         <BsCodeSlash />
       </div>
       <h3>Создать веб-приложение</h3>
       <p>
       Разработка современных, удобных веб-программ, их создание и техническая поддержка.
       </p>
     </div>
   </div>
   <div class="column">
     <div class="card">
        <img src={gold} alt="" className='icon-pro'/>
       <div class="icon-wrapper">
         <FaComputer />
       </div>
       <h3>Сборка компьютера</h3>
       <p>
       поставка и обслуживание надежных, качественных и доступных современных компьютеров и техники различного назначения.
       </p>
     </div>
   </div>
   <div class="column">
     <div class="card">
     <img src={gold} alt="" className='icon-pro'/>
       <div class="icon-wrapper">
            <IoLogoWindows />
       </div>
       <h3>Установка системы</h3>
       <p>
       Установка и обслуживание системы, установка аппаратного программного обеспечения и альтернативная эксплуатация
       </p>
     </div>
   </div>
   <div class="column">
     <div class="card">
     <img src={gold} alt="" className='icon-pro'/>
       <div class="icon-wrapper">
         <GiCctvCamera />
       </div>
       <h3>Установка камера наблюдения</h3>
       <p>
       Быстрая и качественная установка и обслуживание камер наблюдения.
       </p>
     </div>
   </div>
 </div>
</section>
        </div>
        </>
    );
};

export default Services;