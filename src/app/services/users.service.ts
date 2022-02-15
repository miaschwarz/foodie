import { ThrowStmt } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';

@Injectable()
export class UsersService {

  users = new Array();

  allUsers = [
    {
      "name": "Monica Geller",
    },
    {
      "name": "Rachel Green",
    },
    {
      "name": "Chander Bing",
      
    }
  ];
}