import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input()
  public child: any;

  private width = 800;
  private height = 40;

  constructor() { }

  ngOnInit() {
    this.createSVG();
  }

  createSVG(): void {
    const x = d3.scaleLinear()
      .range([0, this.width]);

    const y = d3.scaleBand()
      .range([this.height, 0])
      .padding(0.5);

    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    const svg = d3.select('.bar-chart-container')
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height + 30)
      .append('g')
      .attr('transform', `translate(200, 20)`);

    // Scale the range of the data in the domains
    x.domain([0, +d3.max(this.child.value, (d: any) => d.price)]);
    y.domain(this.child.value.map((d) => `${d.price} ${d.unit}`));

    // append the rectangles for the bar chart
    svg.selectAll('rect')
      .data(this.child.value)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('width', (d: any) => x(+d.price))
      .attr('y', (d: any) => y(`${d.price} ${d.unit}`))
      .attr('height', y.bandwidth())
      .attr('rx', 5)
      .style('fill', (d: any) => this.selectColor(d.name));

    // add the x Axis
    /*svg.append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));*/

    // add the y Axis
    svg.append('g')
      .call(d3.axisLeft(y))
      .select('.domain')
      .remove();

    svg.append('g')
      .append('text')
      .attr('width', 100)
      .attr('height', 100)
      .attr('text-anchor', 'start')
      .text(this.child.title);
  }

  selectColor(valueName: string): string {
    let color;
    switch (valueName) {
      case 'Sud Habitat':
        color = '#0F52BA';
        break;
      case 'Tous Bailleurs':
        color = '#767B91';
        break;
      default:
        break;
    }
    return color;
  }

}
