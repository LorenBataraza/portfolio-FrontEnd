import{ SkillLevel } from "./skillLevels"

export interface Skill{
    id?: number;
    title:string;
    proficiency: SkillLevel;
}