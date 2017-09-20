export class AppDb{
    constructor(public appName:string,
                public environment:string,
                public serverName: string,
                public port: string,
                public sid: string,
                public userName: string,
                public password: string
            ) {}
}