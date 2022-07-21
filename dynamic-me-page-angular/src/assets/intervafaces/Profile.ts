import { Experience } from "./Experience";
import { Project } from "./Project";

export interface Profile{
    name:string;
    about:string;
    experiences: Experience[];
    projects: Project[];
    show_about: boolean;
    show_experiences: boolean;
    show_projects: boolean;
    id?: number;
}