export declare type UserAgentOpts = {
    packager: {
        electronVersion?: string;
        platform?: string;
    };
    nativefier: {
        userAgent?: string;
    };
};
export declare function userAgent(options: UserAgentOpts): Promise<string | undefined>;
