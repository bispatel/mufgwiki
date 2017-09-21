export class DBDetail{
    constructor(public appName:string,
                public appEnvironment:string,
                public serverName: string,
                public port: string,
                public sid: string,
                public userName: string,
                public password: string
            ) {}
}