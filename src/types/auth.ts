export interface IBaseForm {
    email: string;
    password: string;
}

export interface ILoginForm extends IBaseForm {}

export interface IRegisterForm extends IBaseForm {
    confirmPassword: string;
}