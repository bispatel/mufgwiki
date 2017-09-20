export class Application{
    constructor(public appName:string,
                public releaseRef:string,
                public estimation:string,
                public startDate:string,
                public plannedReleaseDate?:string,
                public actualReleaseDate?:string,
                public plannedWorkDays?:string,
                public actualWorkDays?:string) {}
}




