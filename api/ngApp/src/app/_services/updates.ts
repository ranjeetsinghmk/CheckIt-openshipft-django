import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from "rxjs";
import 'rxjs/add/operator/map'

@Injectable()
export class UpdatesService {
    private CREATIVE_TOP_MESSAGE_KEY = "creative_top_messages";
    private MENUS_KEY = "menus";
    constructor(private http: Http) {
        localStorage.setItem(this.CREATIVE_TOP_MESSAGE_KEY, `
        [
            "<font size='2' color='blue' >Welcome to CheckIt</font>",
            "<font size='2' color='blue' >We are together creative</font>",
            "<font size='2' color='blue' >Explore explore explore and explore</font>"
        ]
        `)
        localStorage.setItem(this.MENUS_KEY, `
        [
            {
                "id": "m1",
                "title": "CheckIt",
                "photo": "./static/updates/assets/img/icon-games.png",
                "desc": "Beautiful game for all. concentrate on it.",
                "links": [
                    {
                        "name": "Amazon Apps store",
                        "icon": "https://cdn1.iconfinder.com/data/icons/app-stores-2/512/amazon_app_store_2.png",
                        "target": "https://www.amazon.com/rjsdtr-CheckIt/dp/B01604BGAC/"
                    }
                ]
            },
            {
                "id": "m2",
                "title": "Business",
                "photo": "http://www.planwallpaper.com/static/images/offset_WaterHouseMarineImages_62652-2-660x440.jpg",
                "desc": "We provide platform for your business plan. Here you can design evething in no time with our creative UI."
                "links":[
                    {
                        "name": ""
                    }
                ]
            }, 
            {
                "id": "m3",
                "title": "Explore",
                "photo":"http://www.planwallpaper.com/static/images/9-credit-1.jpg",
                "desc": "What is going on?? search for everything on a single platform. find the nice places in this World."
            },
            {
                "id": "m4",
                "title": "Prove yourself",
                "photo": "http://www.dam7.com/Images/Puppy/images/myspace-puppy-images-0005.jpg",
                "desc": "Create a funtastic resume with a template of your choice FREE."
            },
            {
                "id": "m5",
                "title": "Extra",
                "photo": "http://i.dailymail.co.uk/i/pix/2016/11/02/15/39FD647300000578-0-image-a-15_1478101071773.jpg",
                "desc": "Know what are we here for? write us and much more things."
            }
            ]
        `)

    }

    base = "http://127.0.0.1:8000";
    getUpdatesMenuItems(): Observable<any> {
        // let data = JSON.parse(localStorage.getItem(this.MENUS_KEY));
        // let maxDesc = 0;
        // return data;
        return this.http.get(this.base + '/api/products/menus.json').map(
            (response: Response) => response.json()["results"]);
    }

    getTopCreativeMessage(old: string) {
        //Not want old
        let data = JSON.parse(localStorage.getItem(this.CREATIVE_TOP_MESSAGE_KEY));
        if (data.length == 0) {
            data = ["<font size='2' color='blue' >Welcome to CheckIt</font>"];
        }
        let result = data[Math.floor(Math.random() * 100000) % data.length];
        while (old == result) {
            result = data[Math.floor(Math.random() * 100000) % data.length];
        }
        return result;
    }
}