import { string ,ref, object} from "yup";

const message = {
    require : "Bu alanı doldurunuz...",
    mail : "Geçerli mail adresini giriniz...",
    min : "En az 5 karakter giriniz...",
    passwordControl : "Şifreler uyuşmuyor...",
}

const validations = object({
    name : string().required(message.require),
    mail : string().email(message.mail).required(message.require),
    password : string().min(5,message.min).required(message.require),
    passwordConfirm : string().oneOf([ref("password")],message.passwordControl).required(message.require)

})

export default validations;