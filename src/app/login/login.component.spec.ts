import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

describe('LoginService', () => {
  // let component: LoginService;
  // let fixture: ComponentFixture<LoginComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ LoginComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(LoginComponent);
  //   // component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should login user', () => {
    const loginService = new LoginService();

    let result = loginService.isLogin('nahidash@code.edu.az', '123');

    expect(result).toEqual(true);
  });
});
