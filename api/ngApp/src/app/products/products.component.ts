import { Component, OnInit } from "@angular/core";
@Component({
    templateUrl: './products.component.html',
    styles: [
        `
        .products{
            margin:0px auto;
            width:100%;
            height:100%;
            background:#21283c66;
            font-family:SegoeUI,"Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 20px;
            color:wheat;
        }
        .header{
            padding:15px;
            width:100%;
            margin:0px auto;
        }
        .small{
            height:60px;
        }
        .cute-button {
	-moz-box-shadow:inset 0px 1px 0px 0px #bbdaf7;
	-webkit-box-shadow:inset 0px 1px 0px 0px #bbdaf7;
	box-shadow:inset 0px 1px 0px 0px #bbdaf7;
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #79bbff), color-stop(1, #378de5));
	background:-moz-linear-gradient(top, #79bbff 5%, #378de5 100%);
	background:-webkit-linear-gradient(top, #79bbff 5%, #378de5 100%);
	background:-o-linear-gradient(top, #79bbff 5%, #378de5 100%);
	background:-ms-linear-gradient(top, #79bbff 5%, #378de5 100%);
	background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#79bbff', endColorstr='#378de5',GradientType=0);
	background-color:#79bbff;
	-moz-border-radius:3px;
	-webkit-border-radius:3px;
	border-radius:3px;
	border:1px solid #84bbf3;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:12px;
	font-weight:bold;
	padding:4px 15px;
    height:15px;
	text-decoration:none;
	text-shadow:0px 1px 0px #528ecc;
}
.cute-button:hover {
	background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #378de5), color-stop(1, #79bbff));
	background:-moz-linear-gradient(top, #378de5 5%, #79bbff 100%);
	background:-webkit-linear-gradient(top, #378de5 5%, #79bbff 100%);
	background:-o-linear-gradient(top, #378de5 5%, #79bbff 100%);
	background:-ms-linear-gradient(top, #378de5 5%, #79bbff 100%);
	background:linear-gradient(to bottom, #378de5 5%, #79bbff 100%);
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#378de5', endColorstr='#79bbff',GradientType=0);
	background-color:#378de5;
}
.cute-button:active {
	position:relative;
	top:1px;
}

        `
    ]
})

export class ProductsComponent implements OnInit {
    tiles: string[];
    ngOnInit() {

    }
    ngOnDestroy() {
    }

}