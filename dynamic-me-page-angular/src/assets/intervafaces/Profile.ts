import { Experience } from "./Experience";
import { Organization } from "./Organization";
import { Project } from "./Project";
import{ Skill } from "./Skill"

export interface Profile{
    name:string;
    description_texts: string[]; 
    avatar_path: string;
    banner_path: string;
    about:string;
    experiences: Experience[];
    projects: Project[];
    show_about: boolean;
    show_experiences: boolean;
    show_projects: boolean;
    show_skills: boolean;
    id?: number;
    organizations: Organization[];
    skills: Skill[];
}