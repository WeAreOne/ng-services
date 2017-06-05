import { Component, Inject, OnInit } from '@angular/core';
import { CustomService } from '../services/custom.service';
import { SizeService } from '../services/size.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
  providers: [ { provide: 'SizeService', useClass: CustomService } ],
  viewProviders: [ Title ]
})
export class SubComponent implements OnInit {

  constructor(@Inject('SizeService') private sizeService: SizeService, title: Title) {
    title.setTitle('Sub component title');
  }

  ngOnInit() {
    this.sizeService.run();
  }

}
