import htmlcss from "../assets/img/portfolio/logos/html-css.png";
import htmlimg from "../assets/img/portfolio/html-css.jpg";
import makette from "../assets/img/portfolio/figma-tta.jpg";
import figma from "../assets/img/portfolio/logos/Figma.jpeg";
import api from "../assets/img/portfolio/apiexpress.jpg";
import tta from "../assets/img/portfolio/artisans.jpg";
import CreationApi from "../assets/img/portfolio/klaxon.jpg";
import Wpress from "../assets/img/portfolio/wpress.jpg";
import ReactExpress from "../assets/img/portfolio/logos/react-boots-express.png";
import phpsql from "../assets/img/portfolio/logos/php-sql.png";
import wpressLogo from "../assets/img/portfolio/logos/WordPress-Emblem.png";
import mongoexpress from "../assets/img/portfolio/logos/mongoexpress.png";

const job = [
    
    {
        name: "Exemple HTML-CSS",
        image: htmlimg,
        description: "Tableaux, flexbox, grid, \nformulaire, etc.",
        tool: "Site réalisé avec HTML et CSS",
        tool_img: htmlcss,
        alt: "site web avec des blocs de couleurs",
        linkbutton: "https://mabdev.alwaysdata.net/html/",
        linkEnabled: "link-dark text-decoration-none",
        linkgithub: "https://github.com/boulayM/htmlcss.git",
        device: "seulement sur PC"
    },

    {
        name: "Maquettage",
        image: makette,
        description: "Prototype du site Trouve ton Artisan",
        tool: "Realisé avec Figma",
        tool_img: figma,
        alt: "schema maquette",
        linkbutton: "https://www.figma.com/proto/OLFcDsDWZdD4eE9z6yzGRA/Trouve-ton-artisan?node-id=5-206&p=f&t=C3iCVYohfvkTwzP9-1&scaling=scale-down&content-scaling=fixed&page-id=5%3A205&starting-point-node-id=5-206",
        linkgithub: "http://github.com",
        linkEnabled: "link-dark text-decoration-none disabledLink",
        device: "PC, Tablette et Mobile"

    },

    {
        name: "API Express avec views en ejs",
        image: api,
        description: "API de gestion de réservation de places",
        tool: "Node Express et MongoDB",
        tool_img: mongoexpress,
        alt: "page de l'API Espress",
        linkbutton: "https://api-pp-russel.onrender.com",
        linkgithub: "https://github.com/boulayM/API-PP-Russel.git",
        linkEnabled: "link-dark text-decoration-none",
        user: "user@pprussel - 123",
        device: "seulement sur PC"
    },

    {
        name: "Site React institutionnel",
        image: tta,
        description: "Répertoire des atisans par catégorie",
        tool: "React, Node Express et SQL",
        tool_img: ReactExpress,
        alt: "page de l'API Espress",
        linkbutton: "https://site-artsans.onrender.com",
        linkgithub: "https://github.com/boulayM/ProjetTTA.git",
        linkEnabled: "link-dark text-decoration-none",
        device: "PC, Tablette et Mobile"
    },

    {
        name: "API restfull privée",
        image: CreationApi,
        description: "Gestion des offres de covoiturage",
        tool: "PHP avec SQL",
        tool_img: phpsql,
        alt: "page de l'API PHP",
        linkbutton: "https://mabdev.alwaysdata.net/klaxon/templates/accueil.php",
        linkgithub: "https://github.com/boulayM/Klaxon-correction.git",
        linkEnabled: "link-dark text-decoration-none",
        device: "seulement sur PC",
        user: "sophie.dubois@email.fr - J*_iIL87/63 (admin)",
        user2: "alexandre.martin@email.fr - 14'14_6&7mN (user)"
 
    },

    {
        name: "Utilisation d'un CMS",
        image: Wpress,
        description: "Mon portfolio infographiste",
        tool: "Réalisé avec Wordpress",
        tool_img: wpressLogo,
        alt: "page du site sur Wordpress",
        linkbutton: "https://mabdev.alwaysdata.net/infographie/",
        linkgithub: "https://github.com/",
        linkEnabled: "link-dark text-decoration-none disabledLink",
        device: "PC, Tablette et Mobile"
    }

];

export default job;
