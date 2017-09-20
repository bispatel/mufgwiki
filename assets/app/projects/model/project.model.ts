export class Project{
    constructor(public projectName:string,
                public projectDescription:string, 
                public longDescription:string,
                public technology:string,                          
                public currentWorkDesc?:string,                              
                public resourceId?: string) {}
}