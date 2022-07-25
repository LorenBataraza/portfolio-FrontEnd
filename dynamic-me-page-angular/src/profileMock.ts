import { Profile } from "./assets/intervafaces/Profile"
import { Experience } from "./assets/intervafaces/Experience"
import { Project } from "./assets/intervafaces/Project"
import { Skill } from "./assets/intervafaces/Skill"
import { SkillLevel } from "./assets/intervafaces/skillLevels"

let SkillLevelEnum = SkillLevel

export const dataBaseProfiles: Profile[] = [
    {
    id: 1,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Estuadiante de Ingeniería 🛠", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
} ,

{
    id: 2,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Amante de la Exactitud 📐", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me-12.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
} ,

{
    id: 3,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Aficionado en el Análisis de Datos 🗃", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me-3.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
} ,
{
    id: 4,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Profesor Particular 🎓", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me-4.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
} ,

{
    id: 5,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Programador Front-End Junior 👨‍💻", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me-5.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
} ,

{
    id: 6,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Premiado Concursante de Olimpiadas 🥇", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me-6.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
},
{
    id: 7,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Akshan Enjoyer 🏹", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me-7.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
} ,

{
    id: 8,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Técnico Químico 🧪", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me-8.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
} ,

{
    id: 9,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Obsesivo de projectos 💡", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me-9.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
} ,
{
    id: 10,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Técnico Químico 🧪", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me-10.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
} ,

{
    id: 11,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me-11.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
} ,

{
    id: 12,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
    about:"Soy estudiante ... ",
    avatar_path:"../assets/img/profile-pictures/Me-12.jpg",
    banner_path:"../assets/img/banners/shadesmar.jpg",
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
    show_projects: true,
    show_skills: true,
    organizations: [
        {
            name:"Iniciativa Aurora",
            img_path:"../assets/img/organizations/Inicitiativa Aurora.png"
        },
        {
            name:"IPROBIQ",
            img_path:"../assets/img/organizations/IPROBYQ icon.jpg"
        }
    ],
    skills:[
        {
            title:"HTML 5",
            proficiency: SkillLevelEnum.Competent
        },

        {
            title:"CSS 3",
            proficiency: SkillLevelEnum.Advanced
        },
        {
            title:"Soft Skills",
            proficiency: SkillLevelEnum.Competent
        },
        {
            title:"Angular",
            proficiency: SkillLevelEnum.Advanced
        }
    ],
} 


]