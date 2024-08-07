import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events = [
    { id: 1, name: 'Angular Workshop', description: 'A workshop on Angular.' },
    { id: 2, name: 'React Conference', description: 'A conference about React.' },
    { id: 3, name: 'Vue Meetup', description: 'A meetup for Vue enthusiasts.' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
