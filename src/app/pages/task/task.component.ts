import { Component, OnInit } from '@angular/core';
import { MenuDataService } from 'src/app/menu-dataservice';

import taskData from 'src/app/task-data.json';
import queryPostsData from 'src/app/post-data.json';

interface paragraph {  
  title: String; 
  text: String;  
  link: String;  
  imagePath: String;
}  
interface content {  
  title: String;  
  subtitle: String;  
  text: String;
  imagePath: String;
  paragraphs: paragraph[]
}  

//SECTIONS
interface section {  
  name: String;  
  title: String;
  subtitle: String;  
  text: String;
  contents: content[]
}  
interface task {    
  name: String;  
  sections: section[]
}  

//POSTS
interface post {  
  name: String;  
  title: String;
  subtitle: String;  
  text: String;
  contents: content[];
  author: String;
  authorRole: String;
  authorImage: String;
  postData: String;
  tags: String;
}  
interface postsGroup {    
  name: String;  
  title: String;
  subtitle: String;  
  text: String;
  searchTags: string;
  posts: post[];
}  

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit{

  task: task = taskData;  
  introSection: any;
  objectivesSection: any;
  informationsSection: any;
  phasesSection: any;

  queryPosts: postsGroup = queryPostsData;  
  // postsGroup: any;

  // menuArray: any;

  private pocMenuArray = [
    {'menulink': '#intro', 'menuname': 'Introduction'},
    {'menulink': '#info', 'menuname': 'Informations'},
    {'menulink': '#objectives', 'menuname': 'Objectives'},
    {'menulink': '#phases', 'menuname': 'Phases'},
    {'menulink': '#posts', 'menuname': 'Posts'}
  ];

  constructor(private data: MenuDataService) {}

  ngOnInit() {
      // this.data.currentMenu.subscribe(menuArray => this.menuArray = menuArray)
      this.data.changeMenu(this.pocMenuArray)
      this.data.changeParentLink({'link': '/main-page', 'label': 'HOME'})

      this.introSection = this.task.sections.find(x => x.name === "intro")
      this.objectivesSection = this.task.sections.find(x => x.name === "objectives")
      this.informationsSection = this.task.sections.find(x => x.name === "informations")
      this.phasesSection = this.task.sections.find(x => x.name === "phases")

      // this.postsGroup = this.queryPosts.posts.find(x => x.name === "posts")



  }




}