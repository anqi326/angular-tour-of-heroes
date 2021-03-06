import { DebugElement } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
      // providers: [{
      //   provide: ComponentFixtureAutoDetect, useValue: true
      // }]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should contain "banner works!"', () => {
    const bannerElem: HTMLElement = fixture.nativeElement;
    console.log('bannerElem.textContent: ' + bannerElem.textContent);
    const p = bannerElem.querySelector('p');
    expect(bannerElem.textContent).toContain('banner works!');
  });
  it('html element p should contain "banner works!"', () => {
    const bannerDeElem: DebugElement = fixture.debugElement;
    const bannerElem: HTMLElement = bannerDeElem.nativeElement;
    console.log('bannerElem.textContent: ' + bannerElem.textContent);
    const p = bannerElem.querySelector('p');
    expect(p.textContent).toContain('banner works!');
  });
  it('should find the <p> with fixture.debugElement.query(By.css)"', () => {
    const bannerDeElem: DebugElement = fixture.debugElement;
    const pDeElem = bannerDeElem.query(By.css('p'));
    const p = pDeElem.nativeElement;
    expect(p.textContent).toContain('banner works!');
  });
  it('h1 element should contain "Test Tour of Heroes"', () => {
    let h1: HTMLElement;
    h1 = fixture.nativeElement.querySelector('h1');
    let oldTitle = component.title;
    component.title = "new title";
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
    console.log('h1.textContent: ' + h1.textContent);
  })

})



//   beforeEach(() => {
//     fixture = TestBed.createComponent(BannerComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
