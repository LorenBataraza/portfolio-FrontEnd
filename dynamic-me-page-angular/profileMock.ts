import { Profile } from "./assets/intervafaces/Profile"

export const dataBaseProfiles: Profile = {
    name:"Lorenzo",
    surname: "Cabrera Blanch",
    about:"Soy estudiante ... ",
    experiences:[
        {
        title:"Investigación en Bioinformática",
        description: "Implementación de clasificación de especies",
        interval:"2021",
        organization: {
                name:"IPROBIQ",
                img_path:"src\assets\img\organizations\IPROBYQ icon.jpg"
            }
        },
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