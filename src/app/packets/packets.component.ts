
import { Component, OnInit, ViewChild } from '@angular/core';
import { RootService } from 'src/app/services/root.service';

@Component({
  selector: 'app-packets',
  templateUrl: './packets.component.html',
  styleUrls: ['./packets.component.scss']
})
export class PacketsComponent implements OnInit {

  public packets: any = null;
  public displayedColumns: string[] =
   ['id', 'countryOrigin', 'sender', 'countryDestination', 'addressDestination', 'cost', 'awb'];

  constructor(private rootService: RootService) {
     this.getAllPackets();
    }

  ngOnInit() {
  }

  getAllPackets() {
      this.rootService.getAllPackets().subscribe(t => {
        this.packets = t;
        console.log(t);
      });
  }

  filterPackets(filter: string) {
    this.rootService.getAllPacketsAndFilter(filter).subscribe(c => {
      this.packets = c;
      console.log(c);
    });
  }

  getAllFilterDate(startDate: Date, endDate: Date) {
    // if (startDate == null && endDate == null) {
    //   this.getAllTasks(0);
    // }
    // if (startDate === undefined && endDate === undefined) {
    //   this.getAllTasks(0);
    // }
    // if (startDate == null && endDate === undefined) {
    //   this.getAllTasks(0);
    // }
    // if (startDate === undefined && endDate == null) {
    //   this.getAllTasks(0);
    // }

    // if (startDate == null && undefined && endDate == null || undefined) {
    //   this.getAllTasks(0);
    // }

    // startDate || endDate == null ? this.getAllTasks(0) : this.rootService.getAllFilterDate(startDate, endDate).subscribe(t => {
    //   this.tasks = t;
    //   console.log(t);
    // });
  }
}
