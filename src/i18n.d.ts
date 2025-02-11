declare module 'i18next' {
    interface CustomTypeOptions{
        defaultNS: 'translation';
        resources: {
            translation:{
                home:string;
                service:string;
                product:string;
                aboutUs:string;
                contactUs:string;
            }
        }
    }
}