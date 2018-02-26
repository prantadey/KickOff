import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

    ngOnInit() {
        $(document).ready(function() {
            if ($('.navbar>ul>li').hasClass('selected')){
                $('.selected').addClass('active');
                var currentleft = $('.selected').position().left + "px";
                var currentwidth = $('.selected').css('width');
                $('.pointer').css({"left": currentleft,"width": currentwidth});
            } else {
                $('.navbar>ul>li').first().addClass('active');
                var currentleft = $('.active').position().left + "px";
                var currentwidth = $('.active').css('width');
                $('.pointer').css({"left": currentleft,"width": currentwidth});
            }
            $('.navbar>ul>li').hover(function(){
                $('.navbar ul li').removeClass('active');
                $(this).addClass('active');
                var currentleft = $('.active').position().left + "px";
                var currentwidth = $('.active').css('width');
                $('.pointer').css({"left": currentleft,"width": currentwidth});
            },function(){
                if ($('.navbar>ul>li').hasClass('selected')){
                    $('.selected').addClass('active');
                    var currentleft = $('.selected').position().left + "px";
                    var currentwidth = $('.selected').css('width');
                    $('.pointer').css({"left": currentleft,"width": currentwidth});
                } else {
                    $('.navbar>ul>li').first().addClass('active');
                    var currentleft = $('.active').position().left + "px";
                    var currentwidth = $('.active').css('width');
                    $('.pointer').css({"left": currentleft,"width": currentwidth});
                }
            });
        });
    }

}
