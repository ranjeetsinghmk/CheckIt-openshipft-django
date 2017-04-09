export /**
 * User
 */
    class User {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    photo: string;
    constructor(parameters) {
        this.id = parameters.id;
        this.username = parameters.username;
        this.name = parameters.name;
        this.password = parameters.password;
        this.email = parameters.email;
        this.name = parameters.name;
        this.name = this.getName();
        console.log(this.name);
        this.photo = this.photo;
    }


    getRP() {
        let photos = [
            'https://material.angularjs.org/latest/img/washedout.png',
            'http://www.planwallpaper.com/static/images/canberra_hero_image_JiMVvYU.jpg',
            "http://www.planwallpaper.com/static/images/offset_WaterHouseMarineImages_62652-2-660x440.jpg",
            "http://www.planwallpaper.com/static/images/9-credit-1.jpg",
            "http://www.dam7.com/Images/Puppy/images/myspace-puppy-images-0005.jpg",
            "http://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg"
        ];
        return photos[Math.floor(Math.random() * 10000) % photos.length];
    }

    validateIt() {
        if (!this.name) {
            this.name = this.getName();
        }
        if (!this.photo) {
            this.photo = this.getRP();
        }
    }

    getName() {
        return this.name ? this.name : (this.email ? this.email.substring(0, this.email.indexOf('@')) : "");
    }

    toString() {
        return this.getName() + "(" + this.username + ")"
    }
}
export /**
 * Profile
 */
    class Profile {
    constructor(parameters) {

    }
}