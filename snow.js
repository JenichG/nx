!function(){"use strict";let e={amount:300,minSize:2,maxSize:5,minSpeed:3,maxSpeed:7,color:"#FFF",menuId:"my-bratki-script"};function t(){let a=document.getElementById(e.menuId);if(!a){setTimeout(t,1e3);return}let n=document.createElement("style");n.innerHTML=`
            .script-snowflake {
                position: absolute;
                top: -10px;
                background: ${e.color};
                border-radius: 50%;
                pointer-events: none; /* Важно! Чтобы клики проходили сквозь снег */
                z-index: 1999; /* Поверх фона, но под всплывающими окнами */
                box-shadow: 0 0 5px rgba(255, 255, 255, 0.6); /* Легкое свечение */
                opacity: 0.8;
            }
            @keyframes fall-sway {
                0% {
                    transform: translateY(-10px) translateX(0px);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                100% {
                    transform: translateY(600px) translateX(var(--sway-end)); /* Падаем ниже высоты меню */
                    opacity: 0;
                }
            }
        `,document.head.appendChild(n),setInterval(function t(){if(a.clientHeight<50)return;let n=document.createElement("div");n.classList.add("script-snowflake");let i=Math.random()*(e.maxSize-e.minSize)+e.minSize,r=Math.random()*(e.maxSpeed-e.minSpeed)+e.minSpeed;n.style.width=`${i}px`,n.style.height=`${i}px`,n.style.left=`${100*Math.random()}%`,n.style.setProperty("--sway-end",(Math.random()-.5)*50+"px"),n.style.animation=`fall-sway ${r}s linear forwards`,a.appendChild(n),setTimeout(()=>{n.remove()},1e3*r)},e.amount)}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()}();
