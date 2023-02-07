import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LogoComponent } from '../logo/logo.component';

import { NavigationComponent } from './navigation.component';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationComponent, LogoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as userName 'Ashish'`, () => {
    expect(component.userName).toEqual('Ashish');
  });
});
