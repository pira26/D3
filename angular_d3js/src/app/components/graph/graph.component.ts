import { Component, OnInit } from '@angular/core';
import { BarChartService } from '../../services/bar-chart.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit {

  public title = 'Coût de chaque poste de charge';
  public parent: any [] = [];

  constructor(private barChartService: BarChartService) { }

  ngOnInit() {
    this.parent = this.barChartService.getBarChartData();
  }

}
