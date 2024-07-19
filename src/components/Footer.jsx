import React from 'react';

import './Footer.css'

const Footer = () => {
    return (  
        <div className="footer">        
            <div id="imsola">
                <img src="./img/imsola.png" alt="mascotas" />
            </div>
            <div class="infomrfooter">
                    <div id="redes">                    
                        <a href="https://wa.me/5491123589435" target="_blank">
                            <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo-whatsapp-512.png" alt="" />
                        </a>                      
                        <a href="https://www.facebook.com/" target="_blank">
                            <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png" alt="Facebook" className='icono'/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank">
                            <img src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-512.png" alt="Instagram" className='icono'/>
                        </a>                    
                    </div>
                    <p id="p1_footer">@2024 Patas Solidarias - Todos los derechos Reservados</p>
                    <p id="p1_footer">c19-41-n-java-react</p>                
                </div>
        </div>
        );
    };
                    

    export default Footer;