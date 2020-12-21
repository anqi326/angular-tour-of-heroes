import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../UserService';

import { WelcomeComponent } from './welcome.component';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let userServiceStub: Partial<UserService>;
  let userService: UserService;
  let el: HTMLElement;

  beforeEach(async(() => {
    userServiceStub = { isLoggedIn: true, user: { name: 'An Qi' } };
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      providers: [{ provide: UserService, useValue: userServiceStub }],
    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
    userService = TestBed.inject(UserService);
    el = fixture.nativeElement.querySelector('.welcome');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should welcom the user', () => {
    fixture.detectChanges();
    const content = el.textContent;
    expect(content).toContain("Welcome", "Welcome ...");
    expect(content).toContain("An Qi", "expected name");
  });

  it('should welcome Bubba', () => {
    userService.user.name = 'Bubba';
    fixture.detectChanges();
    expect(el.textContent).toContain("Bubba");
  })

  it('should request login if not logged in', () => {
    userService.isLoggedIn = false;
    fixture.detectChanges();
    expect(el.textContent).not.toContain('Welcome');
    expect(el.textContent).toMatch(/log in/i, '"log in"');
  })
});
