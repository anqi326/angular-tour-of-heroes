import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './heroes.component';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeroesComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('display hero name should equal', fakeAsync(() => {
  //   const compiled = fixture.nativeElement;
  //   const app = fixture.componentInstance;
  //   console.log('log:' + compiled.querySelector('.content').value);
  //   // expect(compiled.querySelector('.content label input').textContent).toEqual(app.hero.name);
  // }));

  it('display hero name should equal', fakeAsync(() => {
    const compiled = fixture.nativeElement;
    console.log('compiled: ' + compiled);
    const domElem = compiled.querySelector('.content label input');
    console.log('domElem: ' + domElem);
    fixture.detectChanges();
    domElem.value = "Windstorm1";
    // var event = new Event('input', {
    //   'bubbles': true,
    //   'cancelable': true
    // });
    domElem.dispatchEvent(new Event('input'));
    // tick();
    fixture.detectChanges();
    expect(component.hero.name).toEqual(domElem.value);
    console.log('domElem: ' + domElem.value);
  }));
});
