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
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
    id: 3,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
    id: 1,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
    id: 3,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
},
{
    id: 1,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
    id: 3,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
    id: 1,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
    id: 3,
    name:"Lorenzo Cabrera Blanch",
    description_texts: ["Estuadiante de Ingeniería", "Y amante de las mandarinas 🍊"],
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
} 


]