import { Component, ElementRef, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { AxisDomain, AxisScale } from 'd3';

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

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.createSVG();
  }

  private createSVG(): void {
    const svg = this.initSVG();
    const x = this.generateXScale(svg);
    const y = this.generateYScale(svg);
    this.drawRectForBarChart(svg, x, y);
    this.drawYAxis(svg, y);
    this.writeBarChartTitle(svg);
  }

  private initSVG(): any {
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    return d3.select( this.el.nativeElement.querySelector('.bar-chart-container') )
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height + 30)
      .append('g')
      .attr('transform', `translate(200, 20)`);
  }

  private generateXScale(svg: any): AxisScale<AxisDomain> {
    return d3.scaleLinear()
      .rangeRound([0, this.width])
      .domain([0, +d3.max(this.child.value, (d: any) => d.price)]); // Scale the range of the data in the domains
  }

  private generateYScale(svg: any): AxisScale<AxisDomain> {
    return d3.scaleBand()
      .rangeRound([this.height, 0])
      .padding(0.5)
      .domain(this.child.value.map((d) => `${d.price} ${d.unit}`)); // Scale the range of the data in the domains
  }

  private drawRectForBarChart(svg: any, x: AxisScale<AxisDomain>, y: AxisScale<AxisDomain>): void {
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
  }

  private writeBarChartTitle(svg: any): void {
    svg.append('g')
      .append('text')
      .attr('width', 100)
      .attr('height', 100)
      .attr('text-anchor', 'start')
      .text(this.child.title);
  }

  private drawYAxis(svg: any, y: AxisScale<AxisDomain>): void {
    // add the y Axis
    svg.append('g')
      .call(d3.axisLeft(y))
      .select('.domain')
      .remove();
  }

  private drawXAxis(svg: any, x: AxisScale<AxisDomain>): void {
    // add the x Axis
    svg.append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisBottom(x));
  }

  private selectColor(valueName: string): string {
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
