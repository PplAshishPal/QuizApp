import { Router } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HomepageComponent } from './homepage.component';
import { FormsModule } from '@angular/forms';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;
  let toastrService: ToastrService;
  let router = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), FormsModule],
      declarations: [HomepageComponent],
      providers: [ToastrService, { provide: Router, useValue: router }],
    }).compileComponents();

    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    toastrService = TestBed.inject(ToastrService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSubmit Handler', () => {
    it('should navigate to instructions if inviteCode present', () => {
      component.inviteCode = '12345';
      component.onSubmit();
      expect(router.navigate).toHaveBeenCalledWith(['/instructions']);
    });
    it('should give toast error if inviteCode not present', () => {
      component.inviteCode = '00aa';
      component.onSubmit();
      spyOn(toastrService, 'error').and.callThrough();
    });
  });
});
