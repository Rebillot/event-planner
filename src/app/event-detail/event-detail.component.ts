import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Event {
  id: number;
  name: string;
  description: string;
}

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: Event | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const eventId = this.route.snapshot.paramMap.get('id');
    if (eventId) {
      this.event = this.getEvent(+eventId);
    }
  }

  getEvent(id: number): Event | undefined {
    const events: Event[] = [
      { id: 1, name: 'Angular Workshop', description: 'A workshop on Angular.' },
      { id: 2, name: 'React Conference', description: 'A conference about React.' },
      { id: 3, name: 'Vue Meetup', description: 'A meetup for Vue enthusiasts.' },
    ];
    return events.find(event => event.id === id);
  }
}
