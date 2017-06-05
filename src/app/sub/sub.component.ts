import { Component, Inject, OnInit } from '@angular/core';
import { CustomService } from '../services/custom.service';
import { SizeService } from '../services/size.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
  providers: [ { provide: 'SizeService', useClass: CustomService } ]
})
export class SubComponent implements OnInit {

  constructor(@Inject('SizeService') private sizeService: SizeService) { }

  ngOnInit() {
    this.sizeService.run();
  }

}
