<template>
  <div class="navbar2">
      <header>
            <input id="menu-toggle-input" type="checkbox" />
    <label class="menu-toggle" for="menu-toggle-input">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </label>

    <nav class="menu">
        <ol>
        <li class="menu-item"><a href="#0">Home</a></li>
        <li class="menu-item"><a href="#0">About</a></li>
        <li class="menu-item">
            <a href="#0">Widgets</a>
            <ol class="sub-menu">
            <li class="menu-item"><a href="#0">      Big Widgets</a></li>
            <li class="menu-item"><a href="#0">Bigger Widgets</a></li>
            <li class="menu-item"><a href="#0">Huge Widgets</a></li>
            </ol>
        </li>
        <li class="menu-item">
            <a href="#0">Kabobs</a>
            <ol class="sub-menu">
            <li class="menu-item"><a href="#0">      Shishkabobs</a></li>
            <li class="menu-item"><a href="#0">BBQ kabobs</a></li>
            <li class="menu-item"><a href="#0">Summer kabobs</a></li>
            </ol>
        </li>
        <li class="menu-item"><a href="#0">Contact</a></li>
        </ol>
    </nav>
      </header>
  </div>
</template>

<script>
export default {
    name:'NavBar2'
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,700|Shrikhand');
    .navbar2 header {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        overflow: visible;
        padding: 1rem;
        z-index: 200;
    }
    .navbar2 {
        padding: 1rem;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        line-height: 1.4;
        background-size: cover;
        overflow: hidden;
        
    }
    @media (min-width: 450px) {
    .navbar2     {
        font-size: 1.25rem;
    }
    }
    .page-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    overflow: visible;
    padding: 1rem;
    z-index: 200;
    }
    .page-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    min-height: 100vh;
    text-align: center;
    color: white;
    }
            
         .page-content p{
             font-family:tahoma;
             background: white;
             color: #333;
             padding-top: 3px;
             padding-bottom: 3px;
             padding-left: 5px;
             padding-right: 5px;
             text-transform: uppercase;
             font-size: 14px;
             
         }
 
    .page-title {
    margin-bottom: 1.5rem;
    font-family: Arial;
    font-size: 2rem;
    line-height: 1.2;
    }
    @media (min-width: 450px) {
    .page-title {
        font-size: 3rem;
    }
    }
    nav {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    padding: 3rem 1rem 1rem;
    width: 100vw;
    min-height: 100vh;
    text-align: center;
    background-color: white;
    opacity: 0;
    transform: translateY(-100%);
    transition: opacity 0.45s 0.45s ease, transform 0s 1.2s;
    }
    .menu ol {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    width: 100%;
        margin-left: -30px;
        margin-top: -5px;
        
    }
    @media (min-width: 820px) {
    .menu ol {
        grid-template-columns: repeat(4, 1fr);
    }
    }
    .menu ol li {
    display: grid;
    grid-column: span 1;
    grid-gap: 1rem;
    overflow: hidden;
    }
    .menu ol a {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: 100%;
    height: 100%;
    font-size: 1.25rem;
    text-decoration: none;
    color: #2269bb;
        text-transform: uppercase;
    background-color: #2269bb;
    border-radius: 2px;
    }
    @media (min-width: 450px) {
    .menu ol a {
        font-size: 1.75rem;
    }
    }
    .menu > ol > li:nth-child(n + 3) {
    grid-column: span 2;
    }
    .menu .sub-menu {
    padding: 0;
    grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 500px) {
    .menu .sub-menu {
        grid-template-columns: repeat(3, 1fr);
    }
    }
    .menu .sub-menu li a {
    font-size: 0.85rem;
    color: #16457a;
    background-color: #16457a;
    }
    @media (min-width: 450px) {
    .menu .sub-menu li a {
        font-size: 1rem;
    }
    }
    .menu .sub-menu li:nth-child(3n) {
    grid-column: span 2;
    }
    @media (min-width: 500px) {
    .menu .sub-menu li:nth-child(3n) {
        grid-column: span 1;
    }
    }
    .menu-toggle {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 2px;
    position: relative;
    cursor: pointer;
    width: 28px;
    height: 22px;
    z-index: 100;
    }
    .menu-toggle:before {
    content: '×';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2.4rem;
    line-height: 0.4;
    color: #123965;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.3s ease;
    }
    .menu-toggle span {
    display: block;
    position: relative;
    width: 100%;
    height: 2px;
    background-color: #123965;
    border-radius: 2px;
    transition: transform 0.3s ease;
    transform-origin: 100% 100%;
    }
    .menu-toggle span:nth-child(1) {
    transition-delay: 0.35s;
    }
    .menu-toggle span:nth-child(2) {
    transition-delay: 0.4s;
    }
    .menu-toggle span:nth-child(3) {
    transition-delay: 0.45s;
    }
    .menu-toggle span:nth-child(4) {
    transition-delay: 0.5s;
    }
    .menu-toggle span:nth-child(5) {
    transition-delay: 0.55s;
    }
    .menu-toggle span:nth-child(6) {
    transition-delay: 0.6s;
    }
    .menu-toggle span:nth-child(1), .menu-toggle span:nth-child(2) {
    grid-column: span 3;
    }
    .menu-toggle span:nth-child(3), .menu-toggle span:nth-child(6) {
    grid-column: span 2;
    }
    .menu-toggle span:nth-child(4), .menu-toggle span:nth-child(5) {
    grid-column: span 4;
    }
    #menu-toggle-input {
    display: none;
    }
    #menu-toggle-input:checked ~ .menu-toggle span {
    transform: scaleX(0);
    }
    #menu-toggle-input:checked ~ .menu-toggle span:nth-child(1) {
    transition-delay: 0.05s;
    }
    #menu-toggle-input:checked ~ .menu-toggle span:nth-child(2) {
    transition-delay: 0.1s;
    }
    #menu-toggle-input:checked ~ .menu-toggle span:nth-child(3) {
    transition-delay: 0.15s;
    }
    #menu-toggle-input:checked ~ .menu-toggle span:nth-child(4) {
    transition-delay: 0.2s;
    }
    #menu-toggle-input:checked ~ .menu-toggle span:nth-child(5) {
    transition-delay: 0.25s;
    }
    #menu-toggle-input:checked ~ .menu-toggle span:nth-child(6) {
    transition-delay: 0.3s;
    }
    #menu-toggle-input:checked ~ .menu-toggle:before {
    opacity: 1;
    transition-delay: 0.75s;
    }
    #menu-toggle-input:checked ~ nav {
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0s;
    }
    #menu-toggle-input:checked ~ nav a {
    color: white;
    transform: translate(0, 0);
    }
    #menu-toggle-input:checked ~ nav > ol > li:nth-child(1) > a {
    transition: color 0.3s 0.825s, transform 0.3s 0.35s ease;
    }
    #menu-toggle-input:checked ~ nav .sub-menu > li:nth-child(1) > a {
    transition: color 0.3s 0.825s, transform 0.3s 0.5s ease;
    }
    #menu-toggle-input:checked ~ nav > ol > li:nth-child(2) > a {
    transition: color 0.3s 0.825s, transform 0.3s 0.4s ease;
    }
    #menu-toggle-input:checked ~ nav .sub-menu > li:nth-child(2) > a {
    transition: color 0.3s 0.825s, transform 0.3s 0.55s ease;
    }
    #menu-toggle-input:checked ~ nav > ol > li:nth-child(3) > a {
    transition: color 0.3s 0.825s, transform 0.3s 0.45s ease;
    }
    #menu-toggle-input:checked ~ nav .sub-menu > li:nth-child(3) > a {
    transition: color 0.3s 0.825s, transform 0.3s 0.6s ease;
    }
    #menu-toggle-input:checked ~ nav > ol > li:nth-child(4) > a {
    transition: color 0.3s 0.825s, transform 0.3s 0.5s ease;
    }
    #menu-toggle-input:checked ~ nav .sub-menu > li:nth-child(4) > a {
    transition: color 0.3s 0.825s, transform 0.3s 0.65s ease;
    }
    #menu-toggle-input:checked ~ nav > ol > li:nth-child(5) > a {
    transition: color 0.3s 0.825s, transform 0.3s 0.55s ease;
    }
    #menu-toggle-input:checked ~ nav .sub-menu > li:nth-child(5) > a {
    transition: color 0.3s 0.825s, transform 0.3s 0.7s ease;
    }
    .menu > ol > li:nth-child(1) > a {
    transform: translate(calc(-100% - 12px), 0);
    transition: color 0.3s, transform 0.3s 0.2s ease;
    }
    .sub-menu > li:nth-child(1) > a {
    transform: translate(0, calc(-100% - 12px));
    transition: color 0.3s, transform 0.3s 0.2s ease;
    }
    .menu > ol > li:nth-child(2) > a {
    transform: translate(calc(-100% - 12px), 0);
    transition: color 0.3s, transform 0.3s 0.25s ease;
    }
    .sub-menu > li:nth-child(2) > a {
    transform: translate(0, calc(-100% - 12px));
    transition: color 0.3s, transform 0.3s 0.25s ease;
    }
    .menu > ol > li:nth-child(3) > a {
    transform: translate(calc(-100% - 12px), 0);
    transition: color 0.3s, transform 0.3s 0.3s ease;
    }
    .sub-menu > li:nth-child(3) > a {
    transform: translate(0, calc(-100% - 12px));
    transition: color 0.3s, transform 0.3s 0.3s ease;
    }
    .menu > ol > li:nth-child(4) > a {
    transform: translate(calc(-100% - 12px), 0);
    transition: color 0.3s, transform 0.3s 0.35s ease;
    }
    .sub-menu > li:nth-child(4) > a {
    transform: translate(0, calc(-100% - 12px));
    transition: color 0.3s, transform 0.3s 0.35s ease;
    }
    .menu > ol > li:nth-child(5) > a {
    transform: translate(calc(-100% - 12px), 0);
    transition: color 0.3s, transform 0.3s 0.4s ease;
    }
    .sub-menu > li:nth-child(5) > a {
    transform: translate(0, calc(-100% - 12px));
    transition: color 0.3s, transform 0.3s 0.4s ease;
    }

     
</style>