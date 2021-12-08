declare type IconParams = {
    packager: {
        icon?: string;
        targetUrl: string;
        platform?: string;
    };
};
export declare function icon(options: IconParams): Promise<string | undefined>;
export {};
