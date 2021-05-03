import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {Chart} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Directive({
  selector: '[appChart]'
})
export class ChartDirective implements OnInit{
  @Input() labels: string[];
  @Input() data: number[];

  constructor(private element: ElementRef) {
  }

  ngOnInit(): Chart {
   return new Chart(this.element.nativeElement.getContext('2d'), {
      plugins: [ChartDataLabels],
      type: `horizontalBar`,
      data: {
        labels: this.labels,
        datasets: [{
          data: this.data,
          backgroundColor: `#ffffff`,
          hoverBackgroundColor: `#ffffff`,
        }]
      },
      options: {
        plugins: {
          datalabels: {
            font: {
              size: 13
            },
            color: `#000000`,
            anchor: `end`,
            align: `start`,
            formatter: (val) => `€ ${val}`,
          }
        },
        title: {
          display: true,
          text: `MONEY`,
          fontColor: `#000000`,
          fontSize: 23,
          position: `left`
        },
        scales: {
          yAxes: [{
            ticks: {
              fontColor: `#000000`,
              padding: 5,
              fontSize: 13,
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
          }],
          xAxes: [{
            ticks: {
              display: false,
              beginAtZero: true,
            },
            gridLines: {
              display: false,
              drawBorder: false
            },
          }],
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
        }
      }
    });
  }
}
