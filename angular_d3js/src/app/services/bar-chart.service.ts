import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  constructor() { }

  getBarChartData(): any[] {
    return [
      {
        'title': 'Chauffage et ECS',
        'value': [
          {
            'name': 'Sud Habitat',
            'price': 12.86,
            'unit': '€/m2',
          },
          {
            'name': 'Tous Bailleurs',
            'price': 27.6,
            'unit': '€/m2',
          }
        ]
      },
      {
        'title': 'Entretien de propreté',
        'value': [
          {
            'name': 'Sud Habitat',
            'price': 5.5,
            'unit': '€/m2',
          },
          {
            'name': 'Tous Bailleurs',
            'price': 7.5,
            'unit': '€/m2',
          }
        ]
      },
      {
        'title': 'Taxes récupérables',
        'value': [
          {
            'name': 'Sud Habitat',
            'price': 6.5,
            'unit': '€/m2',
          },
          {
            'name': 'Tous Bailleurs',
            'price': 5.5,
            'unit': '€/m2',
          }
        ]
      },
      {
        'title': 'Eau',
        'value': [
          {
            'name': 'Sud Habitat',
            'price': 4.5,
            'unit': '€/m2',
          },
          {
            'name': 'Tous Bailleurs',
            'price': 4,
            'unit': '€/m2',
          }
        ]
      },
      {
        'title': 'Autres entretiens immobiliers',
        'value': [
          {
            'name': 'Sud Habitat',
            'price': 33,
            'unit': '€/m2',
          },
          {
            'name': 'Tous Bailleurs',
            'price': 43,
            'unit': '€/m2',
          }
        ]
      },
      {
        'title': 'Electricité parties communes',
        'value': [
          {
            'name': 'Sud Habitat',
            'price': 11,
            'unit': '€/m2',
          },
          {
            'name': 'Tous Bailleurs',
            'price': 8.75,
            'unit': '€/m2',
          }
        ]
      },
      {
        'title': 'Entretien des ascenseurs',
        'value': [
          {
            'name': 'Sud Habitat',
            'price': 5,
            'unit': '€/m2',
          },
          {
            'name': 'Tous Bailleurs',
            'price': 13,
            'unit': '€/m2',
          }
        ]
      },

    ];
  }

}
