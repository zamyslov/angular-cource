import {keyframes, group, animate, state, style, transition, trigger} from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  // void => *
  transition(':enter', [
    style({
      width: '*',
      height: '*'
    }),
    group([
      animate(2000, style({
        width: '200px',
        height: '200px'
      })),
      animate(6000, keyframes([
        style({backgroundColor: 'blue'}),
        style({backgroundColor: 'yellow'}),
        style({backgroundColor: 'green'})
      ]))
    ]),
    animate(1000)
  ]),
  // * => void
  transition(':leave', [
    animate(500, style({
      opacity: 0
    }))
  ])
]);

