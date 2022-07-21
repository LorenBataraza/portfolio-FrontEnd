import { Profile } from "./assets/intervafaces/Profile"
import { Experience } from "./assets/intervafaces/Experience"
import { Project } from "./assets/intervafaces/Project"

export const dataBaseProfiles: Profile = 
    {
    name:"Lorenzo Cabrera Blanch",
    about:"Soy estudiante ... ",
    experiences:[
        {
        title:"Investigación en Bioinformática",
        description: "Implementación de clasificación de especies",
        interval:"2021",
        img_path:"../assets/img/organizations/IPROBYQ icon.jpg",
        organization: {
                name:"IPROBIQ",
                img_path:"src/assets/img/organizations/IPROBYQ icon.jpg"
            }
        },
        {
            title:"Trabajo",
            description:"Dessarrollo de Modalidades Abiertas y Transparentes",
            interval:"2022",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png",
            organization:{
                name:"Iniciativa Aurora",
                img_path:"src/assets/img/organizations/Inicitiativa Aurora.png"
            }
        }
    ],
    projects: [
        {
        title:"Proyecto con Arduino",
        description:"Armado Simple de circuitos",
        interval:"2022"
        },

        {
            title:"Masapanes",
            description:"Cocina Simple",
            interval:"2021"
        }

    ],
    show_about: true,
    show_experiences: true,
    show_projects: true
}