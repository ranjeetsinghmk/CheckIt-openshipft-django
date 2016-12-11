export class StringUtil{
    getUsername(email: string): string {
        return email.substring(0, email.indexOf("@") - 1);
    }
}