import { Organization } from "./Organization";

export interface Experience{
    id?: number;
    title:string;
    description: string;
    interval:string;
    img_path:string;
    organization: Organization;
}