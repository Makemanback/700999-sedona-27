let button=document.querySelector(".popup-open");let popup=document.querySelector(".container-popup");let date_In=popup.querySelector("[name=dateIn]");let date_Out=popup.querySelector("[name=dateOut]");let number_Adults=popup.querySelector("[name=numberAdults]");let number_Children=popup.querySelector("[name=numberChildren]");let form=popup.querySelector("form");let isStorageSupport=!0;let storage="";try{storage=localStorage.getItem("numberAdults");storage=localStorage.getItem("numberChildren")}catch(err){isStorageSupport=!1}
popup.classList.add("not-visible");button.addEventListener("click",function(evt){evt.preventDefault();popup.classList.toggle("not-visible");if(storage){number_Adults.value=storage;number_Children.value=storage}
date_In.focus()});form.addEventListener("submit",function(evt){if(!date_In.value||!date_Out.value||!number_Adults.value||!number_Children.value){evt.preventDefault();popup.classList.remove("form-error");popup.offsetWidth=popup.offsetWidth;popup.classList.add("form-error")}else{if(isStorageSupport){localStorage.setItem("numberAdults",number_Adults.value);localStorage.setItem("numberChildren",number_Children.value)}}});button.addEventListener("click",function(){if(popup.classList.contains("not-visible")){popup.classList.remove("form-error")}});let minusAdult=document.querySelector(".minus-button-adults");let plusAdult=document.querySelector(".plus-button-adults");let minusChildren=document.querySelector(".minus-button-children");let plusChildren=document.querySelector(".plus-button-children");let adult=document.querySelector(".adults-value");let children=document.querySelector(".children-value");minusAdult.addEventListener("click",function(evt){evt.preventDefault();if(adult.value>1){adult.value-=1}});plusAdult.addEventListener("click",function(evt){evt.preventDefault();if(adult.value<99){adult.value=Number(adult.value)+1}});minusChildren.addEventListener("click",function(evt){evt.preventDefault();if(children.value>0){children.value-=1}});plusChildren.addEventListener("click",function(evt){evt.preventDefault();if(children.value<99){children.value=Number(children.value)+1}})